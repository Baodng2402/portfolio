import { motion } from 'framer-motion';

// Stagger container variants
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
      duration: 0.6,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.34, 1.56, 0.64, 1], // cubic-bezier for smooth spring effect
    },
  },
};

export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

export const slideInVariants = {
  hidden: (direction: 'left' | 'right') => ({
    opacity: 0,
    x: direction === 'left' ? -100 : 100,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.34, 1.56, 0.64, 1],
    },
  },
};

export const scaleInVariants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.34, 1.56, 0.64, 1],
    },
  },
};

// Hover effects
export const hoverScaleVariants = {
  whileHover: {
    scale: 1.05,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
  whileTap: {
    scale: 0.95,
    transition: { duration: 0.1 },
  },
};

export const hoverGlowVariants = {
  whileHover: {
    boxShadow: '0 0 20px rgba(168, 85, 247, 0.5)',
    scale: 1.02,
    transition: { duration: 0.3 },
  },
};

// Scroll animations
export const scrollAnimationProps = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true, margin: '-100px' },
};
