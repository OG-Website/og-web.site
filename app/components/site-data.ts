export const contactEmail = "og@og-web.site";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Hosting", href: "/hosting" },
  { label: "Contact", href: "/contact" },
];

export type ServiceItem = {
  number: string;
  tag: string;
  title: string;
  text: string;
  points: string[];
  iconId: ServiceIconId;
};

export type ServiceIconId = "design" | "build" | "launch" | "support";

export const services: ServiceItem[] = [
  {
    number: "01",
    tag: "Design",
    title: "Custom site design and first-screen direction",
    text: "The header, first screen, page order and call-to-action path are mapped around the business first, so the site launches with its own identity instead of a recycled layout.",
    points: [
      "Header and first-screen concept",
      "Page-by-page structure planning",
      "CTA flow and content direction",
    ],
    iconId: "design",
  },
  {
    number: "02",
    tag: "Build",
    title: "Separate pages built properly, not one long scroll",
    text: "Home, services, portfolio, hosting and contact are built as separate routes with responsive layouts, stronger hierarchy and a cleaner route from landing to enquiry.",
    points: [
      "Dedicated pages for each part of the offer",
      "Responsive desktop and mobile build",
      "Portfolio, motion and contact sections wired in",
    ],
    iconId: "build",
  },
  {
    number: "03",
    tag: "Launch",
    title: "Hosting, domains, forms and go-live setup",
    text: "The live setup gets handled with the build, including deployment, SSL, DNS, contact forms and email routing, so the job does not stop at the mock-up.",
    points: [
      "Domain and DNS connection",
      "SSL, hosting and deployment handling",
      "Contact forms and business email setup",
    ],
    iconId: "launch",
  },
  {
    number: "04",
    tag: "Support",
    title: "Ongoing edits, fixes and aftercare",
    text: "Once the site is live, updates stay with the same builder, so text changes, new sections and fixes do not vanish into a generic support queue.",
    points: [
      "Content and image changes",
      "New sections or extra pages",
      "Direct support after launch",
    ],
    iconId: "support",
  },
];

export type ProjectId =
  | "tradeathem"
  | "melksham"
  | "wobbob"
  | "business-energy"
  | "maid-right"
  | "shhwingers"
  | "naomi";

export type ProjectItem = {
  id: ProjectId;
  name: string;
  url: string;
  type: string;
  summary: string;
  homeFeatured: boolean;
  logoSrc: string;
  logoAlt: string;
};

export const projects: ProjectItem[] = [
  {
    id: "tradeathem",
    name: "Trade'A'Them",
    url: "https://www.tradeathem.co.uk",
    type: "Product / SaaS presentation",
    summary: "A harder-edged product site with a stronger visual identity and a clearer route from first impression to action.",
    homeFeatured: true,
    logoSrc: "/assets/projects/tradeathem_logo.png",
    logoAlt: "Trade'A'Them logo",
  },
  {
    id: "melksham",
    name: "Melksham Mental Health",
    url: "https://www.melksham-mentalhealth.us",
    type: "Community / support platform",
    summary: "A support-led platform shaped around trust, recognisable branding and easier access to help-led content.",
    homeFeatured: true,
    logoSrc: "/assets/projects/melksham-logo.png",
    logoAlt: "Melksham Mental Health logo",
  },
  {
    id: "wobbob",
    name: "WoBBoB",
    url: "https://www.wobbob.pro",
    type: "Artist / personal brand",
    summary: "A more personality-heavy direction where the brand identity needs to feel owned, loud and immediately memorable.",
    homeFeatured: true,
    logoSrc: "/assets/projects/WoBBoB New Logo.png",
    logoAlt: "WoBBoB logo",
  },
  {
    id: "business-energy",
    name: "Business Energy",
    url: "https://www.buisness-energy.site",
    type: "Lead generation website",
    summary: "A more conversion-focused sales site designed to move users quickly toward quote and contact action.",
    homeFeatured: true,
    logoSrc: "/assets/projects/business-energy-logo.png",
    logoAlt: "Business Energy logo",
  },
  {
    id: "naomi",
    name: "Naomi's Aesthetics",
    url: "https://www.naomis-aesthetics.co.uk",
    type: "Beauty / aesthetics website",
    summary: "A polished client website for a beauty and aesthetics brand, built around trust, presentation and clear enquiry routes.",
    homeFeatured: false,
    logoSrc: "/assets/projects/naomi-logo.png",
    logoAlt: "Naomi's Aesthetics logo",
  },
  {
    id: "maid-right",
    name: "Maid Right",
    url: "https://www.maid-right.co.uk",
    type: "Local service business site",
    summary: "A service-led build designed to explain the offer quickly and turn traffic into direct enquiries.",
    homeFeatured: false,
    logoSrc: "/assets/projects/maid-right-logo.png",
    logoAlt: "Maid Right logo",
  },
  {
    id: "shhwingers",
    name: "Shhwingers",
    url: "https://www.shhwingers.online",
    type: "Membership / community platform",
    summary: "A gated-content and community-led platform with a much stronger identity than a standard brochure site.",
    homeFeatured: false,
    logoSrc: "/assets/projects/shhwingers-logo.png",
    logoAlt: "Shhwingers logo",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Direction gets locked first",
    text: "The structure, tone and first screen are resolved before the build is pushed live, so the site launches with an actual point of view.",
  },
  {
    number: "02",
    title: "Build and launch stay connected",
    text: "Design, code, domain setup, hosting and forms are handled as one system instead of being split across suppliers.",
  },
  {
    number: "03",
    title: "Aftercare stays direct",
    text: "The same person who built the site stays close enough to keep it sharp after launch instead of handing it off to a ticket queue.",
  },
];

export const hostingFeatures = [
  "Domain setup, DNS connection, SSL and launch handling",
  "Business email routing and form fallback setup",
  "Fast edits, fixes and content updates after launch",
  "Hosting, backups and practical support in one place",
];
