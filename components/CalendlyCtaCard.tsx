"use client";

type CalendlyCtaCardProps = {
  title: string;
  description: string;
  points: string[];
  buttonLabel: string;
};

const calendlyUrl = "https://calendly.com/matiqlabs/discovery-call";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

function loadCalendlyScript() {
  return new Promise<void>((resolve, reject) => {
    if (window.Calendly?.initPopupWidget) {
      resolve();
      return;
    }

    if (!document.querySelector('link[href="https://assets.calendly.com/assets/external/widget.css"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      document.head.appendChild(link);
    }

    const existingScript = document.querySelector<HTMLScriptElement>('script[src="https://assets.calendly.com/assets/external/widget.js"]');
    if (existingScript) {
      existingScript.addEventListener("load", () => resolve(), { once: true });
      existingScript.addEventListener("error", () => reject(), { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject();
    document.body.appendChild(script);
  });
}

export function CalendlyCtaCard({
  title,
  description,
  points,
  buttonLabel,
}: CalendlyCtaCardProps) {
  const openCalendly = async () => {
    try {
      await loadCalendlyScript();
      window.Calendly?.initPopupWidget({ url: calendlyUrl });
    } catch {
      window.open(calendlyUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="cta-booking-card">
      <div className="relative">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] !text-teal/90">30 minute call</p>
        <h3 className="mt-4 text-[clamp(26px,3vw,36px)] leading-tight !text-white">{title}</h3>
        <p className="mt-4 text-sm leading-7 !text-white/66">{description}</p>

        <div className="mt-7 grid gap-2.5">
          {points.map((point) => (
            <div key={point} className="cta-booking-point">
              <span />
              <p>{point}</p>
            </div>
          ))}
        </div>

        <button type="button" onClick={openCalendly} className="cta-booking-button">
          {buttonLabel}
        </button>
      </div>
    </div>
  );
}
