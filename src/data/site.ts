export const brand = {
  name: "The Time Tech",
  tagline: "Invest in Time. Build Your Future.",
  email: "hello@thetimetech.com",
  phone: "+971 00 000 0000",
  location: "Dubai, United Arab Emirates",
};

export type Course = {
  slug: string;
  title: string;
  short: string;
  summary: string;
  detail: string[];
  duration: string;
  schedule: string;
  format: string;
  language: string;
  method: string;
  price: string;
  promo: string;
  takeaways: string[];
  curriculum: { module: string; topics: string }[];
  prerequisites: string[];
  status: "open" | "soon";
};

export const courses: Course[] = [
  {
    slug: "shopify",
    title: "Shopify E-Commerce Mastery",
    short: "Build, launch and manage a professional e-commerce online store",
    summary:
      "Learn how to create, customize, launch, and manage a professional Shopify e-commerce store from scratch. The course covers store setup, product management, themes, payments, shipping, marketing, analytics, and day-to-day store operations.",
    detail: [
      "This practical course takes students through the complete process of building an e-commerce business using Shopify. Students will create a Shopify store, configure its structure and appearance, add products and collections, set up payment and shipping options, configure essential policies, and prepare the website for launch.",
      "The course also introduces SEO, discounts, abandoned-cart recovery, email marketing, social-media integration, analytics, and store optimization. By the end, each student should be capable of independently building and managing a functional Shopify store.",
    ],
    duration: "12 hours total",
    schedule: "4 weeks · 2 sessions per week × 2.5 hours",
    format: "Instructor-led practical training · Live + hands-on exercises",
    language: "English",
    method: "Approximately 30% theory and 70% practical work",
    price: "AED 1,499",
    promo: "AED 999 introductory offer",
    takeaways: [
      "Build a Shopify store from scratch",
      "Configure Shopify's main settings",
      "Select and customize a suitable theme",
      "Create products, variants and collections",
      "Organize menus and website navigation",
      "Create professional product pages",
      "Configure domains and business information",
      "Set up payment gateways",
      "Configure UAE/international shipping and delivery rules",
      "Set up taxes and checkout options",
      "Create discount codes and promotions",
      "Install and manage Shopify apps",
      "Understand Shopify SEO fundamentals",
      "Connect social-media and marketing channels",
      "Manage customers, orders, refunds and inventory",
      "Understand Shopify reports and analytics",
      "Optimize the store for mobile devices",
      "Prepare and launch a complete online store",
    ],
    curriculum: [
      {
        module: "Introduction to E-Commerce & Shopify",
        topics: "E-commerce fundamentals, Shopify ecosystem, plans, store examples",
      },
      {
        module: "Shopify Store Setup",
        topics: "Account creation, dashboard, store settings, users and permissions",
      },
      {
        module: "Store Planning",
        topics: "Target customers, product categories, site structure and branding",
      },
      {
        module: "Products & Collections",
        topics:
          "Products, descriptions, images, pricing, SKUs, variants, inventory and collections",
      },
      {
        module: "Shopify Themes",
        topics: "Theme selection, installation, sections, templates, fonts, colors and branding",
      },
      {
        module: "Store Design",
        topics: "Homepage, banners, collection pages, product pages, header, footer and navigation",
      },
      {
        module: "Pages & Content",
        topics: "About Us, Contact Us, FAQs, policies, blogs and content creation",
      },
      {
        module: "Domain & Store Configuration",
        topics: "Custom domains, DNS basics, business information and store policies",
      },
    ],
    prerequisites: [
      "Basic computer and internet skills",
      "Laptop",
      "Email account",
      "Basic understanding of online shopping",
      "No coding or previous Shopify experience required",
    ],
    status: "open",
  },
  {
    slug: "amazon-fba",
    title: "Amazon FBA Mastery",
    short: "Source, list and scale a private-label brand on Amazon",
    summary:
      "A practical programme covering product research, supplier sourcing, listing optimization, FBA logistics, PPC advertising and account health — everything needed to run a profitable Amazon business.",
    detail: [
      "Students work through the full Amazon seller journey: validating a product with data, negotiating with suppliers, preparing shipments to FBA warehouses, building a listing that converts, and launching with advertising.",
      "The programme also covers profitability maths, inventory planning, review management, and long-term brand growth on Amazon marketplaces.",
    ],
    duration: "12 hours total",
    schedule: "4 weeks · 2 sessions per week × 2.5 hours",
    format: "Instructor-led practical training · Live + hands-on exercises",
    language: "English",
    method: "Approximately 30% theory and 70% practical work",
    price: "AED 1,499",
    promo: "AED 999 introductory offer",
    takeaways: [
      "Understand the Amazon marketplace and FBA model",
      "Create and verify a seller central account",
      "Research profitable products with data",
      "Find, vet and negotiate with suppliers",
      "Calculate landed cost, fees and margins",
      "Handle branding, packaging and barcodes",
      "Create shipping plans into FBA warehouses",
      "Write and optimize high-converting listings",
      "Run keyword research and PPC campaigns",
      "Manage reviews, returns and account health",
      "Plan inventory and avoid stock-outs",
      "Scale with additional products and marketplaces",
    ],
    curriculum: [
      {
        module: "Amazon & FBA Foundations",
        topics: "Marketplaces, business models, fee structure",
      },
      { module: "Seller Central Setup", topics: "Account creation, verification, dashboard tour" },
      { module: "Product Research", topics: "Criteria, tools, demand and competition analysis" },
      { module: "Sourcing & Suppliers", topics: "Alibaba, samples, negotiation, quality checks" },
      { module: "Branding & Packaging", topics: "Brand registry, packaging, labels and barcodes" },
      { module: "Shipping & Logistics", topics: "Freight, shipping plans, FBA inbound process" },
      { module: "Listing Optimization", topics: "Keywords, titles, bullets, images, A+ content" },
      { module: "Launch & PPC", topics: "Launch strategy, sponsored ads, bids and optimization" },
    ],
    prerequisites: [
      "Basic computer and internet skills",
      "Laptop",
      "Email account",
      "Starting capital for inventory is recommended but not required for the course",
    ],
    status: "open",
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing Mastery",
    short: "Meta and Google ads, SEO, content and analytics that drive sales",
    summary:
      "A hands-on digital marketing programme covering strategy, paid social, search advertising, SEO, content, email marketing and analytics — built around real campaigns rather than theory.",
    detail: [
      "Students build a complete marketing funnel: defining the audience, producing creative, launching paid campaigns on Meta and Google, capturing leads, and nurturing them with email and content.",
      "Reporting is a core part of the course — participants learn to read analytics dashboards, measure return on ad spend, and make decisions based on data.",
    ],
    duration: "12 hours total",
    schedule: "4 weeks · 2 sessions per week × 2.5 hours",
    format: "Instructor-led practical training · Live + hands-on exercises",
    language: "English",
    method: "Approximately 30% theory and 70% practical work",
    price: "AED 1,499",
    promo: "AED 999 introductory offer",
    takeaways: [
      "Build a marketing strategy and funnel",
      "Define audiences and buyer personas",
      "Set up Meta Business Suite and ad accounts",
      "Create and test ad creative and copy",
      "Launch and optimize Meta ad campaigns",
      "Run Google Search and Performance Max campaigns",
      "Apply on-page and technical SEO fundamentals",
      "Plan content and social calendars",
      "Set up email marketing and automations",
      "Track conversions with analytics and pixels",
      "Report on ROAS, CPL and CAC",
      "Scale winning campaigns profitably",
    ],
    curriculum: [
      { module: "Digital Marketing Foundations", topics: "Channels, funnels, positioning, offers" },
      { module: "Audience & Strategy", topics: "Personas, customer journey, campaign planning" },
      { module: "Meta Ads", topics: "Business Suite, pixel, campaign structure, creative testing" },
      { module: "Google Ads", topics: "Search, keywords, Performance Max, bidding" },
      { module: "SEO Fundamentals", topics: "Keyword research, on-page, technical basics" },
      { module: "Content & Social", topics: "Content pillars, calendars, short-form video" },
      { module: "Email & CRM", topics: "Lists, flows, automations, retention" },
      { module: "Analytics & Reporting", topics: "GA4, dashboards, ROAS and decision-making" },
    ],
    prerequisites: [
      "Basic computer and internet skills",
      "Laptop",
      "Email account",
      "No prior marketing experience required",
    ],
    status: "open",
  },
];

export const reviews = [
  {
    name: "Ayesha Rahman",
    role: "Boutique owner, Dubai",
    course: "Shopify E-Commerce Mastery",
    quote:
      "I walked in with a product idea and walked out with a live store taking orders. The sessions were 70% doing, not watching.",
    rating: 5,
  },
  {
    name: "Bilal Haider",
    role: "Amazon seller, Sharjah",
    course: "Amazon FBA Mastery",
    quote:
      "The sourcing and margin maths alone saved me thousands. My first shipment was in an FBA warehouse six weeks after the course.",
    rating: 5,
  },
  {
    name: "Maria Fernandes",
    role: "Marketing executive, Abu Dhabi",
    course: "Digital Marketing Mastery",
    quote:
      "Clear, structured and practical. I now run our Meta and Google campaigns in-house and report on them with confidence.",
    rating: 5,
  },
  {
    name: "Omar Sheikh",
    role: "Founder, Time Home Goods",
    course: "Shopify E-Commerce Mastery",
    quote:
      "The instructor answered every question, no matter how basic. The store design and checkout modules were worth the fee twice over.",
    rating: 5,
  },
];

export const stats = [
  { value: "12 hrs", label: "Live instructor-led training" },
  { value: "70%", label: "Hands-on practical work" },
  { value: "3", label: "Career-focused programmes" },
  { value: "1:1", label: "Mentor support during course" },
];
