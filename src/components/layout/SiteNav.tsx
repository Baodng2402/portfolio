import { useEffect, useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap/register";
import { navItems } from "@/data/portfolio";
import logo from "@/assets/BenLogo.png";

const SiteNav = () => {
  const [activeHref, setActiveHref] = useState<string>(navItems[0].href);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLSpanElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  const updateIndicator = (animate = true) => {
    const indicator = indicatorRef.current;
    const link = linkRefs.current[activeHref];
    if (!indicator || !link) return;

    const next = { x: link.offsetLeft, width: link.offsetWidth };

    if (animate) {
      gsap.to(indicator, {
        ...next,
        duration: 0.35,
        ease: "power3.out",
      });
      return;
    }

    gsap.set(indicator, next);
  };

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (id) setActiveHref(`#${id}`);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-12% 0px -55% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    updateIndicator(false);

    const onResize = () => updateIndicator(false);
    window.addEventListener("resize", onResize);

    document.fonts?.ready.then(onResize).catch(() => undefined);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [activeHref]);

  useGSAP(
    () => {
      updateIndicator(true);
    },
    { dependencies: [activeHref], scope: navRef },
  );

  const hasOpenedMenu = useRef(false);

  useGSAP(
    () => {
      const menu = mobileMenuRef.current;
      if (!menu) return;

      if (mobileOpen) {
        hasOpenedMenu.current = true;
        gsap.killTweensOf(menu);
        menu.classList.remove("hidden");
        gsap.fromTo(
          menu,
          { opacity: 0, y: -8 },
          { opacity: 1, y: 0, duration: 0.25, ease: "power2.out" },
        );
        return;
      }

      if (!hasOpenedMenu.current) return;

      gsap.killTweensOf(menu);
      gsap.to(menu, {
        opacity: 0,
        y: -8,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => {
          menu.classList.add("hidden");
          gsap.set(menu, { clearProps: "opacity,y" });
        },
      });
    },
    { dependencies: [mobileOpen], scope: navRef },
  );

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (!href.startsWith("#")) return;
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      ref={navRef}
      data-hero="nav"
      className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg)]/85 pt-[env(safe-area-inset-top)] backdrop-blur-xl"
    >
      <div className="page-px mx-auto flex h-14 max-w-6xl items-center justify-between sm:h-16">
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#about");
          }}
          className="flex items-center gap-3 no-underline"
          aria-label="Home"
        >
          <span className="flex h-9 w-9 shrink-0 overflow-hidden rounded-full bg-black ring-1 ring-[var(--color-border)] sm:h-10 sm:w-10">
            <img
              src={logo}
              alt="BenDang logo"
              className="h-full w-full object-contain"
            />
          </span>
          <span className="font-display text-sm font-bold tracking-tight text-[var(--color-text)] sm:text-base">
            BenDang<span className="text-[var(--color-accent)]">.</span>
          </span>
        </a>

        <nav className="relative hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          <span
            ref={indicatorRef}
            className="pointer-events-none absolute bottom-1 left-0 h-0.5 rounded-full bg-[var(--color-accent)]"
            style={{ width: 0 }}
            aria-hidden
          />
          {navItems.map((item) => {
            const isActive = activeHref === item.href;
            return (
              <a
                key={item.href}
                ref={(el) => {
                  linkRefs.current[item.href] = el;
                }}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 no-underline ${
                  isActive
                    ? "text-[var(--color-accent)]"
                    : "text-[var(--color-muted)] hover:text-[var(--color-text)]"
                }`}
              >
                {item.label}
              </a>
            );
          })}
          <a
            href="/DangNguyenGiaBao_FullStack_Developer.pdf"
            className="btn-primary ml-3 text-sm"
          >
            Resume
          </a>
        </nav>

        <button
          type="button"
          className="nav-menu-toggle"
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? "Close" : "Menu"}
        </button>
      </div>

      <div
        ref={mobileMenuRef}
        className="absolute top-full right-0 left-0 z-40 hidden max-h-[calc(100dvh-3.5rem)] overflow-y-auto border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)] shadow-[var(--shadow-md)] lg:hidden sm:max-h-[calc(100dvh-4rem)]"
      >
        <div className="page-px mx-auto flex max-w-6xl flex-col gap-1 py-3 sm:py-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className="rounded-lg px-2 py-3 text-sm font-medium text-[var(--color-text)] no-underline hover:bg-[var(--color-surface)]"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/DangNguyenGiaBao_FullStack_Developer.pdf"
            className="btn-primary mt-2 text-center text-sm"
          >
            Download Resume
          </a>
        </div>
      </div>
    </header>
  );
};

export default SiteNav;
