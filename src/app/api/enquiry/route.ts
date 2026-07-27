import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site-config";
import { sendNotificationEmail } from "@/lib/email";

export async function POST(request: Request) {
  const data = await request.json().catch(() => null);

  if (!data || typeof data.name !== "string" || typeof data.email !== "string" || typeof data.message !== "string") {
    return NextResponse.json({ error: "Please fill in all required fields." }, { status: 400 });
  }

  const { name, email, phone, eventDate, message } = data as Record<string, string>;

  if (!name.trim() || !email.trim() || !message.trim()) {
    return NextResponse.json({ error: "Please fill in all required fields." }, { status: 400 });
  }

  await sendNotificationEmail({
    to: siteConfig.email,
    subject: `New enquiry from ${name}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      eventDate ? `Event date: ${eventDate}` : null,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n"),
  });

  return NextResponse.json({ ok: true });
}
