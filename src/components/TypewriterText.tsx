import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap/register";

interface TypewriterTextProps {
  phrases: string[];
  className?: string;
  /** Wait for hero fade-in before typing */
  startDelay?: number;
}

const TypewriterText = ({
  phrases,
  className = "",
  startDelay = 0.6,
}: TypewriterTextProps) => {
  const rootRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const textEl = textRef.current;
      const root = rootRef.current;
      if (!textEl || !phrases.length) return;

      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduceMotion) {
        textEl.textContent = phrases[0];
        return;
      }

      textEl.textContent = "";

      const typeSpeed = 0.042;
      const deleteSpeed = 0.026;
      const hold = 1.75;
      const gap = 0.3;

      const tl = gsap.timeline({ repeat: -1, delay: startDelay });

      phrases.forEach((phrase) => {
        const typeProxy = { len: 0 };
        tl.to(typeProxy, {
          len: phrase.length,
          duration: phrase.length * typeSpeed,
          ease: "none",
          onUpdate: () => {
            textEl.textContent = phrase.slice(0, Math.round(typeProxy.len));
          },
        });

        tl.to({}, { duration: hold });

        const deleteProxy = { len: phrase.length };
        tl.to(deleteProxy, {
          len: 0,
          duration: phrase.length * deleteSpeed,
          ease: "none",
          onUpdate: () => {
            textEl.textContent = phrase.slice(0, Math.round(deleteProxy.len));
          },
        });

        tl.to({}, { duration: gap });
      });

      const cursor = root?.querySelector<HTMLElement>("[data-typewriter-cursor]");
      if (cursor) {
        gsap.to(cursor, {
          opacity: 0,
          duration: 0.5,
          repeat: -1,
          yoyo: true,
          ease: "steps(1)",
        });
      }
    },
    { scope: rootRef, dependencies: [phrases, startDelay] },
  );

  return (
    <span ref={rootRef} className={`typewriter ${className}`}>
      <span ref={textRef} aria-live="polite" />
      <span data-typewriter-cursor className="typewriter-cursor" aria-hidden>
        |
      </span>
    </span>
  );
};

export default TypewriterText;
