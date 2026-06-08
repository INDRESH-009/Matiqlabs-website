import Image from "next/image";
import cargoShowcase from "@/public/cargomatiq-showcase.png";
import siteCopy from "@/lib/site-copy.json";
import { Arrow, Button, Card, Chip, GradientOrb, Icon, SectionLabel } from "@/components/ui";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";

const { home } = siteCopy;

export function HomePage() {
  return (
    <main className="bg-light">
      <section data-hero className="hero-shell relative -mt-[68px] overflow-hidden bg-dark-base px-5 pb-24 pt-[120px] text-white sm:px-8 lg:pb-28">
        <GradientOrb className="right-[-180px] top-[-140px]" size={620} opacity={0.12} blur={190} />
        <GradientOrb color="teal" className="left-[-140px] bottom-[-180px]" size={500} opacity={0.08} blur={170} />
        <div className="hero-stars absolute inset-0 opacity-70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(91,61,245,0.26),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(32,214,199,0.18),transparent_26%),radial-gradient(circle_at_72%_72%,rgba(255,107,90,0.08),transparent_24%),linear-gradient(180deg,#171326_0%,#1d1730_48%,#171326_100%)]" />
        <div className="hero-mesh absolute inset-x-0 top-[64px] h-[260px] opacity-35" />
        <div className="hero-stage absolute inset-x-0 bottom-[96px] h-[300px] opacity-55" />
        <div className="hero-glow absolute left-1/2 top-[58%] h-[520px] w-[680px] -translate-x-1/2 rounded-full" />
        <div className="section-container relative">
          <div className="mx-auto flex max-w-5xl flex-col items-center py-10 text-center lg:py-16">
            <SectionLabel dark center>{home.hero.label}</SectionLabel>
            <h1 className="max-w-4xl text-white drop-shadow-[0_10px_32px_rgba(0,0,0,0.45)]">{home.hero.title}</h1>
            <p className="mt-5 max-w-2xl text-[18px] leading-8 !text-white">{home.hero.description}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href="#contact">{home.hero.primaryCta}</Button>
              <Button href="/cargomatiq" variant="ghostDark">{home.hero.secondaryCta} <Arrow /></Button>
            </div>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-xs !text-white">
              {home.hero.pills.map((pill, index) => (
                <div key={pill} className="contents">
                  {index > 0 ? <span className="h-1 w-1 rounded-full bg-white/25" /> : null}
                  <span>{pill}</span>
                </div>
              ))}
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
                    {home.hero.previewLabel}
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

      <section className="section-shell bg-light-surface">
        <div className="section-container">
          <div className="grid gap-6 xl:grid-cols-[1.08fr_0.92fr] xl:items-stretch">
            <div className="section-rail pl-6 sm:pl-8">
              <SectionLabel>{home.problem.label}</SectionLabel>
              <h2 className="max-w-3xl xl:max-w-[44rem]">{home.problem.title}</h2>
              <p className="mt-6 max-w-2xl">{home.problem.description}</p>
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {home.problem.kpis.map(([value, label, body]) => (
                  <div key={label} className="luxury-ring rounded-[26px] bg-light px-5 py-5">
                    <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-red">{label}</p>
                    <p className="mt-3 text-3xl font-extrabold text-ink">{value}</p>
                    <p className="mt-2 max-w-[12rem] text-sm text-ink-secondary">{body}</p>
                  </div>
                ))}
              </div>
              <div className="mt-7">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">{home.problem.stackLabel}</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {home.problem.stack.map((item) => (
                    <Chip key={item}>
                      {item}
                    </Chip>
                  ))}
                </div>
              </div>
            </div>
            <Card variant="feature" className="relative h-full overflow-hidden">
              <div className="absolute inset-x-8 top-0 h-32 rounded-full bg-red/12 blur-3xl" />
              <div className="relative flex h-full flex-col">
                <div className="flex items-center justify-between gap-4">
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-brand">{home.problem.signalLabel}</p>
                  <div className="rounded-full border border-amber/30 bg-amber/15 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-ink">
                    {home.problem.signalBadge}
                  </div>
                </div>
                <h3 className="mt-5 max-w-md">{home.problem.signalTitle}</h3>
                <p className="mt-4 max-w-lg">{home.problem.signalBody}</p>
                <div className="mt-8 flex flex-1 flex-col justify-center rounded-[26px] border border-light-border bg-light/90 p-5">
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-brand">{home.problem.capacityLabel}</p>
                    <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">{home.problem.capacityMeta}</span>
                  </div>
                  <div className="mt-5 space-y-4">
                    {home.problem.capacityBars.map(([label, value]) => (
                      <div key={label}>
                        <div className="mb-2 flex items-center justify-between text-sm text-ink-secondary">
                          <span>{label}</span>
                          <span className="font-mono text-ink">{value}%</span>
                        </div>
                        <div className="h-2.5 rounded-full bg-red/10">
                          <div className="h-full rounded-full bg-[linear-gradient(90deg,#FF6B5A_0%,#FFB84D_100%)]" style={{ width: `${value}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="section-shell bg-light-surface">
        <div className="section-container">
          <div className="max-w-3xl">
            <SectionLabel>{home.build.label}</SectionLabel>
            <h2>{home.build.title}</h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {home.build.cards.map(([icon, title, body], index) => (
              <Card key={title} variant="feature" className="relative overflow-hidden">
                <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-teal/12 blur-3xl" />
                <div className="absolute inset-x-6 top-6 h-px bg-gradient-to-r from-teal/30 via-brand/12 to-transparent" />
                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand text-white shadow-brand-sm">
                      <Icon name={icon as "search"} />
                    </div>
                    <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-brand/70">
                      {`0${index + 1}`}
                    </div>
                  </div>
                  <h3 className="mt-6">{title}</h3>
                  <p className="mt-4 text-sm">{body}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section-shell-tight bg-light">
        <div className="section-container">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <Card className="relative overflow-hidden">
              <div className="absolute -right-10 top-10 h-36 w-36 rounded-full bg-teal/16 blur-3xl" />
              <div className="relative max-w-2xl">
                <SectionLabel>{home.about.label}</SectionLabel>
                <h2>{home.about.title}</h2>
                <p className="mt-6">{home.about.description}</p>
              </div>
            </Card>
            <Card variant="highlight">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-brand">{home.about.spotlightLabel}</p>
              <div className="mt-6 space-y-5">
                {home.about.spotlight.map(([title, body], index) => (
                  <div key={title} className="grid gap-4 border-b border-brand/10 pb-5 last:border-b-0 last:pb-0 sm:grid-cols-[auto_1fr]">
                    <div className="grid h-10 w-10 place-items-center rounded-full border border-teal/35 bg-teal/10 text-sm font-semibold text-brand">
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-base font-semibold text-ink">{title}</p>
                      <p className="mt-2 text-sm">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
          <Card variant="feature" className="mt-6">
            <div className="grid gap-6 lg:grid-cols-3">
              {home.about.principles.map(([title, body], index) => (
                <div key={title} className="border-b border-light-border pb-5 last:border-b-0 lg:border-b-0 lg:border-r lg:pr-6 last:lg:border-r-0">
                  <div className="flex items-center gap-3">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand text-white shadow-brand-sm">
                      <Icon name={home.about.principleIcons[index] as "layers" | "approval" | "report"} />
                    </div>
                    <h3 className="max-w-[15rem]">{title}</h3>
                  </div>
                  <p className="mt-4 text-sm">{body}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section className="section-shell bg-light-surface">
        <div className="section-container">
          <div className="max-w-3xl">
            <SectionLabel>{home.process.label}</SectionLabel>
            <h2>{home.process.title}</h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-12">
            <Card className="lg:col-span-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-brand">{home.process.introLabel}</p>
              <h3 className="mt-5">{home.process.introTitle}</h3>
              <p className="mt-4 text-sm">{home.process.introBody}</p>
              <div className="mt-8 space-y-4">
                <div className="rounded-[24px] border border-light-border bg-light/80 px-5 py-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-brand">{home.process.engagementShapeLabel}</p>
                  <p className="mt-2 text-sm font-semibold text-ink">{home.process.engagementShapeBody}</p>
                </div>
                <div className="rounded-[24px] border border-light-border bg-light/80 px-5 py-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-brand">{home.process.deliveryPrincipleLabel}</p>
                  <p className="mt-2 text-sm font-semibold text-ink">{home.process.deliveryPrincipleBody}</p>
                </div>
              </div>
            </Card>
            <div className="grid gap-6 lg:col-span-7 md:grid-cols-2">
              {home.process.steps.map(([step, title, body], index) => (
                <Card key={step} variant={index % 2 === 0 ? "feature" : "default"} className="relative overflow-hidden">
                  <div className="absolute right-4 top-4 text-6xl font-extrabold text-brand/10">{step}</div>
                  <div className="absolute left-8 top-0 h-full w-px bg-gradient-to-b from-brand/20 via-brand/10 to-transparent" />
                  <div className="relative">
                    <div className="pl-6">
                      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-brand">Stage {step}</p>
                      <h3 className="mt-5 max-w-[15rem]">{title}</h3>
                      <p className="mt-4 text-sm">{body}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section-shell relative overflow-hidden bg-dark-base">
        <GradientOrb className="-right-32 -top-32" size={520} opacity={0.22} blur={160} />
        <GradientOrb color="teal" className="-left-24 bottom-0" size={360} opacity={0.18} blur={140} />
        <div className="absolute inset-0 dark-grid opacity-60" />
        <div className="section-container relative grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="py-4 text-white">
            <SectionLabel dark>{home.contact.label}</SectionLabel>
            <h2 className="text-white">{home.contact.title}</h2>
            <p className="mt-5 max-w-xl !text-white">{home.contact.description}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] !text-white">{home.contact.generalLabel}</p>
                <a href={`mailto:${siteCopy.company.email}`} className="mt-3 block text-lg font-semibold !text-white">{siteCopy.company.email}</a>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] !text-white">{home.contact.locationLabel}</p>
                <p className="mt-3 text-lg font-semibold !text-white">{siteCopy.company.location}</p>
                <p className="mt-1 text-sm !text-white">{siteCopy.company.locationNote}</p>
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
