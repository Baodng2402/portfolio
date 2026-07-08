import { Suspense, lazy, useEffect, useState } from "react";

const HeroParticles = lazy(() => import("@/components/three/HeroParticles"));

/**
 * Gate the 3D scene behind capability + preference checks so it never
 * hurts mobile performance, LCP, or accessibility.
 */
function useCanRender3D() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isSmall = window.matchMedia("(max-width: 768px)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;

    // Skip on mobile, touch-only, or reduced-motion — keep the CSS grid bg there
    if (reduceMotion || isSmall || coarse) return;

    // Bail if WebGL is unavailable
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl2") || canvas.getContext("webgl");
      if (!gl) return;
    } catch {
      return;
    }

    // Defer a tick so it doesn't compete with first paint
    const id = window.requestAnimationFrame(() => setEnabled(true));
    return () => window.cancelAnimationFrame(id);
  }, []);

  return enabled;
}

interface HeroCanvasProps {
  className?: string;
}

const HeroCanvas = ({ className = "" }: HeroCanvasProps) => {
  const canRender = useCanRender3D();

  if (!canRender) return null;

  return (
    <div
      data-hero="canvas"
      className={`pointer-events-none absolute inset-0 z-0 ${className}`}
      aria-hidden
    >
      <Suspense fallback={null}>
        <HeroParticles />
      </Suspense>
      {/* Fade the scene into the page bg at the edges */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_45%,transparent,var(--color-bg)_85%)]" />
    </div>
  );
};

export default HeroCanvas;
