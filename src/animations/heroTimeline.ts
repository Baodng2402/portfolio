import { gsap } from "@/lib/gsap/register";

export function playHeroTimeline(scope: HTMLElement | null, reduceMotion: boolean) {
  if (!scope) return;

  const targets = {
    nav: scope.querySelector("[data-hero='nav']"),
    avatar: scope.querySelector("[data-hero='avatar']"),
    name: scope.querySelector("[data-hero='name']"),
    nameWords: scope.querySelectorAll("[data-hero-word]"),
    role: scope.querySelector("[data-hero='role']"),
    bio: scope.querySelector("[data-hero='bio']"),
    ctas: scope.querySelectorAll("[data-hero='cta']"),
    featured: scope.querySelector("[data-hero='featured']"),
    terminal: scope.querySelector("[data-hero='terminal']"),
    terminalLines: scope.querySelectorAll("[data-terminal-line]"),
  };

  const all = [
    targets.nav,
    targets.avatar,
    targets.name,
    targets.role,
    targets.bio,
    targets.featured,
    targets.terminal,
    ...targets.nameWords,
    ...targets.ctas,
    ...targets.terminalLines,
  ];

  if (reduceMotion) {
    gsap.set(all, { opacity: 1, y: 0, x: 0, scale: 1 });
    return;
  }

  gsap.set([targets.nav, targets.role, targets.bio, targets.featured, targets.terminal], {
    opacity: 0,
    y: 24,
  });
  gsap.set(targets.nameWords, { opacity: 0, y: 28 });
  gsap.set(targets.avatar, { opacity: 0, y: 24, scale: 0.92 });
  gsap.set(targets.ctas, { opacity: 0, y: 16 });
  gsap.set(targets.terminalLines, { opacity: 0, x: -12 });

  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  tl.to(targets.nav, { opacity: 1, y: 0, duration: 0.5 }, 0)
    .to(targets.avatar, { opacity: 1, y: 0, scale: 1, duration: 0.55, ease: "back.out(1.4)" }, 0.08)
    .to(targets.role, { opacity: 1, y: 0, duration: 0.45 }, 0.16)
    .to(targets.nameWords, { opacity: 1, y: 0, duration: 0.5, stagger: 0.06 }, 0.24)
    .to(targets.bio, { opacity: 1, y: 0, duration: 0.5 }, 0.52)
    .to(targets.ctas, { opacity: 1, y: 0, duration: 0.45, stagger: 0.08 }, 0.62)
    .to(targets.terminal, { opacity: 1, y: 0, duration: 0.5 }, 0.72)
    .to(targets.terminalLines, { opacity: 1, x: 0, duration: 0.35, stagger: 0.07 }, 0.8)
    .to(targets.featured, { opacity: 1, y: 0, duration: 0.55 }, 0.9);

  return tl;
}
