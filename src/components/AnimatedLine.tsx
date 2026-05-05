import { motion } from 'framer-motion';

interface AnimatedLineProps {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  delay: number;
  duration?: number;
}

const AnimatedLine = ({ x1, y1, x2, y2, delay, duration = 3 }: AnimatedLineProps) => {
  const dx = x2 - x1;
  const dy = y2 - y1;

  return (
    <svg
      style={{
        position: 'absolute',
        left: x1,
        top: y1,
        width: Math.abs(dx) + 20,
        height: Math.abs(dy) + 20,
        overflow: 'visible',
        pointerEvents: 'none',
      }}
    >
      <motion.line
        x1="0"
        y1="0"
        x2={dx}
        y2={dy}
        stroke="url(#lineGradient)"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ 
          pathLength: 1, 
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          pathLength: { duration: 0.7, delay, ease: [0.34, 1.56, 0.64, 1] },
          opacity: { duration, delay, repeat: Infinity, ease: 'easeInOut' },
        }}
        style={{ filter: 'drop-shadow(0 0 8px rgba(168, 85, 247, 0.6))' }}
      />
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2={dx > 0 ? '100%' : '0%'} y2={dy > 0 ? '100%' : '0%'}>
          <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default AnimatedLine;
