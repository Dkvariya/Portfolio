import { motion } from 'motion/react';
import { useScroll } from '../lib/data';

export function BackgroundElements() {
  const { scrollY } = useScroll();

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0 bg-[#020205]" />
      
      {/* Top right gradient */}
      <motion.div 
        className="absolute -top-24 -left-24 w-96 h-96 sm:w-[400px] sm:h-[400px] rounded-full"
        style={{
          background: 'rgba(234,88,12,0.1)',
          filter: 'blur(100px)',
        }}
        animate={{
          y: scrollY * -0.2,
          scale: [1, 1.05, 1],
        }}
        transition={{ scale: { repeat: Infinity, duration: 8, ease: "easeInOut" } }}
      />
      
      {/* Bottom left gradient */}
      <motion.div 
        className="absolute top-1/2 -right-24 w-80 h-80 sm:w-[500px] sm:h-[500px] rounded-full"
        style={{
          background: 'rgba(30,58,138,0.1)',
          filter: 'blur(100px)',
        }}
        animate={{
          y: scrollY * -0.1,
          scale: [1, 1.1, 1],
        }}
        transition={{ scale: { repeat: Infinity, duration: 10, ease: "easeInOut", delay: 1 } }}
      />

      {/* Floating Particles/Third Orb */}
      <motion.div 
        className="absolute bottom-0 left-1/4 w-[500px] h-[200px] rounded-full pointer-events-none"
        style={{
          background: 'rgba(249,115,22,0.05)',
          filter: 'blur(120px)',
        }}
        animate={{
          y: scrollY * -0.05,
          scale: [1, 1.02, 1],
        }}
        transition={{ scale: { repeat: Infinity, duration: 12, ease: "easeInOut", delay: 2 } }}
      />
    </div>
  );
}
