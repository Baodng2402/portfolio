import { useEffect, useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap/register";
import { navItems } from "@/data/portfolio";
import logo from "@/assets/BenLogo.png";

const SiteNav = () => {
  const [activeHref, setActiveHref] = useState<string>(navItems[0].href);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

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

  useGSAP(
    () => {
      const menu = mobileMenuRef.current;
      if (!menu) return;

      if (mobileOpen) {
        gsap.set(menu, { visibility: "visible" });
        gsap.fromTo(
          menu,
          { opacity: 0, y: -8 },
          { opacity: 1, y: 0, duration: 0.25, ease: "power2.out" },
        );
      } else {
        gsap.to(menu, {
          opacity: 0,
          y: -8,
          duration: 0.2,
          ease: "power2.in",
          onComplete: () => {
            gsap.set(menu, { visibility: "hidden" });
          },
        });
      }
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
      className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg)]/85 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#about");
          }}
          className="flex items-center gap-3 no-underline"
          aria-label="Home"
        >
          <img
            src={logo}
            alt="Bao logo"
            className="h-9 w-9 rounded-full object-cover ring-1 ring-[var(--color-border)]"
          />
          <span className="font-display text-base font-bold tracking-tight text-[var(--color-text)]">
            BenDang<span className="text-[var(--color-accent)]">.</span>
          </span>
        </a>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          {navItems.map((item) => {
            const isActive = activeHref === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 no-underline ${
                  isActive
                    ? "bg-[var(--color-surface)] text-[var(--color-accent)]"
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
        className="invisible border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)] opacity-0 lg:hidden"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className="rounded-lg px-2 py-2.5 text-sm font-medium text-[var(--color-text)] no-underline hover:bg-[var(--color-surface)]"
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
