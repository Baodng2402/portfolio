import { gsap, ScrollTrigger } from "@/lib/gsap/register";

type BatchConfig = {
  selector: string;
  root: HTMLElement;
  y?: number;
  x?: number;
  stagger?: number;
  duration?: number;
  start?: string;
};

function createBatch(
  { selector, root, y = 28, x = 0, stagger = 0.1, duration = 0.55, start = "top 88%" }: BatchConfig,
  reduceMotion: boolean,
) {
  const elements = root.querySelectorAll<HTMLElement>(selector);
  if (!elements.length) return;

  if (reduceMotion) {
    gsap.set(elements, { autoAlpha: 1, y: 0, x: 0 });
    return;
  }

  gsap.set(elements, { autoAlpha: 0, y, x });

  ScrollTrigger.batch(elements, {
    start,
    once: true,
    onEnter: (batch) => {
      gsap.to(batch, {
        autoAlpha: 1,
        y: 0,
        x: 0,
        stagger,
        duration,
        ease: "power3.out",
        overwrite: true,
      });
    },
  });
}

export function initScrollReveals(scope: HTMLElement | null, reduceMotion: boolean) {
  if (!scope) return;

  createBatch(
    { selector: ".reveal-section-title", root: scope, y: 20, stagger: 0, duration: 0.6 },
    reduceMotion,
  );
  createBatch(
    { selector: ".reveal-section-desc", root: scope, y: 16, stagger: 0, duration: 0.5, start: "top 90%" },
    reduceMotion,
  );
  createBatch(
    { selector: ".work-card", root: scope, y: 32, stagger: 0.14, duration: 0.6 },
    reduceMotion,
  );
  createBatch(
    { selector: ".skill-group", root: scope, y: 28, stagger: 0.1, duration: 0.55 },
    reduceMotion,
  );
  createBatch(
    { selector: ".tech-icon", root: scope, y: 18, stagger: 0.04, duration: 0.45, start: "top 92%" },
    reduceMotion,
  );
  createBatch(
    { selector: ".project-card", root: scope, y: 36, stagger: 0.12, duration: 0.6 },
    reduceMotion,
  );
  createBatch(
    { selector: ".contact-reveal", root: scope, y: 20, stagger: 0.1, duration: 0.5 },
    reduceMotion,
  );
}

export function refreshScrollTriggers() {
  ScrollTrigger.refresh();
}
