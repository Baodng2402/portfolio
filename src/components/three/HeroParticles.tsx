import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const ACCENT = new THREE.Color("#38bdf8");
const ACCENT_SOFT = new THREE.Color("#7dd3fc");
const DEEP = new THREE.Color("#1e3a5f");

interface FieldData {
  positions: Float32Array;
  colors: Float32Array;
}

// Kept out of render so the impure Math.random calls run only when invoked.
function buildField(count: number): FieldData {
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const palette = [ACCENT, ACCENT_SOFT, DEEP];

  for (let i = 0; i < count; i += 1) {
    // Distribute in a wide, shallow slab so it reads as depth behind the hero
    const radius = 4 + Math.random() * 8;
    const theta = Math.random() * Math.PI * 2;
    const y = (Math.random() - 0.5) * 9;

    positions[i * 3] = Math.cos(theta) * radius;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 6 - 2;

    const color = palette[Math.floor(Math.random() * palette.length)];
    colors[i * 3] = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;
  }

  return { positions, colors };
}

interface FieldProps {
  count: number;
}

function ParticleField({ count }: FieldProps) {
  const pointsRef = useRef<THREE.Points>(null);
  const [field, setField] = useState<FieldData | null>(null);

  useEffect(() => {
    setField(buildField(count));
  }, [count]);

  useFrame((state, delta) => {
    const points = pointsRef.current;
    if (!points) return;

    // Slow ambient drift
    points.rotation.y += delta * 0.02;

    // Mouse parallax — pointer is normalized [-1, 1]; ease toward target
    const targetX = state.pointer.y * 0.12;
    points.rotation.x += (targetX - points.rotation.x) * 0.05;
    points.position.x += (state.pointer.x * 0.6 - points.position.x) * 0.03;
    points.position.y += (state.pointer.y * 0.4 - points.position.y) * 0.03;
  });

  if (!field) return null;

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[field.positions, 3]}
        />
        <bufferAttribute attach="attributes-color" args={[field.colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        vertexColors
        size={0.06}
        sizeAttenuation
        transparent
        opacity={0.7}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

interface HeroParticlesProps {
  className?: string;
  count?: number;
}

const HeroParticles = ({ className = "", count = 700 }: HeroParticlesProps) => {
  return (
    <Canvas
      className={className}
      camera={{ position: [0, 0, 8], fov: 60 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <ParticleField count={count} />
    </Canvas>
  );
};

export default HeroParticles;
