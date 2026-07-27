import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site-config";
import { sendNotificationEmail } from "@/lib/email";

const requiredFields = ["name", "email", "phone", "eventType", "eventDate", "guestCount", "location"] as const;

export async function POST(request: Request) {
  const data = await request.json().catch(() => null);

  if (!data) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  for (const field of requiredFields) {
    if (typeof data[field] !== "string" || !data[field].trim()) {
      return NextResponse.json({ error: "Please fill in all required fields." }, { status: 400 });
    }
  }

  const { name, email, phone, eventType, eventDate, guestCount, budget, location, message } = data as Record<
    string,
    string
  >;

  await sendNotificationEmail({
    to: siteConfig.email,
    subject: `New quote request — ${eventType} for ${name}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Event type: ${eventType}`,
      `Event date: ${eventDate}`,
      `Estimated guests: ${guestCount}`,
      budget ? `Budget: ${budget}` : null,
      `Location: ${location}`,
      "",
      message || "(No additional details provided)",
    ]
      .filter(Boolean)
      .join("\n"),
  });

  return NextResponse.json({ ok: true });
}
