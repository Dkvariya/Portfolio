import React, { useRef, useState, ReactNode, ButtonHTMLAttributes, MouseEvent } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'motion/react';

type MagneticButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  className?: string;
};

export function MagneticButton({ children, className, onClick, ...props }: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    // The "pull" strength
    x.set(distanceX * 0.15);
    y.set(distanceY * 0.15);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    props.onMouseLeave?.();
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={(e: any) => {
        handleMouseMove(e);
        props.onMouseMove?.(e);
      }}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={className}
      style={{ x: springX, y: springY }}
    >
      {children}
    </motion.button>
  );
}

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  onMouseMove?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export function TiltCard({ children, className, onClick, onMouseMove }: TiltCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300 };
  const rotateX = useSpring(useTransform(y, [0.5, -0.5], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [15, -15]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
    
    // Call external spotlight handler if provided
    onMouseMove?.(e);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={className}
    >
      <div style={{ transform: 'translateZ(20px)', transformStyle: 'preserve-3d' }}>
        {children}
      </div>
    </motion.div>
  );
}
