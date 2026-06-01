export const contactEmail = "hello@og-web.site";

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
  | "shhwingers";

export type ProjectItem = {
  id: ProjectId;
  name: string;
  url: string;
  type: string;
  summary: string;
  homeFeatured: boolean;
};

export const projects: ProjectItem[] = [
  {
    id: "tradeathem",
    name: "Trade'A'Them",
    url: "https://www.tradeathem.co.uk",
    type: "Product / SaaS presentation",
    summary: "A harder-edged product site with a stronger visual identity and a clearer route from first impression to action.",
    homeFeatured: true,
  },
  {
    id: "melksham",
    name: "Melksham Mental Health",
    url: "https://www.melksham-mentalhealth.us",
    type: "Community / support platform",
    summary: "A support-led platform shaped around trust, recognisable branding and easier access to help-led content.",
    homeFeatured: true,
  },
  {
    id: "wobbob",
    name: "WoBBoB",
    url: "https://www.wobbob.pro",
    type: "Artist / personal brand",
    summary: "A more personality-heavy direction where the brand identity needs to feel owned, loud and immediately memorable.",
    homeFeatured: true,
  },
  {
    id: "business-energy",
    name: "Business Energy",
    url: "https://www.buisness-energy.site",
    type: "Lead generation website",
    summary: "A more conversion-focused sales site designed to move users quickly toward quote and contact action.",
    homeFeatured: true,
  },
  {
    id: "maid-right",
    name: "Maid Right",
    url: "https://www.maid-right.co.uk",
    type: "Local service business site",
    summary: "A service-led build designed to explain the offer quickly and turn traffic into direct enquiries.",
    homeFeatured: false,
  },
  {
    id: "shhwingers",
    name: "Shhwingers",
    url: "https://www.shhwingers.online",
    type: "Membership / community platform",
    summary: "A gated-content and community-led platform with a much stronger identity than a standard brochure site.",
    homeFeatured: false,
  },
];

export type AppItem = {
  name: string;
  type: string;
  status: string;
  summary: string;
};

export const appProducts: AppItem[] = [
  {
    name: "OG Girls",
    type: "Windows AI companion",
    status: "Built",
    summary: "Public OG Girls build with desktop executable, cleaned naming, and local distribution docs.",
  },
  {
    name: "OG FileTamer",
    type: "Windows file utility",
    status: "Built",
    summary: "Canonical FileTamer build for organising files with dry-run analysis, move logs, undo, and security prompts.",
  },
  {
    name: "OG Labs",
    type: "Desktop training app",
    status: "Built",
    summary: "Electron desktop build for training, resources, and learning material, packaged as installer and portable app.",
  },
  {
    name: "OG-DnB",
    type: "Desktop music app",
    status: "Built",
    summary: "Music production workspace with backend services, tested API contracts, and a portable Windows bundle.",
  },
  {
    name: "OG Control Hub",
    type: "Desktop control app",
    status: "Built",
    summary: "Tkinter control hub with dashboard, study plans, reminders, resources, and bundled local content.",
  },
  {
    name: "OG-USB",
    type: "Native Windows USB tool",
    status: "Built",
    summary: "Windows-first USB formatter using native Storage commands, administrator checks, and safe disk selection.",
  },
  {
    name: "Social Bob",
    type: "Social automation starter",
    status: "Built",
    summary: "Starter social posting assistant with local content folders, dry-run safety, and caption fallback flow.",
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
