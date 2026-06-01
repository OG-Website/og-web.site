import Link from "next/link";

import { contactEmail, navItems } from "./site-data";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[linear-gradient(180deg,rgba(20,28,24,0.9),rgba(12,17,15,0.98))]">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-12">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/8 px-6 py-8 md:px-8 md:py-9">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_16%,rgba(72,255,0,0.08),transparent_22%),linear-gradient(180deg,rgba(24,33,28,0.92),rgba(14,20,17,0.98))]" />
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#8cff41] to-transparent opacity-55" />

          <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.8fr_0.9fr]">
            <div>
              <img src="/assets/branding/logo-header.png" alt="OG Web.site logo" className="h-18 w-auto max-w-full object-contain md:h-20" />
              <p className="mt-5 max-w-lg text-sm leading-7 text-zinc-300">
                Website design, build, hosting and support for businesses that need a sharper first impression and a cleaner route to contact.
              </p>
            </div>

            <div>
              <div className="display-face text-sm uppercase tracking-[0.32em] text-[#8cff41]">Navigation</div>
              <div className="mt-5 flex flex-col gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-300">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href} className="transition hover:text-[#8cff41]">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <div className="display-face text-sm uppercase tracking-[0.32em] text-[#8cff41]">Contact</div>
              <div className="mt-5 space-y-3 text-sm text-zinc-300">
                <div>
                  Email:{" "}
                  <a href={`mailto:${contactEmail}`} className="font-semibold text-[#8cff41]">
                    {contactEmail}
                  </a>
                </div>
                <div>Domain: www.og-web.site</div>
                <div>Design, build and hosting.</div>
                <div className="pt-2 text-zinc-500">&copy; {new Date().getFullYear()} OG Web.site</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
