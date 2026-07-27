// Central place for business information used across the site.
// Every value here is a fact supplied by the business owner — do not add
// statistics, testimonials, addresses, or claims that aren't confirmed.

export const siteConfig = {
  name: "Tawaa Fresh",
  tagline: "Authentic Pakistani Catering",
  description:
    "Tawaa Fresh provides authentic Pakistani catering across Medway, Maidstone, Gravesend, Dartford and surrounding areas — with disposable tray catering or a complete buffet setup for your event.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.tawaafresh.co.uk",
  phoneDisplay: "07477 211142",
  phoneHref: "+447477211142",
  whatsappNumber: "447477211142",
  email: "info@tawaafresh.com",
  location: {
    area: "Walderslade",
    town: "Medway",
    county: "Kent",
    display: "Walderslade, Medway, Kent",
  },
  serviceAreas: ["Medway", "Maidstone", "Gravesend", "Dartford"],
  foodHygieneRating: 5,
} as const;

export const heroHighlights = [
  { icon: "ShieldCheck", label: "5★ Food Hygiene Rating" },
  { icon: "Package", label: "Disposable Tray Catering" },
  { icon: "UtensilsCrossed", label: "Complete Buffet Setup" },
  { icon: "MapPinned", label: "Serving Medway & Surrounding Areas" },
] as const;

export function whatsappLink(message: string) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const defaultWhatsappMessage =
  "Hi Tawaa Fresh, I'd like to enquire about catering.";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/catering", label: "Catering" },
  { href: "/menu", label: "Menu" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export type OccasionType =
  | "Family Gathering"
  | "Celebration / Party"
  | "Corporate / Office"
  | "Other";

export const occasionTypes: OccasionType[] = [
  "Family Gathering",
  "Celebration / Party",
  "Corporate / Office",
  "Other",
];

export const cateringOptions = [
  {
    slug: "tray-catering",
    title: "Disposable Tray Catering",
    summary:
      "Freshly prepared Pakistani dishes delivered in disposable trays — simple to serve, with no washing up.",
    icon: "Package",
  },
  {
    slug: "buffet-setup",
    title: "Complete Buffet Setup",
    summary:
      "A full buffet setup including chafing dishes, warming equipment, serving utensils and food labels.",
    icon: "UtensilsCrossed",
  },
] as const;

export const bookingProcess = [
  {
    step: "01",
    title: "Enquire",
    description: "Contact us by phone, WhatsApp or the quote form with your event details.",
  },
  {
    step: "02",
    title: "Confirm",
    description: "We agree your dishes, catering option — tray or buffet — and guest numbers.",
  },
  {
    step: "03",
    title: "Prepare",
    description: "Your food is freshly prepared ahead of your event.",
  },
  {
    step: "04",
    title: "Enjoy",
    description: "Your order is ready to serve, whether by tray or full buffet setup.",
  },
] as const;

export type MenuItem = {
  name: string;
  description: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "curries",
    title: "Curries",
    items: [
      { name: "Chicken Karahi", description: "Traditional tomato-based chicken curry." },
      { name: "Butter Chicken", description: "Creamy, mildly spiced chicken curry." },
      { name: "Chicken Curry", description: "Classic Pakistani-style chicken curry." },
      { name: "Lamb Curry", description: "Traditional Pakistani lamb curry." },
      { name: "Mixed Vegetable Curry", description: "Seasonal vegetables in a spiced curry sauce." },
    ],
  },
  {
    id: "rice",
    title: "Rice",
    items: [{ name: "Pilau Rice", description: "Fragrant spiced rice." }],
  },
  {
    id: "starters",
    title: "Starters",
    items: [
      { name: "Samosas", description: "Freshly prepared savoury pastry parcels." },
      { name: "Onion Bhajis", description: "Spiced onion fritters." },
    ],
  },
  {
    id: "breads",
    title: "Breads",
    items: [{ name: "Naan", description: "Freshly made flatbread." }],
  },
  {
    id: "sauces",
    title: "Sauces & Accompaniments",
    items: [{ name: "Mint and Coriander Sauce", description: "A fresh, cooling accompaniment." }],
  },
];

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
};

export const galleryImages: GalleryImage[] = [
  {
    id: "gallery-01",
    src: "/images/gallery-01.webp",
    alt: "Tawaa Fresh buffet with chafing dishes, rice, naan and branded signage",
  },
  {
    id: "gallery-02",
    src: "/images/gallery-02.webp",
    alt: "Basket of freshly made naan",
  },
  {
    id: "gallery-03",
    src: "/images/gallery-03.webp",
    alt: "Tawaa Fresh branded sign with a lantern candle",
  },
  {
    id: "gallery-04",
    src: "/images/gallery-04.webp",
    alt: "Row of chafing dishes with curry dishes at a Tawaa Fresh buffet",
  },
];

export const faqs = [
  {
    question: "What catering options do you offer?",
    answer:
      "We offer disposable tray catering, or a complete buffet setup including chafing dishes, warming equipment, serving utensils and food labels.",
  },
  {
    question: "What areas do you cover?",
    answer: "We serve Medway, Maidstone, Gravesend, Dartford and surrounding areas.",
  },
  {
    question: "What is your food hygiene rating?",
    answer: "Tawaa Fresh holds a 5 (the top rating) food hygiene rating.",
  },
  {
    question: "What dishes do you serve?",
    answer:
      "Popular dishes include chicken karahi, butter chicken, chicken curry, lamb curry, mixed vegetable curry, pilau rice, samosas, onion bhajis, naan, and mint and coriander sauce.",
  },
  {
    question: "How do I get a quote?",
    answer: "Call or WhatsApp us on 07477 211142, or fill in the quote request form.",
  },
];
