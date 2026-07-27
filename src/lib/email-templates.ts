import { escapeHtml } from "@/lib/sanitize";
import { siteConfig } from "@/lib/site-config";

export type EnquiryEmailData = {
  name: string;
  email: string;
  phone: string;
  eventType?: string;
  eventDate?: string;
  guests?: string;
  budgetRange?: string;
  venue?: string;
  message?: string;
};

const BRAND_GREEN = "#0e2e1f";
const BRAND_GREEN_DARK = "#081d14";
const BRAND_GOLD = "#cb9928";
const BRAND_CREAM = "#fbf6ea";

function layout(bodyHtml: string, previewText: string): string {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Tawaa Fresh</title>
  </head>
  <body style="margin:0; padding:0; background-color:${BRAND_CREAM}; font-family:Georgia,'Times New Roman',serif; color:${BRAND_GREEN_DARK};">
    <span style="display:none; max-height:0; overflow:hidden;">${escapeHtml(previewText)}</span>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${BRAND_CREAM}; padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px; background-color:#ffffff; border-radius:16px; overflow:hidden; border:1px solid #e8e0cf;">
            <tr>
              <td style="background:linear-gradient(135deg, ${BRAND_GREEN} 0%, ${BRAND_GREEN_DARK} 100%); padding:28px 32px; text-align:center;">
                <img src="cid:tawaa-fresh-logo" alt="Tawaa Fresh" width="56" height="56" style="border-radius:50%; display:block; margin:0 auto 12px;" />
                <span style="color:${BRAND_GOLD}; font-size:22px; font-weight:bold; letter-spacing:0.02em;">Tawaa Fresh</span>
                <div style="color:#cfe3d7; font-size:11px; letter-spacing:0.2em; text-transform:uppercase; margin-top:4px;">Authentic Pakistani Catering</div>
              </td>
            </tr>
            <tr>
              <td style="padding:32px;">
                ${bodyHtml}
              </td>
            </tr>
            <tr>
              <td style="background-color:${BRAND_GREEN_DARK}; padding:18px 32px; text-align:center;">
                <span style="color:#cfe3d7; font-size:12px;">
                  Tawaa Fresh &middot; ${escapeHtml(siteConfig.location.display)} &middot; ${escapeHtml(siteConfig.phoneDisplay)}
                </span>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function row(label: string, value: string): string {
  return `<tr>
    <td style="padding:4px 0; color:#6b6255; font-size:13px; width:150px; vertical-align:top;">${escapeHtml(label)}</td>
    <td style="padding:4px 0; color:${BRAND_GREEN_DARK}; font-size:14px; font-weight:600;">${escapeHtml(value)}</td>
  </tr>`;
}

function sectionHeading(title: string): string {
  return `<h2 style="margin:28px 0 12px; font-size:15px; letter-spacing:0.08em; text-transform:uppercase; color:${BRAND_GOLD}; border-bottom:1px solid #eee2c8; padding-bottom:8px;">${escapeHtml(title)}</h2>`;
}

export function buildEnquiryNotificationEmail(data: EnquiryEmailData): { subject: string; html: string; text: string } {
  const submitted = new Date().toLocaleString("en-GB", { timeZone: "Europe/London" });

  const html = layout(
    `
    <h1 style="margin:0 0 8px; font-size:22px; color:${BRAND_GREEN_DARK};">New Catering Enquiry</h1>
    <p style="margin:0 0 8px; font-size:13px; color:#6b6255;">Submitted: ${escapeHtml(submitted)}</p>

    ${sectionHeading("Customer Details")}
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      ${row("Name", data.name)}
      ${row("Email", data.email)}
      ${row("Phone", data.phone)}
    </table>

    ${sectionHeading("Event Details")}
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      ${data.eventType ? row("Event Type", data.eventType) : ""}
      ${data.eventDate ? row("Event Date", data.eventDate) : ""}
      ${data.guests ? row("Estimated Guests", data.guests) : ""}
      ${data.budgetRange ? row("Budget Range", data.budgetRange) : ""}
      ${data.venue ? row("Venue", data.venue) : ""}
    </table>

    ${sectionHeading("Additional Information")}
    <p style="margin:0; font-size:14px; line-height:1.6; white-space:pre-wrap;">${escapeHtml(data.message || "—")}</p>
  `,
    `New catering enquiry from ${data.name}`
  );

  const text = [
    "New Catering Enquiry",
    "",
    "Customer Details",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    "",
    "Event Details",
    data.eventType ? `Event Type: ${data.eventType}` : null,
    data.eventDate ? `Event Date: ${data.eventDate}` : null,
    data.guests ? `Estimated Guests: ${data.guests}` : null,
    data.budgetRange ? `Budget Range: ${data.budgetRange}` : null,
    data.venue ? `Venue: ${data.venue}` : null,
    "",
    "Additional Information",
    data.message || "—",
    "",
    `Submitted: ${submitted}`,
  ]
    .filter((line) => line !== null)
    .join("\n");

  return { subject: `New Catering Enquiry - ${data.name}`, html, text };
}

export function buildCustomerAutoReplyEmail(data: { firstName: string }): { subject: string; html: string; text: string } {
  const html = layout(
    `
    <h1 style="margin:0 0 16px; font-size:20px; color:${BRAND_GREEN_DARK};">Hi ${escapeHtml(data.firstName)},</h1>
    <p style="margin:0 0 14px; font-size:15px; line-height:1.7;">Thank you for your enquiry.</p>
    <p style="margin:0 0 14px; font-size:15px; line-height:1.7;">We've received your request and one of our team will respond within 24 hours.</p>
    <p style="margin:0 0 14px; font-size:15px; line-height:1.7;">If your enquiry is urgent, please call or WhatsApp us on:</p>
    <p style="margin:0 0 20px; font-size:20px; font-weight:bold; color:${BRAND_GOLD};">${escapeHtml(siteConfig.phoneDisplay)}</p>
    <p style="margin:0 0 24px; font-size:15px; line-height:1.7;">We look forward to helping make your event special.</p>
    <p style="margin:0; font-size:15px; line-height:1.7;">
      Kind regards,<br />
      <strong>Tawaa Fresh</strong><br />
      Authentic Pakistani Catering
    </p>
  `,
    "Thank you for contacting Tawaa Fresh"
  );

  const text = [
    `Hi ${data.firstName},`,
    "",
    "Thank you for your enquiry.",
    "",
    "We've received your request and one of our team will respond within 24 hours.",
    "",
    "If your enquiry is urgent, please call or WhatsApp us on:",
    "",
    siteConfig.phoneDisplay,
    "",
    "We look forward to helping make your event special.",
    "",
    "Kind regards,",
    "",
    "Tawaa Fresh",
    "Authentic Pakistani Catering",
  ].join("\n");

  return { subject: "Thank you for contacting Tawaa Fresh", html, text };
}
