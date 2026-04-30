import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';
import { handleSpotlight } from '../lib/utils';
import { useState } from 'react';
import { MagneticButton } from './Effects';

export function Hero() {
  const [hoveredBtn, setHoveredBtn] = useState<'portfolio' | 'hire' | null>(null);

  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative flex items-center justify-center pt-32 pb-12 px-4 md:px-8">
      <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center">
        
        {/* Subtle badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full text-xs font-semibold tracking-wider text-orange-400 uppercase"
        >
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
          <span>Available for projects</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1 
          className="font-sans font-extrabold text-5xl sm:text-7xl lg:text-[5.5rem] tracking-tight leading-[0.9] mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          Thumbnails <br/>
          That Make <br/>
          <span className="text-orange-500 italic">
            People Click.
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="max-w-md mx-auto text-lg text-gray-400 leading-relaxed mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        >
          High-converting YouTube thumbnails designed to boost CTR and explode your views. 2.5+ years of craft focused on psychology and aesthetics.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
        >
          {/* Primary CTA */}
          <MagneticButton
            onClick={scrollToPortfolio}
            onMouseMove={handleSpotlight}
            onMouseEnter={() => setHoveredBtn('portfolio')}
            onMouseLeave={() => setHoveredBtn(null)}
            className="spotlight-btn group relative inline-flex items-center justify-center px-8 py-4 font-bold text-black bg-white rounded-full transition-all duration-300 hover:bg-gray-100 hover:scale-[1.03] active:scale-95 w-full sm:w-auto shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
          >
            <span className="relative flex items-center gap-2 pointer-events-none">
              <span>View Portfolio</span>
              <motion.span
                animate={{ x: hoveredBtn === 'portfolio' ? 5 : 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <ArrowRight size={18} />
              </motion.span>
            </span>
          </MagneticButton>

          {/* Secondary CTA */}
          <MagneticButton
            onClick={scrollToContact}
            onMouseMove={handleSpotlight}
            onMouseEnter={() => setHoveredBtn('hire')}
            onMouseLeave={() => setHoveredBtn(null)}
            className="spotlight-card group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-transparent border border-white/20 rounded-full transition-all duration-300 hover:bg-white/5 hover:scale-[1.03] active:scale-95 backdrop-blur-sm w-full sm:w-auto overflow-hidden"
          >
             <span className="relative flex items-center gap-2 pointer-events-none z-20">
              <Play size={18} fill="currentColor" className="text-gray-300 group-hover:text-white transition-colors" />
              <span>Hire Me</span>
            </span>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
