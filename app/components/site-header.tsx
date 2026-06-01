"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Menu, X } from "lucide-react";
import { useState } from "react";

import { contactEmail, navItems } from "./site-data";

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <header className="relative z-40 border-b border-white/10 bg-[linear-gradient(180deg,rgba(13,15,15,0.98),rgba(6,7,7,0.98))]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0)_20%),radial-gradient(circle_at_14%_16%,rgba(140,255,65,0.12),transparent_15%),radial-gradient(circle_at_82%_18%,rgba(140,255,65,0.06),transparent_18%)]" />

      <div className="mx-auto max-w-[1700px] px-4 md:px-6">
        <div className="relative hidden pt-3 md:grid md:grid-cols-[22rem_1fr] md:items-end lg:grid-cols-[28rem_1fr]">
          <div className="relative h-[8.8rem] lg:h-[10rem]">
            <Link href="/" aria-label="OG Web.site home" className="absolute inset-0 z-10" />
            <img
              src="/assets/branding/logo-header.png"
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute left-0 bottom-0 w-[18rem] max-w-none object-contain drop-shadow-[0_0_26px_rgba(72,255,0,0.26)] lg:w-[22rem]"
            />
          </div>

          <div className="relative flex h-[8.8rem] items-end justify-end pb-6 lg:h-[10rem] lg:pb-7">
            <div className="pointer-events-none absolute left-0 right-0 top-[58%] h-px bg-gradient-to-r from-[#6cff35]/32 via-[#8cff41]/92 to-[#8cff41]/24" />
            <div className="pointer-events-none absolute left-[12%] right-[10%] top-[calc(58%-0.9rem)] h-10 bg-[radial-gradient(circle_at_18%_50%,rgba(140,255,65,0.28),transparent_12%),radial-gradient(circle_at_52%_50%,rgba(140,255,65,0.18),transparent_14%),radial-gradient(circle_at_86%_50%,rgba(140,255,65,0.12),transparent_14%)] blur-2xl" />

            <div className="relative flex items-center gap-6 lg:gap-8">
              <nav className="flex items-center gap-7 lg:gap-10">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={[
                      "text-xs font-semibold uppercase tracking-[0.28em] transition",
                      isActive(item.href)
                        ? "text-[#9aff64]"
                        : "text-zinc-200 hover:text-[#9aff64]",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <a
                href={`mailto:${contactEmail}`}
                aria-label={`Email ${contactEmail}`}
                title={contactEmail}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-black/45 text-[#9aff64] transition hover:border-[#8cff41]/38 hover:text-white"
              >
                <Mail size={16} />
              </a>

              <Link
                href="/contact"
                className="rounded-full bg-[#8cff41] px-8 py-3.5 text-sm font-black uppercase tracking-[0.16em] text-black shadow-[0_0_24px_rgba(72,255,0,0.2)] transition hover:translate-y-[-1px] hover:shadow-[0_0_32px_rgba(72,255,0,0.24)]"
              >
                Start A Project
              </Link>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col items-center gap-4 py-4 md:hidden">
          <Link href="/" aria-label="OG Web.site home">
            <img
              src="/assets/branding/logo-header.png"
              alt="OG Web.site logo"
              className="w-[14.5rem] max-w-full object-contain drop-shadow-[0_0_24px_rgba(72,255,0,0.24)]"
            />
          </Link>

          <div className="pointer-events-none absolute left-4 right-4 top-[6.2rem] h-px bg-gradient-to-r from-transparent via-[#8cff41]/82 to-transparent" />

          <div className="flex w-full items-center justify-between gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-[#8cff41] px-5 py-2.5 text-xs font-black uppercase tracking-[0.16em] text-black"
            >
              Start
            </Link>

            <button
              onClick={() => setMenuOpen((open) => !open)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/30 text-zinc-200"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="px-4 pb-4 md:hidden">
            <div className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(20,22,22,0.98),rgba(10,12,12,0.98))] px-5 py-5 shadow-[0_14px_40px_rgba(0,0,0,0.28)]">
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={[
                      "text-sm font-semibold uppercase tracking-[0.22em]",
                      isActive(item.href) ? "text-[#9aff64]" : "text-zinc-200",
                    ].join(" ")}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}

                <a href={`mailto:${contactEmail}`} className="pt-2 text-sm font-semibold text-[#9aff64]">
                  {contactEmail}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
