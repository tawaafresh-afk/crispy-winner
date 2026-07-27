# Tawaa Fresh

A premium marketing website for **Tawaa Fresh**, a luxury Pakistani catering
company — built with Next.js 15 (App Router), React 19, TypeScript and
Tailwind CSS v4.

## Pages

- **Home** — hero, services, signature menu, process, testimonials, gallery preview
- **Catering** — services, pricing packages, booking process, FAQs
- **Menu** — full categorised menu with dietary tags and category filtering
- **Gallery** — filterable gallery grid with a lightbox
- **Reviews** — rating summary and full testimonial list
- **About** — brand story, values and stats
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
- `RESEND_API_KEY` / `RESEND_FROM_EMAIL` — optional, enables real email
  delivery for the enquiry (`/api/enquiry`) and quote (`/api/quote`) forms via
  [Resend](https://resend.com). Without a key, submissions are logged
  server-side instead of emailed, so the forms still work end-to-end.
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` — optional, only needed if you replace the
  styled map placeholder on the Contact page with a live Google Maps embed
  (see the comment in `src/components/contact/MapPlaceholder.tsx`).

### Business details

All business info (phone, WhatsApp number, email, address, socials, menu,
pricing, testimonials) lives in one place: `src/lib/site-config.ts`. The
phone number is an [Ofcom drama-reserved number](https://en.wikipedia.org/wiki/Fictional_telephone_number)
and the address/email are placeholders — replace them with the real details
before launch.

### Imagery

The gallery, hero and menu currently use generated gradient/pattern tiles
(`src/components/ui/PatternTile.tsx`) as stand-ins for real photography.
Swap them for `next/image` once event photos are available — the component
call sites are already isolated to make that a drop-in change.

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
