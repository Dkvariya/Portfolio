import { motion } from 'motion/react';
import { handleSpotlight } from '../lib/utils';

export function About() {
  return (
    <section className="py-12 px-4 md:px-8 max-w-4xl mx-auto relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        onMouseMove={handleSpotlight}
        className="spotlight-card glass-card rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center gap-10"
      >
        {/* Glow orb behind content */}
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-orange-500/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent mix-blend-overlay z-10" />
          {/* Using a placeholder for designer picture, representing Dharmik */}
          <img 
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=500&auto=format&fit=crop" 
            alt="Abstract Designer Avatar" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>

        <div className="flex-1 space-y-6">
          <h2 className="text-4xl md:text-5xl font-sans font-extrabold text-white">
            Hi, I'm <span className="text-orange-500">Dharmik</span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light">
            I’ve been designing thumbnails for over 3+ years. I focus on what actually works. clear visuals, strong ideas, and understanding what makes people click. No overcomplication, just thumbnails that perform
          </p>
          <div className="pt-4 flex flex-wrap gap-3 justify-center md:justify-start">
             {['Photoshop', 'Color Grading', '3D Elements', 'CTR Optimization'].map(skill => (
               <span key={skill} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-slate-300">
                 {skill}
               </span>
             ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
