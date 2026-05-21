import Image from "next/image";
import cargoShowcase from "@/public/cargomatiq-showcase.png";
import siteCopy from "@/lib/site-copy.json";
import { Arrow, Button, Card, GradientOrb, Icon, SectionLabel } from "@/components/ui";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";

const { home } = siteCopy;
const heroTitle = "AI Operators for\nManual Workflows";
const heroDescription = "Automate repetitive operational work with systems your team can trust.";

export function HomePage() {
  return (
    <main className="bg-white">
      <section data-hero className="hero-shell relative -mt-[68px] overflow-hidden bg-dark-base px-5 pb-24 pt-[120px] text-white sm:px-8 lg:pb-28">
        <GradientOrb className="right-[-180px] top-[-140px]" size={620} opacity={0.12} blur={190} />
        <GradientOrb color="teal" className="left-[-140px] bottom-[-180px]" size={500} opacity={0.08} blur={170} />
        <div className="hero-stars absolute inset-0 opacity-70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_24%),linear-gradient(180deg,#060b14_0%,#07111f_55%,#091726_100%)]" />
        <div className="hero-mesh absolute inset-x-0 top-[64px] h-[260px] opacity-35" />
        <div className="hero-stage absolute inset-x-0 bottom-[96px] h-[300px] opacity-55" />
        <div className="hero-glow absolute left-1/2 top-[58%] h-[520px] w-[680px] -translate-x-1/2 rounded-full" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto flex max-w-5xl flex-col items-center py-10 text-center lg:py-16">
            <SectionLabel dark center>{home.hero.label}</SectionLabel>
            <h1 className="max-w-4xl whitespace-pre-line text-white drop-shadow-[0_10px_32px_rgba(0,0,0,0.45)]">{heroTitle}</h1>
            <p className="mt-5 max-w-xl text-[18px] leading-8 text-white/68">{heroDescription}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href="#contact">{home.hero.primaryCta}</Button>
              <Button href="/cargomatiq" variant="ghostDark">{home.hero.secondaryCta} <Arrow /></Button>
            </div>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-xs text-white/42">
              <span>No extra software noise</span>
              <span className="h-1 w-1 rounded-full bg-white/25" />
              <span>Built for messy workflows</span>
              <span className="h-1 w-1 rounded-full bg-white/25" />
              <span>Production-minded systems</span>
            </div>
            <div className="hero-product-shell relative mt-14 w-full max-w-5xl overflow-hidden rounded-[28px] shadow-[0_40px_120px_rgba(0,0,0,0.48)] sm:mt-16">
              <div className="hero-product-aura absolute inset-x-12 bottom-[-72px] h-36 rounded-full" />
              <div className="hero-product-beam absolute inset-x-[12%] top-0 h-24" />
              <div className="hero-product-frame relative overflow-hidden rounded-[22px]">
                <div className="hero-browser-bar flex items-center justify-between border-b border-white/8 px-4 py-3 sm:px-5">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green/80" />
                  </div>
                  <div className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-white/44">
                    Product preview
                  </div>
                </div>
                <div className="hero-shot relative overflow-hidden rounded-b-[22px]">
                  <Image
                    src={cargoShowcase}
                    alt="CargoMatiq product workflow screenshot"
                    className="h-auto w-full"
                    priority
                  />
                  <div className="hero-shot-darken absolute inset-x-0 bottom-0 h-[46%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light-surface px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <SectionLabel>{home.build.label}</SectionLabel>
            <h2>{home.build.title}</h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {home.build.cards.map(([icon, title, body]) => (
              <Card key={title} variant="feature" className="relative overflow-hidden">
                <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-brand/10 blur-3xl" />
                <div className="relative">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand text-white shadow-brand-sm">
                    <Icon name={icon as "search"} />
                  </div>
                  <h3 className="mt-6">{title}</h3>
                  <p className="mt-4 text-sm">{body}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-light-surface px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <SectionLabel>{home.process.label}</SectionLabel>
            <h2>{home.process.title}</h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-12">
            <Card className="lg:col-span-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-brand">{home.process.introLabel}</p>
              <h3 className="mt-5">{home.process.introTitle}</h3>
              <p className="mt-4 text-sm">{home.process.introBody}</p>
            </Card>
            <div className="grid gap-6 lg:col-span-7 md:grid-cols-2">
              {home.process.steps.map(([step, title, body], index) => (
                <Card key={step} variant={index % 2 === 0 ? "feature" : "default"} className="relative overflow-hidden">
                  <div className="absolute right-4 top-4 text-6xl font-extrabold text-brand/10">{step}</div>
                  <div className="relative">
                    <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-brand">Stage {step}</p>
                    <h3 className="mt-5 max-w-[15rem]">{title}</h3>
                    <p className="mt-4 text-sm">{body}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden bg-dark-base px-5 py-24 sm:px-8">
        <GradientOrb className="-right-32 -top-32" size={520} opacity={0.22} blur={160} />
        <GradientOrb color="teal" className="-left-24 bottom-0" size={360} opacity={0.18} blur={140} />
        <div className="absolute inset-0 dark-grid opacity-60" />
        <div className="relative mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="py-4 text-white">
            <SectionLabel dark>{home.contact.label}</SectionLabel>
            <h2 className="text-white">{home.contact.title}</h2>
            <p className="mt-5 max-w-xl text-white/70">{home.contact.description}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/55">{home.contact.generalLabel}</p>
                <a href={`mailto:${siteCopy.company.email}`} className="mt-3 block text-lg font-semibold text-white">{siteCopy.company.email}</a>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/55">{home.contact.locationLabel}</p>
                <p className="mt-3 text-lg font-semibold text-white">{siteCopy.company.location}</p>
                <p className="mt-1 text-sm text-white/55">{siteCopy.company.locationNote}</p>
              </div>
            </div>
          </div>
          <LeadCaptureForm
            title={home.contact.formTitle}
            description={home.contact.formDescription}
            intent="discovery"
            buttonLabel={home.contact.formButton}
            dark
          />
        </div>
      </section>
    </main>
  );
}
