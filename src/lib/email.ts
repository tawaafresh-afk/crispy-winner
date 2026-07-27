// Sends transactional notification emails for the enquiry and quote forms.
// Set RESEND_API_KEY (https://resend.com) in your environment to enable real
// delivery. Without it, submissions are simply logged so the forms still
// work end-to-end in development or before an email provider is configured.

type NotificationEmail = {
  to: string;
  subject: string;
  text: string;
};

export async function sendNotificationEmail({ to, subject, text }: NotificationEmail) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL ?? "Tawaa Fresh Website <onboarding@resend.dev>";

  if (!apiKey) {
    console.log("[email:dev] RESEND_API_KEY not set — logging submission instead of sending.");
    console.log(`[email:dev] To: ${to}\nSubject: ${subject}\n${text}`);
    return;
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ from, to, subject, text }),
  });

  if (!res.ok) {
    console.error("[email] Resend API error:", await res.text());
  }
}
