"use client";

import { Children, useCallback, useEffect, useLayoutEffect, useRef, type CSSProperties, type ReactNode } from "react";

export function ScrollStackItem({
  children,
  itemClassName = "",
}: {
  children: ReactNode;
  itemClassName?: string;
}) {
  return <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export default function ScrollStack({
  children,
  header,
  className = "",
  itemDistance = 72,
  itemScale = 0.035,
  itemStackDistance = 18,
  baseScale = 0.9,
  blurAmount = 0,
  onStackComplete,
}: {
  children: ReactNode;
  header?: ReactNode;
  className?: string;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string;
  scaleEndPosition?: string;
  baseScale?: number;
  scaleDuration?: number;
  rotationAmount?: number;
  blurAmount?: number;
  useWindowScroll?: boolean;
  onStackComplete?: () => void;
}) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const completedRef = useRef(false);
  const frameRef = useRef<number | null>(null);
  const lastStylesRef = useRef<string[]>([]);
  const currentProgressRef = useRef(0);
  const hasProgressRef = useRef(false);
  const cardCount = Children.count(children);

  const updateStack = useCallback(() => {
    const section = sectionRef.current;
    if (!section || cardCount === 0) return;

    const rect = section.getBoundingClientRect();
    const scrollable = Math.max(1, section.offsetHeight - window.innerHeight);
    const targetProgress = clamp(-rect.top / scrollable, 0, 1);
    const currentProgress = hasProgressRef.current
      ? currentProgressRef.current + (targetProgress - currentProgressRef.current) * 0.24
      : targetProgress;
    const progress = Math.abs(targetProgress - currentProgress) < 0.001
      ? targetProgress
      : currentProgress;

    hasProgressRef.current = true;
    currentProgressRef.current = progress;

    const activeIndex = progress * Math.max(1, cardCount - 1);

    cardsRef.current.forEach((card, index) => {
      const distanceFromActive = index - activeIndex;
      const isUpcoming = distanceFromActive > 0;
      const stackedDepth = Math.max(0, -distanceFromActive);
      const translateY = isUpcoming
        ? distanceFromActive * itemDistance * 5.2
        : stackedDepth * itemStackDistance;
      const scale = isUpcoming
        ? 1
        : Math.max(baseScale, 1 - stackedDepth * itemScale);
      const blur = blurAmount ? stackedDepth * blurAmount : 0;
      const opacity = distanceFromActive > 1.25 ? 0 : 1;

      const nextStyle = `${translateY.toFixed(2)}|${scale.toFixed(4)}|${blur.toFixed(2)}|${opacity}`;

      if (lastStylesRef.current[index] !== nextStyle) {
        lastStylesRef.current[index] = nextStyle;
        card.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`;
        card.style.filter = blur > 0 ? `blur(${blur}px)` : "";
        card.style.opacity = `${opacity}`;
      }

      if (card.style.zIndex !== `${index + 1}`) {
        card.style.zIndex = `${index + 1}`;
      }
    });

    const completed = progress >= 0.995;
    if (completed && !completedRef.current) {
      completedRef.current = true;
      onStackComplete?.();
    } else if (!completed) {
      completedRef.current = false;
    }

    if (Math.abs(targetProgress - progress) > 0.001 && frameRef.current === null) {
      frameRef.current = window.requestAnimationFrame(() => {
        frameRef.current = null;
        updateStack();
      });
    }
  }, [baseScale, blurAmount, cardCount, itemDistance, itemScale, itemStackDistance, onStackComplete]);

  const requestStackUpdate = useCallback(() => {
    if (frameRef.current !== null) return;

    frameRef.current = window.requestAnimationFrame(() => {
      frameRef.current = null;
      updateStack();
    });
  }, [updateStack]);

  useLayoutEffect(() => {
    lastStylesRef.current = [];
    hasProgressRef.current = false;
    updateStack();
  }, [updateStack]);

  useEffect(() => {
    requestStackUpdate();
    window.addEventListener("scroll", requestStackUpdate, { passive: true });
    window.addEventListener("resize", requestStackUpdate);

    const section = sectionRef.current;
    const resizeObserver = section ? new ResizeObserver(requestStackUpdate) : null;
    if (section && resizeObserver) {
      resizeObserver.observe(section);
    }

    document.fonts?.ready.then(requestStackUpdate).catch(() => {});

    return () => {
      window.removeEventListener("scroll", requestStackUpdate);
      window.removeEventListener("resize", requestStackUpdate);
      resizeObserver?.disconnect();

      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, [requestStackUpdate]);

  return (
    <div
      ref={sectionRef}
      className={`scroll-stack-scroller ${className}`.trim()}
      style={{ "--scroll-stack-count": cardCount } as CSSProperties}
    >
      <div className="scroll-stack-sticky">
        {header ? <div className="scroll-stack-header">{header}</div> : null}
        <div className="scroll-stack-inner">
          {Children.map(children, (child, index) => (
            <div
              ref={(node) => {
                if (node) cardsRef.current[index] = node;
              }}
              className="scroll-stack-card-slot"
            >
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
