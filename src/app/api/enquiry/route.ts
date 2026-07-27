import { NextResponse } from "next/server";
import { sendMail, getLogoAttachment } from "@/lib/mailer";
import { buildEnquiryNotificationEmail, buildCustomerAutoReplyEmail } from "@/lib/email-templates";
import { cleanLine, cleanText, isValidEmail } from "@/lib/sanitize";
import { isRateLimited, getClientIp } from "@/lib/rate-limit";
import { siteConfig } from "@/lib/site-config";

export async function POST(request: Request) {
  const ip = getClientIp(request);
  if (isRateLimited(`enquiry:${ip}`)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again shortly or contact us on 07477 211142." },
      { status: 429 }
    );
  }

  const data = await request.json().catch(() => null);
  if (!data || typeof data !== "object") {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: bots that fill in every field trip this hidden one.
  // Return success without sending anything, so bots don't learn to avoid it.
  if (cleanLine((data as Record<string, unknown>).companyWebsite)) {
    return NextResponse.json({ ok: true });
  }

  const name = cleanLine(data.name);
  const email = cleanLine(data.email);
  const phone = cleanLine(data.phone);
  const eventDate = cleanLine(data.eventDate);
  const message = cleanText(data.message);

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Please fill in all required fields." }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const notification = buildEnquiryNotificationEmail({ name, email, phone, eventDate, message });
  const autoReply = buildCustomerAutoReplyEmail({ firstName: name.split(" ")[0] || name });
  const logo = getLogoAttachment();

  try {
    await sendMail({
      to: siteConfig.email,
      subject: notification.subject,
      html: notification.html,
      text: notification.text,
      replyTo: email,
      attachments: logo ? [logo] : undefined,
    });

    await sendMail({
      to: email,
      subject: autoReply.subject,
      html: autoReply.html,
      text: autoReply.text,
      replyTo: siteConfig.email,
      attachments: logo ? [logo] : undefined,
    });
  } catch (error) {
    console.error("[api/enquiry] Failed to send email:", error);
    return NextResponse.json(
      { error: "There was a problem sending your enquiry. Please try again or contact us on 07477 211142." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
