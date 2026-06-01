import { CheckCircle2, Mail } from "lucide-react";

import { contactEmail, hostingFeatures, processSteps } from "../../components/site-data";

export default function HostingPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_22%,rgba(140,255,65,0.08),transparent_20%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0)_32%)]" />
        <div className="pointer-events-none absolute inset-y-0 right-[-9rem] hidden w-[44rem] lg:block">
          <img
              src="/assets/branding/logo-transparent.png"
            alt=""
            aria-hidden="true"
            className="absolute right-0 top-[-3rem] h-[135%] w-auto max-w-none object-contain opacity-[0.08]"
            style={{
              WebkitMaskImage:
                "linear-gradient(90deg, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.35) 18%, rgba(0,0,0,0.8) 42%, rgba(0,0,0,1) 100%)",
              maskImage:
                "linear-gradient(90deg, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.35) 18%, rgba(0,0,0,0.8) 42%, rgba(0,0,0,1) 100%)",
            }}
          />
        </div>

        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:px-6 md:py-14 lg:grid-cols-[0.7fr_0.3fr] lg:items-end">
          <div className="max-w-4xl">
            <div className="display-face text-sm uppercase tracking-[0.34em] text-[#8cff41]">Hosting</div>
            <h1 className="display-face outlined-heading mt-5 text-[clamp(2.4rem,5.8vw,5rem)] uppercase leading-[0.9] tracking-[-0.08em]">
              One point of contact.
              <br />
              No split build chain.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-200 md:text-lg">
              Design, hosting, domain setup and aftercare stay cleaner when they sit with one build partner instead of getting split across random suppliers.
            </p>
          </div>

          <div className="rounded-[1.8rem] border border-white/12 bg-[linear-gradient(180deg,rgba(21,24,24,0.88),rgba(10,12,12,0.95))] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.22)]">
            <div className="display-face text-xs uppercase tracking-[0.34em] text-[#8cff41]">Managed setup</div>
            <div className="mt-4 space-y-4 text-sm leading-7 text-zinc-200">
              <div className="border-b border-white/10 pb-4">Domain connection, SSL, launch and live support sit in one handoff-free workflow.</div>
              <div className="border-b border-white/10 pb-4">Contact routing and fallback handling are built properly behind the scenes, not bolted on later.</div>
              <div>Aftercare stays direct, so edits and fixes do not disappear into ticket ping-pong.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-18">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="space-y-8">
            {processSteps.map((step) => (
              <div key={step.number} className="border-l border-[#8cff41]/22 pl-5">
                <div className="display-face text-sm uppercase tracking-[0.34em] text-[#8cff41]">{step.number}</div>
                <div className="display-face outlined-heading--soft mt-4 text-3xl uppercase tracking-[-0.05em]">{step.title}</div>
                <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-300">{step.text}</p>
              </div>
            ))}
          </div>

          <div className="rounded-[2.2rem] border border-white/12 bg-[linear-gradient(180deg,rgba(20,23,23,0.94),rgba(9,10,10,0.98))] p-8">
            <div className="display-face text-sm uppercase tracking-[0.34em] text-[#8cff41]">What stays included</div>

            <div className="mt-8 space-y-4">
              {hostingFeatures.map((item) => (
                <div key={item} className="flex items-start gap-3 border-b border-white/8 pb-4 text-sm leading-7 text-zinc-300 last:border-b-0 last:pb-0">
                  <CheckCircle2 className="mt-1 text-[#8cff41]" size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              <div className="border-t border-white/10 pt-4">
                <div className="display-face text-xs uppercase tracking-[0.3em] text-zinc-500">Direct email</div>
                <a href={`mailto:${contactEmail}`} className="mt-3 inline-flex items-center gap-2 text-lg font-semibold text-[#8cff41]">
                  <Mail size={18} />
                  {contactEmail}
                </a>
              </div>

              <div className="border-t border-white/10 pt-4">
                <div className="display-face text-xs uppercase tracking-[0.3em] text-zinc-500">Live domain</div>
                <div className="mt-3 text-lg font-semibold text-white">www.og-web.site</div>
              </div>

              <div className="border-t border-white/10 pt-4">
                <div className="display-face text-xs uppercase tracking-[0.3em] text-zinc-500">Fast updates</div>
                <div className="mt-3 text-sm leading-7 text-zinc-400">
                  Content changes, fixes and launch support stay with the same build partner instead of disappearing into a support queue.
                </div>
              </div>

              <div className="border-t border-white/10 pt-4">
                <div className="display-face text-xs uppercase tracking-[0.3em] text-zinc-500">Forms and routing</div>
                <div className="mt-3 text-sm leading-7 text-zinc-400">
                  Enquiries, fallback email routing and the contact flow are handled properly behind the scenes without exposing technical setup on the site.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
