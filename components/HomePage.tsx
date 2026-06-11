import Image from "next/image";
import { BrainCircuit, Clock3, Network, Rocket, SearchCheck, TrendingUp } from "lucide-react";
import siteCopy from "@/lib/site-copy.json";
import { CalendlyCtaCard } from "@/components/CalendlyCtaCard";
import ColorBends from "@/components/ColorBends";
import { GradientOrb, SectionLabel } from "@/components/ui";

const { home } = siteCopy;

const realityPainPoints = [
  {
    Icon: Network,
    title: "Work is scattered",
    body: "Critical information lives across tools, files, inboxes, and people.",
  },
  {
    Icon: Clock3,
    title: "Teams move slower",
    body: "Time gets lost in checking, copying, cleaning, and chasing.",
  },
  {
    Icon: TrendingUp,
    title: "Growth gets expensive",
    body: "More volume means more coordination, more people, and more overhead.",
  },
];

const serviceCards = [
  {
    Icon: SearchCheck,
    title: "Workflow Discovery",
    body: "We map where time, cost, and manual decisions slow your business down.",
    label: "Map the work",
  },
  {
    Icon: BrainCircuit,
    title: "AI Automation Systems",
    body: "We build agents and workflows that process inputs, make decisions, route exceptions, and move work forward.",
    label: "Build the system",
  },
  {
    Icon: Rocket,
    title: "Deployment & Handover",
    body: "We deploy into your existing workflow, train your team, and leave you with a system your team can actually use.",
    label: "Launch with clarity",
  },
];

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
        <div className="hero-copy-veil absolute inset-0 z-[2]" />
        <div className="section-container relative z-10">
          <div className="mx-auto flex min-h-[calc(100vh-86px)] max-w-6xl flex-col items-center justify-center py-8 text-center">
            <SectionLabel dark center className="hero-eyebrow">{home.hero.label}</SectionLabel>
            <h1 className="max-w-[92rem] text-[clamp(78px,10.8vw,158px)] leading-[0.86] text-white drop-shadow-[0_14px_40px_rgba(0,0,0,0.42)]">
              <span className="block">Do more with the team</span>
              <span className="hero-title-accent title-font mt-5 block sm:mt-7">You already have.</span>
            </h1>
            <p className="hero-subheadline mt-7 max-w-[820px] text-[clamp(23px,2.55vw,32px)] leading-[1.42] !text-white/88">{home.hero.description}</p>
          </div>
        </div>
      </section>

      <section className="section-shell light-ambient-section light-ambient-section-a bg-light-surface">
        <div className="section-container relative z-10">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-brand">The Reality</p>
              <h2 className="mt-5 max-w-3xl">Most businesses are still powered by manual work.</h2>
              <p className="mt-6 max-w-2xl text-[17px]">
                Emails, spreadsheets, documents, approvals, and follow-ups quietly slow down how work moves. AI can change that — when it is built into the workflow, not added on top of it.
              </p>
            </div>
            <div className="reality-visual-wrap relative">
              <div className="absolute -inset-8 rounded-full bg-[linear-gradient(135deg,rgba(91,61,245,0.18),rgba(32,214,199,0.16))] blur-3xl" />
              <div className="reality-visual-frame relative overflow-hidden rounded-[34px] border bg-light/78 p-4 backdrop-blur-md">
                <Image
                  src="/problem-img.png"
                  alt="Manual work scattered across emails, spreadsheets, approvals, and reports"
                  width={920}
                  height={720}
                  className="h-auto w-full rounded-[26px]"
                />
              </div>
            </div>
          </div>
          <div className="reality-pain-list mt-12">
            {realityPainPoints.map(({ Icon, title, body }) => (
              <div key={title} className="reality-pain-row">
                <div className="reality-pain-icon">
                  <Icon aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="text-base font-semibold leading-snug text-ink">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-ink-secondary">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="section-shell light-ambient-section light-ambient-section-b relative bg-light-surface">
        <span id="about" className="absolute -top-20" aria-hidden="true" />
        <div className="section-container relative z-10">
          <div className="relative">
            <div className="max-w-3xl">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-brand">What We Build</p>
              <h2 className="mt-5">AI systems for the work your business repeats every day.</h2>
              <p className="mt-6 max-w-2xl text-[17px]">
                We design, build, and deploy AI automations around your real workflows — from messy inputs to reliable execution.
              </p>
            </div>
            <div className="service-card-grid mt-12">
              {serviceCards.map(({ Icon, title, body, label }) => (
                <div key={title} className="service-card">
                  <div className="service-card-top">
                    <div className="service-card-icon">
                      <Icon aria-hidden="true" />
                    </div>
                    <span className="service-card-label">{label}</span>
                  </div>
                  <h3 className="mt-8 text-[24px] leading-tight">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-ink-secondary">{body}</p>
                </div>
              ))}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] !text-white/70">CONTACT</p>
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
          <CalendlyCtaCard
            title="Book a discovery call"
            description="In 30 minutes, we will understand your workflow, identify the biggest automation opportunities, and suggest a clear next step."
            points={["Share the workflow", "Find the automation fit", "Get a practical next step"]}
            buttonLabel="Book a discovery call"
          />
        </div>
      </section>
    </main>
  );
}
