import { existsSync } from "node:fs";
import { join } from "node:path";
import { FileCheck, FileUp, GitCompareArrows, TriangleAlert } from "lucide-react";
import Image from "next/image";
import { CalendlyCtaCard } from "@/components/CalendlyCtaCard";
import { Arrow, Button, GradientOrb, SectionLabel } from "@/components/ui";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";
import siteCopy from "@/lib/site-copy.json";

const screenshotRoot = "/cargomatiq";

const productViews = [
  {
    title: "Reconciliation dashboard",
    text: "Track processed statements, matched invoices, tolerance matches, and flagged exceptions.",
    src: `${screenshotRoot}/cm-recon.jpeg`,
    imageWidth: 1600,
    imageHeight: 803,
  },
  {
    title: "Exception review",
    text: "See mismatches, missing references, duplicate charges, and records that need human review.",
    src: `${screenshotRoot}/cm-reconrun.jpeg`,
    imageWidth: 1600,
    imageHeight: 791,
  },
];

const workflowSteps = [
  {
    title: "Upload vendor statement",
    text: "CargoMatiq accepts vendor files and extracts the relevant invoice and shipment details.",
    label: "Intake",
    Icon: FileUp,
  },
  {
    title: "Match against internal records",
    text: "The system compares vendor data with your operational or finance records.",
    label: "Match",
    Icon: GitCompareArrows,
  },
  {
    title: "Flag what needs review",
    text: "Clean matches pass through. Mismatches, missing data, and tolerance issues are routed for review.",
    label: "Review",
    Icon: TriangleAlert,
  },
  {
    title: "Export the result",
    text: "Teams get a structured reconciliation output they can act on.",
    label: "Report",
    Icon: FileCheck,
  },
];

const capabilities = siteCopy.cargo.capabilities;

function publicImageExists(src: string) {
  return existsSync(join(process.cwd(), "public", src.replace(/^\//, "")));
}

function ScreenshotFrame({
  title,
  description,
  src,
  hero = false,
  imageWidth = 1200,
  imageHeight = 760,
}: {
  title: string;
  description: string;
  src: string;
  hero?: boolean;
  imageWidth?: number;
  imageHeight?: number;
}) {
  const hasImage = publicImageExists(src);

  return (
    <div className={`cargo-shot-frame ${hero ? "cargo-shot-frame-hero" : ""}`}>
      <div className="cargo-shot-topbar">
        <div className="flex gap-2">
          <span />
          <span />
          <span />
        </div>
        <Image src="/cargpomatiq-dark.png" alt="CargoMatiq" width={116} height={29} className="h-auto w-[96px] opacity-90" />
      </div>
      <div
        className={`relative grid place-items-center overflow-hidden rounded-b-[26px] bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] ${hero ? "min-h-[260px]" : hasImage ? "" : "aspect-[16/10]"}`}
        style={hasImage ? { aspectRatio: `${imageWidth} / ${imageHeight}` } : undefined}
      >
        {/* Replace with actual CargoMatiq screenshot */}
        {hasImage ? (
          <Image
            src={src}
            alt={title}
            width={imageWidth}
            height={imageHeight}
            className="h-full w-full object-contain"
          />
        ) : (
          <div className="relative z-10 px-6 py-12 text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] !text-white/52">
              Product screenshot placeholder
            </p>
            <h3 className="mt-4 text-[clamp(24px,3vw,40px)] leading-tight !text-white">
              {title}
            </h3>
            <p className="mx-auto mt-4 max-w-md text-sm leading-7 !text-white/60">
              {description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export function CargoMatiqPage() {
  return (
    <main className="bg-light">
      <section data-hero className="cargo-product-hero relative -mt-[86px] overflow-hidden bg-dark-base px-5 pb-20 pt-[152px] text-white sm:px-8 lg:pb-28">
        <GradientOrb className="-right-44 top-4" size={540} opacity={0.14} blur={180} />
        <GradientOrb color="teal" className="-left-32 bottom-8" size={380} opacity={0.12} blur={160} />
        <div className="absolute inset-0 dark-grid opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(91,61,245,0.2),transparent_30%),radial-gradient(circle_at_86%_24%,rgba(32,214,199,0.14),transparent_30%),linear-gradient(180deg,rgba(23,19,38,0.88)_0%,rgba(23,19,38,0.97)_78%,#171326_100%)]" />

        <div className="section-container relative z-10 grid gap-16 lg:grid-cols-[0.95fr_0.82fr] lg:items-center xl:gap-24">
          <div className="max-w-2xl">
            <SectionLabel dark>Product · Freight Operations</SectionLabel>
            <h1 className="mt-7 max-w-3xl text-white">
              Freight reconciliation, without spreadsheet work.
            </h1>
            <p className="mt-6 max-w-xl text-[18px] leading-8 !text-white/70">
              CargoMatiq extracts invoice data, matches it against internal records, and flags only the exceptions your team needs to review.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <Button href="#request-access" variant="white">Request access</Button>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white/76 transition hover:text-white"
              >
                See how it works <Arrow />
              </a>
            </div>
          </div>

          <div className="cargo-hero-visual relative">
            <div className="absolute -inset-6 rounded-full bg-teal/10 opacity-70 blur-3xl" />
            {/* Replace with actual CargoMatiq dashboard screenshot */}
            <ScreenshotFrame
              hero
              src={`${screenshotRoot}/cm-dashboard.jpeg`}
              title="CargoMatiq reconciliation dashboard"
              description="Product screenshot placeholder"
              imageWidth={1600}
              imageHeight={886}
            />
          </div>
        </div>
      </section>

      <section className="section-shell cargo-stack-section light-ambient-section light-ambient-section-a bg-light-surface">
        <div className="section-container relative z-10">
          <ScrollStack
            className="cargo-capability-stack"
            itemDistance={112}
            itemScale={0.018}
            itemStackDistance={0}
            stackPosition="18%"
            scaleEndPosition="10%"
            baseScale={0.9}
            blurAmount={0}
            useWindowScroll
            header={
              <div className="cargo-stack-intro">
                <SectionLabel>{capabilities.label}</SectionLabel>
                <h2>{capabilities.title}</h2>
                <p className="mt-5 max-w-2xl text-[17px]">
                  {capabilities.description}
                </p>
              </div>
            }
          >
            {capabilities.items.map((item, index) => (
              <ScrollStackItem key={item.title} itemClassName="cargo-capability-card">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="cargo-card-index font-mono text-[11px] uppercase tracking-[0.16em]">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-3 text-[clamp(26px,2.8vw,38px)] leading-tight">{item.title}</h3>
                  </div>
                  <div className="cargo-card-orbit" />
                </div>
                <div className="cargo-card-body grid gap-5 md:grid-cols-[1fr_0.72fr] md:items-start">
                  <p className="max-w-2xl text-[16px] leading-7">{item.text}</p>
                  <div className="cargo-card-detail-panel">
                    {item.details.map((detail) => (
                      <div key={detail} className="cargo-card-detail-row">
                        <span />
                        <p>{detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>
      </section>

      <section id="how-it-works" className="section-shell light-ambient-section light-ambient-section-a bg-light-surface">
        <div className="section-container relative z-10">
          <div className="max-w-3xl">
            <SectionLabel>HOW IT WORKS</SectionLabel>
            <h2>From vendor statement to exception-ready report.</h2>
          </div>
          <div className="cargo-process-panel mt-12">
            <div className="cargo-process-grid">
              {workflowSteps.map(({ title, text, label, Icon }, index) => (
                <div key={title} className="cargo-process-card">
                  <div className="flex items-start justify-between gap-4">
                    <div className="cargo-process-icon">
                      <Icon aria-hidden="true" />
                    </div>
                    <span className="cargo-process-badge">{label}</span>
                  </div>
                  <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.16em] text-brand/70">
                    Step {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-[22px] leading-tight">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-ink-secondary">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell light-ambient-section light-ambient-section-b bg-light-surface">
        <div className="section-container relative z-10">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1fr] lg:items-end">
            <div>
              <SectionLabel>SNEAK PEEK</SectionLabel>
              <h2>A quick look at CargoMatiq.</h2>
            </div>
            <p className="max-w-2xl text-[17px] lg:justify-self-end">
              A few product screens from the reconciliation workflow.
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {productViews.map((view) => (
              <div key={view.title} className="relative">
                <div className="absolute inset-x-8 top-10 h-32 rounded-full bg-brand/10 blur-3xl" />
                {/* Replace with actual CargoMatiq screenshot */}
                <ScreenshotFrame
                  title={view.title}
                  description={view.text}
                  src={view.src}
                  imageWidth={view.imageWidth}
                  imageHeight={view.imageHeight}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="request-access" className="section-shell relative overflow-hidden bg-[#171326]">
        <GradientOrb className="-right-32 -top-32" size={520} opacity={0.22} blur={160} />
        <GradientOrb color="teal" className="-left-24 bottom-0" size={360} opacity={0.18} blur={140} />
        <div className="absolute inset-0 dark-grid opacity-60" />
        <div className="section-container relative grid gap-12 lg:grid-cols-[0.9fr_0.82fr] lg:items-center">
          <div className="max-w-2xl py-4 text-white">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] !text-white/70">REQUEST ACCESS</p>
            <h2 className="mt-5 text-white">Want to see CargoMatiq on your workflow?</h2>
            <p className="mt-5 max-w-xl !text-white/72">
              Share how reconciliation works today — vendor volume, file formats, systems used, and where the process slows down.
            </p>
          </div>
          <CalendlyCtaCard
            title="Book a CargoMatiq walkthrough"
            description="We will review your reconciliation process and show where CargoMatiq can reduce manual checking, matching, and exception handling."
            points={["Vendor statement review", "Reconciliation fit check", "Automation next step"]}
            buttonLabel="Request access"
          />
        </div>
      </section>
    </main>
  );
}
