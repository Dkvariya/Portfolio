import { motion } from 'motion/react';

export function BackgroundElements() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-[#05050A]">
      {/* Dark Crimson Orb */}
      <motion.div 
        className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] sm:w-[50vw] sm:h-[50vw] rounded-full mix-blend-screen"
        style={{
          background: 'rgba(153, 27, 27, 0.3)', // dark crimson
          filter: 'blur(120px)',
        }}
        animate={{
          x: [0, 80, 0],
          y: [0, 50, 0],
          scale: [1, 1.1, 1],
          opacity: [0.6, 0.8, 0.6],
        }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
      />
      
      {/* Navy Blue Orb */}
      <motion.div 
        className="absolute top-[20%] right-[-20%] w-[80vw] h-[80vw] sm:w-[60vw] sm:h-[60vw] rounded-full mix-blend-screen"
        style={{
          background: 'rgba(30, 58, 138, 0.25)', // navy blue
          filter: 'blur(140px)',
        }}
        animate={{
          x: [0, -60, 0],
          y: [0, 80, 0],
          scale: [1, 1.15, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{ repeat: Infinity, duration: 18, ease: "easeInOut", delay: 2 }}
      />

      {/* Deep Purple Orb */}
      <motion.div 
        className="absolute bottom-[-20%] left-[10%] w-[90vw] h-[90vw] sm:w-[70vw] sm:h-[70vw] rounded-full mix-blend-screen"
        style={{
          background: 'rgba(88, 28, 135, 0.3)', // deep purple
          filter: 'blur(150px)',
        }}
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -60, 0],
          scale: [1, 1.05, 1],
          opacity: [0.6, 0.9, 0.6],
        }}
        transition={{ repeat: Infinity, duration: 22, ease: "easeInOut", delay: 1 }}
      />
      
      {/* Overlay noise texture for extra cinematic feel */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
