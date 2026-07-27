// Central place for business information used across the site.
// Replace the placeholder contact details, address and coordinates
// with Tawaa Fresh's real details before going live.

export const siteConfig = {
  name: "Tawaa Fresh",
  legalName: "Tawaa Fresh Catering Ltd",
  tagline: "Authentic Pakistani Catering, Served with Distinction",
  description:
    "Tawaa Fresh crafts luxury Pakistani and South Asian catering for weddings, walimas, corporate events and private celebrations — live tawaa and BBQ stations, hand-pressed breads, and slow-cooked signature curries prepared fresh on site.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.tawaafresh.co.uk",
  ogImage: "/opengraph-image",
  phoneDisplay: "+44 7700 900123",
  phoneHref: "+447700900123",
  whatsappNumber: "447700900123",
  email: "hello@tawaafresh.co.uk",
  address: {
    line1: "Unit 4, Foodhall Business Park",
    line2: "Bordesley Green Road",
    city: "Birmingham",
    postcode: "B9 4UA",
    country: "United Kingdom",
  },
  mapEmbedQuery: "Bordesley Green Road, Birmingham, B9 4UA, United Kingdom",
  coordinates: { lat: 52.4751, lng: -1.8611 },
  hours: [
    { day: "Monday – Friday", time: "9:00am – 7:00pm" },
    { day: "Saturday", time: "10:00am – 5:00pm" },
    { day: "Sunday", time: "By appointment (event days)" },
  ],
  social: {
    instagram: "https://instagram.com/tawaafresh",
    facebook: "https://facebook.com/tawaafresh",
    tiktok: "https://tiktok.com/@tawaafresh",
  },
  founded: 2011,
  stats: [
    { value: "13+", label: "Years of Excellence" },
    { value: "2,400+", label: "Events Catered" },
    { value: "180,000+", label: "Guests Served" },
    { value: "4.9/5", label: "Average Rating" },
  ],
} as const;

export function whatsappLink(message: string) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const defaultWhatsappMessage =
  "Hi Tawaa Fresh, I'd love to enquire about catering for an upcoming event.";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/catering", label: "Catering" },
  { href: "/menu", label: "Menu" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export type ServiceType =
  | "Wedding / Walima"
  | "Mehndi / Sangeet"
  | "Corporate Event"
  | "Private Party"
  | "Religious / Community"
  | "Other";

export const serviceTypes: ServiceType[] = [
  "Wedding / Walima",
  "Mehndi / Sangeet",
  "Corporate Event",
  "Private Party",
  "Religious / Community",
  "Other",
];

export const services = [
  {
    slug: "weddings-walima",
    title: "Weddings & Walima",
    summary:
      "Multi-course wedding banquets with live tawaa stations, ceremonial thaals and a menu tasting before you commit.",
    icon: "Sparkles",
  },
  {
    slug: "mehndi-sangeet",
    title: "Mehndi & Sangeet",
    summary:
      "Vibrant street-food style grazing stations — chaat, golgappay and BBQ counters — built for a lively evening.",
    icon: "Music",
  },
  {
    slug: "corporate",
    title: "Corporate Events",
    summary:
      "Boardroom lunches to product launches, plated or buffet, with dietary labelling and on-time delivery.",
    icon: "Briefcase",
  },
  {
    slug: "private-parties",
    title: "Private Parties",
    summary:
      "Milestone birthdays, aqeeqahs and family gatherings catered with the same care as our largest weddings.",
    icon: "PartyPopper",
  },
  {
    slug: "community",
    title: "Religious & Community",
    summary:
      "Iftar, Aqiqah and community langar catering at scale, respectful of tradition and dietary requirements.",
    icon: "HandHeart",
  },
  {
    slug: "live-stations",
    title: "Live Tawaa & BBQ",
    summary:
      "Chefs cooking to order in front of your guests — seekh kebabs, sizzling karahi and fresh naan off the tawaa.",
    icon: "Flame",
  },
] as const;

export type Package = {
  tier: string;
  price: string;
  unit: string;
  description: string;
  features: string[];
  highlight?: boolean;
};

export const packages: Package[] = [
  {
    tier: "Silver",
    price: "from £28",
    unit: "per guest",
    description: "An elegant three-course menu for intimate celebrations.",
    features: [
      "Choice of 2 starters",
      "3 mains (1 vegetarian)",
      "Biryani or pulao + naan station",
      "1 dessert & soft drinks",
      "Professional serving staff",
    ],
  },
  {
    tier: "Gold",
    price: "from £42",
    unit: "per guest",
    description: "Our most popular package for weddings and large events.",
    features: [
      "Live BBQ / tawaa station",
      "5 mains (2 vegetarian)",
      "Biryani, pulao & bread station",
      "Chaat & canapé counter",
      "2 desserts + mocktail bar",
      "Full front-of-house team",
    ],
    highlight: true,
  },
  {
    tier: "Platinum",
    price: "from £58",
    unit: "per guest",
    description: "The complete luxury experience with bespoke menu design.",
    features: [
      "Bespoke tasting session",
      "Unlimited live cooking stations",
      "7 mains, fully customisable",
      "Premium thaal / crockery hire",
      "Dedicated event manager",
      "Late-night snack station",
    ],
  },
];

export const bookingProcess = [
  {
    step: "01",
    title: "Enquire",
    description: "Tell us your date, guest count and vision via WhatsApp, our quote form or a call.",
  },
  {
    step: "02",
    title: "Taste",
    description: "Visit our kitchen for a private tasting and build your menu dish by dish.",
  },
  {
    step: "03",
    title: "Confirm",
    description: "We lock in your menu, staffing and equipment with a clear, itemised quote.",
  },
  {
    step: "04",
    title: "Celebrate",
    description: "Our team arrives early, cooks fresh on site, and leaves your venue spotless.",
  },
] as const;

export type MenuItem = {
  name: string;
  description: string;
  tags?: ("veg" | "vegan" | "spicy" | "gf" | "signature")[];
};

export type MenuCategory = {
  id: string;
  title: string;
  subtitle: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "canapes",
    title: "Starters & Canapés",
    subtitle: "Passed on silver trays while your guests arrive",
    items: [
      { name: "Seekh Kebab Skewers", description: "Hand-minced lamb, charred over live coals, mint yoghurt dip.", tags: ["signature", "spicy"] },
      { name: "Chicken Chapli Kebab Bites", description: "Peshawari-spiced patties with pomegranate and coriander.", tags: ["spicy"] },
      { name: "Vegetable Samosa Chaat", description: "Crisp samosas crushed with chickpeas, tamarind and yoghurt.", tags: ["veg"] },
      { name: "Paneer Tikka Skewers", description: "Char-grilled paneer marinated in charcoal-smoked spices.", tags: ["veg", "gf"] },
      { name: "Prawn Puri", description: "Crisp puris topped with masala prawns and tamarind chutney.", tags: [] },
      { name: "Dahi Baray", description: "Lentil dumplings in whipped yoghurt with tamarind and mint.", tags: ["veg"] },
    ],
  },
  {
    id: "live",
    title: "Live Tawaa & BBQ Station",
    subtitle: "Cooked to order in front of your guests",
    items: [
      { name: "Tawaa Chicken Karahi", description: "Tomato-forward karahi, finished tableside with ginger and green chilli.", tags: ["signature", "spicy"] },
      { name: "Fresh Naan & Roti", description: "Rolled and baked to order — plain, garlic or Peshwari.", tags: ["veg"] },
      { name: "Mixed Grill Skewers", description: "Lamb chops, chicken malai boti and beef seekh straight off the coals.", tags: ["signature"] },
      { name: "Aloo Cholay Station", description: "Slow-cooked chickpeas and potatoes finished with fresh coriander.", tags: ["vegan"] },
    ],
  },
  {
    id: "mains",
    title: "Signature Mains",
    subtitle: "Slow-cooked curries, the heart of any Tawaa Fresh menu",
    items: [
      { name: "Nihari", description: "Overnight slow-cooked beef shank in a rich, spiced gravy.", tags: ["signature", "spicy"] },
      { name: "Chicken Handi", description: "Creamy tomato and cashew gravy finished with fresh cream.", tags: [] },
      { name: "Lamb Karahi", description: "Bone-in lamb, ginger, green chilli, finished with a squeeze of lime.", tags: ["spicy"] },
      { name: "Daal Makhani", description: "Black lentils simmered overnight with butter and cream.", tags: ["veg", "gf"] },
      { name: "Bhindi Masala", description: "Okra tempered with cumin, onion and dried mango powder.", tags: ["vegan", "gf"] },
      { name: "Palak Paneer", description: "Silky spiced spinach with soft paneer cubes.", tags: ["veg", "gf"] },
    ],
  },
  {
    id: "rice",
    title: "Rice & Biryani",
    subtitle: "Layered and dum-cooked in traditional degh pots",
    items: [
      { name: "Sindhi Biryani", description: "Aromatic basmati layered with spiced meat, potato and plum.", tags: ["signature", "spicy"] },
      { name: "Vegetable Pulao", description: "Fragrant basmati with garden vegetables and whole spice.", tags: ["vegan", "gf"] },
      { name: "Chicken Yakhni Pulao", description: "Slow-simmered stock rice with tender chicken and caramelised onion.", tags: ["gf"] },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    subtitle: "A sweet finish to your celebration",
    items: [
      { name: "Gulab Jamun", description: "Warm milk dumplings soaked in cardamom rose syrup.", tags: ["veg", "signature"] },
      { name: "Kheer", description: "Slow-cooked rice pudding with pistachio and saffron.", tags: ["veg", "gf"] },
      { name: "Ras Malai Cheesecake", description: "Our signature fusion dessert — a Tawaa Fresh original.", tags: ["veg", "signature"] },
    ],
  },
  {
    id: "drinks",
    title: "Drinks & Mocktail Bar",
    subtitle: "Refreshing, alcohol-free and fully customisable",
    items: [
      { name: "Rose & Elderflower Mocktail", description: "Rose syrup, elderflower and soda over ice.", tags: ["vegan", "gf"] },
      { name: "Mango Lassi", description: "Chilled yoghurt whipped with Alphonso mango.", tags: ["veg", "gf"] },
      { name: "Fresh Lime & Mint Soda", description: "A crisp, palate-cleansing classic.", tags: ["vegan", "gf"] },
    ],
  },
];

export type Testimonial = {
  name: string;
  event: string;
  rating: number;
  quote: string;
  location?: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Ayesha & Bilal",
    event: "Wedding, 450 guests",
    rating: 5,
    quote:
      "Tawaa Fresh turned our walima into the talk of the community. The live BBQ station had a queue all night and the nihari was better than my grandmother's — high praise in our family.",
    location: "Birmingham",
  },
  {
    name: "Farhan Malik",
    event: "Corporate Launch, 120 guests",
    rating: 5,
    quote:
      "Professional from the first call to the final tray collected. Dietary labelling was spot on and the team packed down without us lifting a finger.",
    location: "London",
  },
  {
    name: "Sana Raza",
    event: "Mehndi, 300 guests",
    rating: 5,
    quote:
      "The chaat counter alone was worth booking them for. Guests are still asking me for the caterer's number three months later.",
    location: "Wolverhampton",
  },
  {
    name: "Imran & Zainab",
    event: "Nikkah, 200 guests",
    rating: 5,
    quote:
      "Tasting session made all the difference — we adjusted the spice level for our elders and it was perfect on the day.",
    location: "Birmingham",
  },
  {
    name: "Community Iftar Committee",
    event: "Ramadan Iftar, 600 guests",
    rating: 5,
    quote:
      "Feeding 600 people to the minute, every single night of Ramadan, without a single delay. Genuinely remarkable operation.",
    location: "Coventry",
  },
  {
    name: "Nadia Sheikh",
    event: "60th Birthday, 80 guests",
    rating: 4,
    quote:
      "Beautiful presentation and the karahi was cooked exactly how we asked. Would have loved a slightly bigger dessert table, but otherwise faultless.",
    location: "Solihull",
  },
];

export const galleryCategories = [
  "All",
  "Weddings",
  "Live Stations",
  "Platters & Thaals",
  "Desserts",
  "Corporate",
] as const;

export type GalleryImage = {
  id: string;
  category: (typeof galleryCategories)[number];
  title: string;
  tone: "brand" | "gold" | "maroon" | "ink";
};

export const galleryImages: GalleryImage[] = [
  { id: "g1", category: "Weddings", title: "Walima Reception, Birmingham", tone: "gold" },
  { id: "g2", category: "Live Stations", title: "Tawaa Naan Station", tone: "brand" },
  { id: "g3", category: "Platters & Thaals", title: "Ceremonial Thaal Service", tone: "maroon" },
  { id: "g4", category: "Desserts", title: "Ras Malai Cheesecake Display", tone: "gold" },
  { id: "g5", category: "Corporate", title: "Boardroom Lunch Setup", tone: "ink" },
  { id: "g6", category: "Weddings", title: "Nikkah Banquet Hall", tone: "brand" },
  { id: "g7", category: "Live Stations", title: "Seekh Kebab Grill", tone: "maroon" },
  { id: "g8", category: "Platters & Thaals", title: "Biryani Degh Service", tone: "gold" },
  { id: "g9", category: "Weddings", title: "Mehndi Chaat Counter", tone: "maroon" },
  { id: "g10", category: "Corporate", title: "Product Launch Canapés", tone: "brand" },
  { id: "g11", category: "Desserts", title: "Gulab Jamun Fountain", tone: "gold" },
  { id: "g12", category: "Live Stations", title: "Charcoal BBQ Counter", tone: "ink" },
];

export const faqs = [
  {
    question: "How far in advance should we book?",
    answer:
      "For weddings and large events we recommend booking 6–12 months ahead, especially for peak wedding season (May–September). Smaller private events can often be arranged with 4–6 weeks' notice.",
  },
  {
    question: "Do you cater for dietary requirements?",
    answer:
      "Yes — every menu can be adapted for vegetarian, vegan, gluten-free and nut-free guests. Let us know your requirements during the tasting so we can label dishes clearly on the day.",
  },
  {
    question: "Is all food halal?",
    answer:
      "Yes, all meat served by Tawaa Fresh is halal-certified, sourced from approved suppliers.",
  },
  {
    question: "What areas do you cover?",
    answer:
      "We're based in Birmingham and regularly cater across the West Midlands, London and the North West. Travel and setup fees may apply outside a 30-mile radius.",
  },
  {
    question: "Can we arrange a tasting before booking?",
    answer:
      "Absolutely — private tastings are included with our Gold and Platinum packages, and available for a small fee on Silver bookings.",
  },
  {
    question: "Do you provide staff, crockery and equipment?",
    answer:
      "Yes, front-of-house staff, chafing dishes and basic crockery are included in every package. Premium thaal and crockery hire is available on request.",
  },
];
