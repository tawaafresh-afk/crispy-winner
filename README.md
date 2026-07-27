# Tawaa Fresh

A marketing website for **Tawaa Fresh**, an authentic Pakistani catering
business based in Walderslade, Medway, Kent — built with Next.js 15 (App
Router), React 19, TypeScript and Tailwind CSS v4.

## Pages

- **Home** — hero, catering options, menu highlights, process, reviews placeholder, gallery preview
- **Catering** — tray/buffet catering options, booking process, FAQs
- **Menu** — full menu with category filtering
- **Gallery** — filterable gallery grid with a lightbox
- **Reviews** — placeholder section (no reviews published yet)
- **About** — what Tawaa Fresh offers and where it's based
- **Contact** — enquiry form, contact details, map placeholder
- **Quote** — detailed quote request form

## Stack

- Next.js 15 / React 19 / TypeScript
- Tailwind CSS v4 (CSS-based theme in `src/app/globals.css`)
- Framer Motion for scroll-reveal and micro-interactions
- Self-hosted fonts via `@fontsource` (Playfair Display, Cormorant Garamond, Inter — no external font requests)
- lucide-react for icons

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Configuration

Copy `.env.example` to `.env.local` and fill in what you need:

- `NEXT_PUBLIC_SITE_URL` — canonical domain, used for metadata/sitemap/OG tags
- `SMTP_HOST` / `SMTP_PORT` / `SMTP_USER` / `SMTP_PASS` — required for the
  enquiry (`/api/enquiry`) and quote (`/api/quote`) forms to actually send
  email via [Nodemailer](https://nodemailer.com). Every submission is
  emailed to `info@tawaafresh.com` (with the customer's address set as
  reply-to) and the customer receives an automatic acknowledgement sent from
  the same mailbox. Without these set, submissions are logged server-side
  instead of emailed, so the forms still work end-to-end locally.

  If the mailbox is hosted with **Fasthosts**, the values are typically:
  ```
  SMTP_HOST=mail.tawaafresh.com
  SMTP_PORT=465
  SMTP_USER=info@tawaafresh.com
  SMTP_PASS=<the mailbox password>
  ```
  Confirm the exact host/port for your mailbox with Fasthosts, then add all
  four in Vercel → Project → Settings → Environment Variables.
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` — optional, only needed if you replace the
  styled map placeholder on the Contact page with a live Google Maps embed
  (see the comment in `src/components/contact/MapPlaceholder.tsx`).

### Business details

All business info (name, phone/WhatsApp number, email, location, service
areas, food hygiene rating, catering options, menu, FAQs) lives in one
place: `src/lib/site-config.ts`. Every value there is a fact supplied by
the business owner — no invented statistics, addresses, or reviews. There
is no public street address on file; only the phone number
(`07477 211142`), email (`info@tawaafresh.com`) and a general location
(`Walderslade, Medway, Kent`) are published.

### Form security

Both forms include a hidden honeypot field, server-side field validation,
input sanitisation (HTML-escaped in emails, single-line fields stripped of
line breaks to prevent header injection), and a best-effort in-memory rate
limit per IP (`src/lib/rate-limit.ts`). That rate limit resets whenever the
serverless function instance recycles, so treat it as a deterrent against
casual abuse, not a hard guarantee — put a WAF or edge rate limit in front
of it for stronger protection if needed.

### Reviews

The Reviews page and the homepage reviews section intentionally show a
placeholder with no names or quotations — no genuine customer reviews have
been supplied yet. Replace `src/components/reviews/ReviewsPlaceholder.tsx`
with real, verifiable reviews when they're available.

### Imagery

The homepage hero, Catering/Menu page banners, About page and Gallery page
all use real crops of one supplied catering photo (`public/images/`). The
"Why Tawaa Fresh" and signature-dish tiles elsewhere still use generated
gradient/pattern placeholders (`src/components/ui/PatternTile.tsx`) — swap
those for `next/image` once more real photos are available.

## Deploying to Vercel

1. Push this repository to GitHub (already done if you're reading this from
   the repo).
2. Import the project at [vercel.com/new](https://vercel.com/new).
3. Add the environment variables from `.env.example` in the Vercel project
   settings.
4. Deploy — no additional build configuration is required.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — run the production build locally
- `npm run lint` — run ESLint
