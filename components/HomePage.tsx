import Image from "next/image";
import siteCopy from "@/lib/site-copy.json";
import ColorBends from "@/components/ColorBends";
import { GradientOrb, SectionLabel } from "@/components/ui";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";

const { home } = siteCopy;

export function HomePage() {
  return (
    <main className="bg-light">
      <section data-hero className="hero-redesign relative -mt-[86px] min-h-screen overflow-hidden bg-[#171326] px-5 pt-[86px] text-white sm:px-8">
        <ColorBends
          className="hero-color-bends absolute inset-0 z-0"
          colors={["#5b3df5", "#8a5cff", "#20d6c7"]}
          rotation={90}
          speed={0.2}
          scale={1}
          frequency={1}
          warpStrength={1}
          mouseInfluence={1}
          noise={0.15}
          parallax={0.5}
          iterations={1}
          intensity={1.5}
          bandWidth={6}
          transparent
        />
        <div className="hero-color-bends-contrast absolute inset-0 z-[1]" />
        <div className="section-container relative z-10">
          <div className="mx-auto flex min-h-[calc(100vh-86px)] max-w-6xl flex-col items-center justify-center py-8 text-center">
            <SectionLabel dark center>{home.hero.label}</SectionLabel>
            <h1 className="max-w-6xl text-[clamp(58px,8.8vw,122px)] leading-[0.9] text-white drop-shadow-[0_14px_40px_rgba(0,0,0,0.42)]">
              <span className="block">Do more with the team</span>
              <span className="hero-title-accent mt-5 block sm:mt-7">You already have.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-[18px] leading-8 !text-white/82">{home.hero.description}</p>
          </div>
        </div>
      </section>

      <section className="section-shell bg-light-surface">
        <div className="section-container">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-brand">The Reality</p>
              <h2 className="mt-5 max-w-3xl">Most businesses are still powered by manual work.</h2>
              <p className="mt-6 max-w-2xl text-[17px]">
                Emails, spreadsheets, documents, approvals, and follow-ups quietly slow down how work moves. AI can change that — when it is built into the workflow, not added on top of it.
              </p>
              <div className="mt-10 max-w-2xl divide-y divide-light-border border-y border-light-border">
                {[
                  ["01", "Work is scattered", "Critical information lives across tools, files, inboxes, and people."],
                  ["02", "Teams move slower", "Time gets lost in checking, copying, cleaning, and chasing."],
                  ["03", "Growth gets expensive", "More volume usually means more coordination, more people, and more overhead."],
                ].map(([number, title, body]) => (
                  <div key={title} className="grid gap-4 py-5 sm:grid-cols-[3rem_1fr]">
                    <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-brand/65">{number}</span>
                    <div>
                      <p className="text-base font-semibold leading-snug text-ink">{title}</p>
                      <p className="mt-1 text-sm leading-6 text-ink-secondary">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-8 rounded-full bg-brand/10 blur-3xl" />
              <div className="luxury-ring relative overflow-hidden rounded-[28px] border border-light-border bg-light/78 p-3 shadow-card backdrop-blur-md">
                <Image
                  src="/problem-img.png"
                  alt="Manual work scattered across emails, spreadsheets, approvals, and reports"
                  width={920}
                  height={720}
                  className="h-auto w-full rounded-[22px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section-shell relative bg-light-surface">
        <span id="about" className="absolute -top-20" aria-hidden="true" />
        <div className="section-container">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="max-w-2xl">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-brand">What We Build</p>
              <h2 className="mt-5">AI systems for the work your business repeats every day.</h2>
              <p className="mt-6 text-[17px]">
                We design, build, and deploy AI automations around your real workflows — from messy inputs to reliable execution.
              </p>
            </div>
            <div className="divide-y divide-light-border border-y border-light-border">
              {[
                ["01", "Workflow Discovery", "We map where time, cost, and manual decisions slow your business down."],
                ["02", "AI Automation Systems", "We build agents and workflows that process inputs, make decisions, route exceptions, and move work forward."],
                ["03", "Deployment & Handover", "We deploy into your existing workflow, train your team, and leave you with a system your team can actually use."],
              ].map(([number, title, body]) => (
                <div key={title} className="group grid gap-5 py-8 transition-colors duration-300 sm:grid-cols-[4rem_1fr]">
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-brand/65 transition-colors duration-300 group-hover:text-brand">{number}</span>
                  <div className="grid gap-3 md:grid-cols-[0.68fr_1fr] md:gap-8">
                    <h3 className="text-[24px] leading-tight">{title}</h3>
                    <div>
                      <p className="text-sm leading-7 text-ink-secondary">{body}</p>
                      <div className="mt-5 h-px w-12 bg-gradient-to-r from-brand/40 to-teal/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell bg-light-surface">
        <div className="section-container">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="relative">
              <div className="absolute bottom-8 left-[9px] top-8 w-px bg-gradient-to-b from-brand/25 via-teal/30 to-brand/10" />
              <div className="divide-y divide-light-border border-y border-light-border">
                {[
                  ["Discover the drag", "We identify where repetitive work, delays, and manual decisions slow the business down."],
                  ["Map the system", "We design around your real inputs, tools, approvals, exceptions, and edge cases."],
                  ["Build with real data", "We test against the files, formats, constraints, and messy scenarios your team already handles."],
                  ["Deploy into operations", "We launch the system inside your workflow, document it clearly, and train your team to use it confidently."],
                ].map(([title, body]) => (
                  <div key={title} className="relative grid gap-4 py-7 pl-10">
                    <span className="absolute left-0 top-8 h-[19px] w-[19px] rounded-full border border-teal/35 bg-light shadow-[0_0_24px_rgba(32,214,199,0.22)]">
                      <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand" />
                    </span>
                    <div className="grid gap-3 md:grid-cols-[0.58fr_1fr] md:gap-8">
                      <h3 className="text-[22px] leading-tight">{title}</h3>
                      <p className="text-sm leading-7 text-ink-secondary">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="max-w-2xl lg:justify-self-end">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-brand">How We Work</p>
              <h2 className="mt-5">We start with the workflow.</h2>
              <p className="mt-6 text-[17px]">
                Before we build, we understand how work actually moves — the tools, handoffs, exceptions, delays, and decisions that shape your operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section-shell relative overflow-hidden bg-[#171326]">
        <GradientOrb className="-right-32 -top-32" size={520} opacity={0.22} blur={160} />
        <GradientOrb color="teal" className="-left-24 bottom-0" size={360} opacity={0.18} blur={140} />
        <div className="absolute inset-0 dark-grid opacity-60" />
        <div className="section-container relative grid gap-12 lg:grid-cols-[0.9fr_0.82fr] lg:items-center">
          <div className="max-w-2xl py-4 text-white">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] !text-white/70">Contact</p>
            <h2 className="mt-5 text-white">Ready to put AI to work?</h2>
            <p className="mt-5 max-w-xl !text-white/72">
              Tell us what is still manual in your business. We will help you identify where AI can reduce effort, speed up execution, and lower operational cost.
            </p>
            <p className="mt-8 text-sm !text-white/58">
              <a href={`mailto:${siteCopy.company.email}`} className="font-medium !text-white transition-colors hover:!text-teal">{siteCopy.company.email}</a>
              <span className="mx-2 text-white/25">·</span>
              {siteCopy.company.location}
              <span className="mx-2 text-white/25">·</span>
              Working globally
            </p>
          </div>
          <LeadCaptureForm
            title="Book a discovery call"
            description="Share the workflow you want to improve. We will get back with a clear next step."
            intent="discovery"
            buttonLabel="Book a discovery call"
            detailsPlaceholder="What workflow do you want to improve?"
            dark
            compact
          />
        </div>
      </section>
    </main>
  );
}
