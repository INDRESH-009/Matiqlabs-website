import Image from "next/image";
import siteCopy from "@/lib/site-copy.json";
import { Arrow, Button, Card, Chip, GradientOrb, SectionLabel, StatCounter } from "@/components/ui";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";

const { cargo } = siteCopy;

export function CargoMatiqPage() {
  return (
    <main className="bg-white">
      <section data-hero className="relative overflow-hidden bg-dark-base px-5 pb-24 pt-32 text-white sm:px-8">
        <GradientOrb className="-right-56 top-0" size={620} opacity={0.18} blur={170} />
        <GradientOrb color="teal" className="-left-24 bottom-0" size={420} opacity={0.18} blur={150} />
        <div className="absolute inset-0 dark-grid opacity-35" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_28%),linear-gradient(180deg,#06101b_0%,#07111f_60%,#0a1422_100%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-3xl">
            <SectionLabel dark>{cargo.hero.label}</SectionLabel>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <Chip variant="dark" dot>{cargo.hero.liveLabel}</Chip>
              <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-white/56">
                Freight invoice reconciliation
              </div>
            </div>
            <div className="mt-7 flex items-center gap-4">
              <div className="grid h-16 w-16 place-items-center rounded-[20px] border border-cyan-300/20 bg-cyan-300/10 shadow-[0_18px_50px_rgba(84,214,255,0.14)]">
                <Image src="/cargomatic-icon.png" alt="CargoMatiq icon" width={36} height={36} />
              </div>
              <div className="rounded-[22px] border border-white/10 bg-white/[0.04] px-5 py-4">
                <Image src="/cargpomatiq-dark.png" alt={cargo.hero.name} width={240} height={57} className="h-auto w-[190px] sm:w-[220px]" />
              </div>
            </div>
            <h1 className="mt-8 max-w-4xl text-white">{cargo.hero.title}</h1>
            <p className="mt-6 max-w-2xl text-[18px] text-white/70">{cargo.hero.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#request-access" variant="white">{cargo.hero.primaryCta}</Button>
              <Button href="#how-it-works" variant="ghostDark">{cargo.hero.secondaryCta} <Arrow /></Button>
            </div>
          </div>
          <Card variant="dark" className="relative overflow-hidden border-white/10 bg-[linear-gradient(180deg,rgba(15,29,52,0.98),rgba(7,17,31,0.98))]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(52,88,245,0.22),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(84,214,255,0.12),transparent_38%)]" />
            <div className="relative">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-red" />
                    <span className="h-3 w-3 rounded-full bg-amber" />
                    <span className="h-3 w-3 rounded-full bg-green" />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-[0.14em] text-white/55">{cargo.hero.consoleLabel}</span>
                </div>
                <Chip variant="dark">{cargo.hero.consoleStatus}</Chip>
              </div>
              <div className="mt-6 rounded-[24px] border border-white/10 bg-white/[0.03] p-4">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-2xl bg-cyan-300/12">
                      <Image src="/cargomatic-icon.png" alt="CargoMatiq icon" width={20} height={20} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{cargo.hero.name}</p>
                      <p className="mt-1 text-xs text-white/52">{cargo.hero.subtitle}</p>
                    </div>
                  </div>
                  <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-cyan-200">
                    Live
                  </span>
                </div>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {cargo.hero.proofStats.map(([value, suffix, label]) => (
                  <div key={label} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                    <StatCounter target={Number(value)} suffix={suffix} size="text-4xl" />
                    <p className="mt-3 text-sm text-white/68">{label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/55">{cargo.hero.batchLabel}</p>
                <div className="mt-4 space-y-3">
                  {cargo.hero.batchRows.map(([vendor, detail, status]) => (
                    <div key={vendor} className="flex items-center justify-between rounded-2xl border border-white/10 bg-dark-surface px-4 py-3">
                      <div>
                        <p className="text-sm font-semibold text-white">{vendor}</p>
                        <p className="mt-1 text-xs text-white/55">{detail}</p>
                      </div>
                      <span className={`rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-[0.1em] ${status === "Matched" ? "bg-green/15 text-green" : status === "Ready" ? "bg-brand/20 text-brand-light" : "bg-amber/15 text-amber"}`}>
                        {status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Card variant="feature" className="relative overflow-hidden">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-brand/10 blur-3xl" />
            <div className="relative">
              <SectionLabel>{cargo.why.label}</SectionLabel>
              <h2>{cargo.why.title}</h2>
              <p className="mt-5 max-w-3xl">{cargo.why.description}</p>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {cargo.why.capabilities.map((item) => (
                  <div key={item} className="rounded-3xl border border-brand/10 bg-white px-5 py-5">
                    <p className="text-base font-semibold text-ink">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
          <Card className="bg-dark-base text-white">
            <SectionLabel dark>{cargo.fit.label}</SectionLabel>
            <h3 className="text-white">{cargo.fit.title}</h3>
            <div className="mt-6 space-y-4 text-sm text-white/70">
              {cargo.fit.items.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section id="how-it-works" className="bg-light-surface px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <SectionLabel>{cargo.steps.label}</SectionLabel>
            <h2>{cargo.steps.title}</h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {cargo.steps.items.map(([label, title, body]) => (
              <Card key={label} variant="feature" className="min-h-[240px]">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-brand">{label}</p>
                <h3 className="mt-5">{title}</h3>
                <p className="mt-4 text-sm">{body}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Card className="overflow-hidden">
            <SectionLabel>{cargo.proof.label}</SectionLabel>
            <h3>{cargo.proof.title}</h3>
            <div className="mt-7 rounded-[28px] border border-light-border bg-light-surface p-5">
              <div className="flex items-center justify-between">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">{cargo.proof.sampleLabel}</p>
                <Image src="/cargomatiq-light.png" alt={cargo.hero.name} width={112} height={28} className="h-auto w-[96px]" />
              </div>
              <div className="mt-5 space-y-3">
                {cargo.proof.sampleRows.map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3">
                    <span className="text-sm text-ink-secondary">{label}</span>
                    <span className="font-mono text-sm text-ink">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
          <LeadCaptureForm
            id="request-access"
            title={cargo.form.title}
            description={cargo.form.description}
            intent="access"
            buttonLabel={cargo.form.button}
          />
        </div>
      </section>
    </main>
  );
}
