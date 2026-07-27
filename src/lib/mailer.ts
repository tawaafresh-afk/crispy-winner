import fs from "node:fs";
import path from "node:path";
import nodemailer, { type Transporter, type SendMailOptions } from "nodemailer";

// SMTP is configured entirely via environment variables — see .env.example.
// Without them, emails are logged instead of sent so local development
// doesn't require real credentials.

let cachedTransporter: Transporter | null | undefined;

function getTransporter(): Transporter | null {
  if (cachedTransporter !== undefined) return cachedTransporter;

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    cachedTransporter = null;
    return null;
  }

  cachedTransporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  return cachedTransporter;
}

export type MailMessage = {
  to: string;
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
  attachments?: SendMailOptions["attachments"];
};

export async function sendMail(message: MailMessage) {
  const transporter = getTransporter();
  const fromAddress = process.env.SMTP_USER ?? "no-reply@tawaafresh.com";
  const from = `"Tawaa Fresh" <${fromAddress}>`;

  if (!transporter) {
    console.log("[email:dev] SMTP env vars not set — logging email instead of sending.");
    console.log(`[email:dev] To: ${message.to}\nSubject: ${message.subject}\n${message.text}`);
    return;
  }

  await transporter.sendMail({ from, ...message });
}

/**
 * Reads the Tawaa Fresh logo from the public/ directory so it can be
 * embedded inline (via cid) rather than linked as a remote image — inline
 * images render reliably in email clients that block remote content.
 * Returns null (email sends without a logo) if the file isn't available.
 */
export function getLogoAttachment(): NonNullable<SendMailOptions["attachments"]>[number] | null {
  try {
    const filePath = path.join(process.cwd(), "public", "images", "logo", "tawaa-fresh-icon.png");
    const content = fs.readFileSync(filePath);
    return { filename: "tawaa-fresh-logo.png", content, cid: "tawaa-fresh-logo" };
  } catch {
    return null;
  }
}
