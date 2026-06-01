import { Mail, Rocket } from "lucide-react";

import ContactForm from "../../components/contact-form";
import { contactEmail } from "../../components/site-data";

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(140,255,65,0.08),transparent_18%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0)_32%)]" />
        <div className="pointer-events-none absolute inset-y-0 right-[-9rem] hidden w-[44rem] lg:block">
          <img
              src="/assets/branding/logo-transparent.png"
            alt=""
            aria-hidden="true"
            className="absolute right-0 top-[-3rem] h-[135%] w-auto max-w-none object-contain opacity-[0.07]"
            style={{
              WebkitMaskImage:
                "linear-gradient(90deg, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.35) 18%, rgba(0,0,0,0.8) 42%, rgba(0,0,0,1) 100%)",
              maskImage:
                "linear-gradient(90deg, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.35) 18%, rgba(0,0,0,0.8) 42%, rgba(0,0,0,1) 100%)",
            }}
          />
        </div>

        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:px-6 md:py-14 lg:grid-cols-[0.68fr_0.32fr] lg:items-end">
          <div className="max-w-3xl">
            <div className="display-face text-sm uppercase tracking-[0.34em] text-[#8cff41]">Contact</div>
            <h1 className="display-face outlined-heading mt-5 text-[clamp(2.4rem,5.6vw,4.8rem)] uppercase leading-[0.9] tracking-[-0.07em]">
              Start the project.
              <br />
              Keep it direct.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-200 md:text-lg">
              Send the brief, the business and what the site needs to do. The contact route is meant to stay simple, direct and easy to act on.
            </p>
          </div>

          <div className="rounded-[1.8rem] border border-white/12 bg-[linear-gradient(180deg,rgba(21,24,24,0.88),rgba(10,12,12,0.95))] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.22)]">
            <div className="display-face text-xs uppercase tracking-[0.34em] text-[#8cff41]">Direct line</div>
            <div className="mt-4 text-sm leading-7 text-zinc-200">
              One route for the brief, the build and the aftercare. No back-and-forth between designer, developer and host.
            </div>
            <a href={`mailto:${contactEmail}`} className="mt-5 inline-flex text-sm font-semibold uppercase tracking-[0.2em] text-[#8cff41]">
              {contactEmail}
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-18">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[2rem] border border-white/12 bg-[linear-gradient(180deg,rgba(21,24,24,0.92),rgba(10,12,12,0.96))] p-8">
            <div className="display-face text-sm uppercase tracking-[0.34em] text-[#8cff41]">Direct route</div>

            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${contactEmail}`}
                className="flex items-center gap-3 border-y border-white/10 py-4 text-sm font-semibold text-zinc-200 transition hover:text-[#8cff41]"
              >
                <Mail size={18} className="text-[#8cff41]" />
                {contactEmail}
              </a>

              <div className="flex items-center gap-3 border-b border-white/10 pb-4 text-sm text-zinc-300">
                <Rocket size={18} className="text-[#8cff41]" />
                Brand direction, build, hosting and launch support stay under one roof.
              </div>
            </div>

            <p className="mt-6 text-sm leading-7 text-zinc-400">
              If SMTP is not fully configured yet, the page still points people straight to the working email address instead of leaving them stuck.
            </p>
          </div>

          <div className="rounded-[2.2rem] border border-white/12 bg-[linear-gradient(180deg,rgba(21,24,24,0.92),rgba(10,12,12,0.96))] p-8">
            <div className="display-face text-sm uppercase tracking-[0.34em] text-[#8cff41]">Send the brief</div>
            <div className="display-face outlined-heading--soft mt-5 text-[clamp(2rem,4vw,3.4rem)] uppercase leading-[0.92] tracking-[-0.05em]">
              Tell me what the site has to do.
            </div>
            <div className="mt-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
