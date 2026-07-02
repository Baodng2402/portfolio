import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap/register";
import { playHeroTimeline } from "@/animations/heroTimeline";
import { initScrollReveals, refreshScrollTriggers } from "@/animations/scrollReveal";

function watchImages(scope: HTMLElement) {
  const images = scope.querySelectorAll("img");
  let pending = images.length;

  const done = () => refreshScrollTriggers();

  if (pending === 0) {
    done();
    return;
  }

  images.forEach((img) => {
    if (img.complete) {
      pending -= 1;
      if (pending === 0) done();
    } else {
      img.addEventListener("load", () => {
        pending -= 1;
        if (pending === 0) done();
      });
      img.addEventListener("error", () => {
        pending -= 1;
        if (pending === 0) done();
      });
    }
  });
}

export function usePageAnimations() {
  const pageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const scope = pageRef.current;
      if (!scope) return;

      const ctx = gsap.context(() => {
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        playHeroTimeline(scope, reduceMotion);
        initScrollReveals(scope, reduceMotion);

        document.fonts?.ready.then(() => refreshScrollTriggers()).catch(() => undefined);
        watchImages(scope);

        requestAnimationFrame(() => refreshScrollTriggers());
      }, scope);

      return () => ctx.revert();
    },
    { scope: pageRef },
  );

  return pageRef;
}
