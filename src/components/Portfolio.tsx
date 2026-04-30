import { motion, AnimatePresence } from 'motion/react';
import { Plus } from 'lucide-react';
import { THUMBNAILS, CATEGORIES } from '../lib/data';
import { useState } from 'react';
import { cn, handleSpotlight } from '../lib/utils';
import { TiltCard, MagneticButton } from './Effects';

interface PortfolioProps {
  onImageClick?: (url: string) => void;
}

export function Portfolio({ onImageClick }: PortfolioProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(8);

  const filtered = THUMBNAILS.filter(t => activeCategory === 'All' || t.category === activeCategory);
  const visibleThumbnails = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  return (
    <section id="portfolio" className="py-12 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-4xl md:text-5xl lg:text-6xl font-sans font-extrabold mb-4 tracking-tight"
        >
          Full <span className="text-orange-500 italic">Portfolio</span>
        </motion.h2>
      </div>

      {/* Filter Tabs */}
      <motion.div 
        className="flex flex-wrap items-center justify-center gap-2 mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {CATEGORIES.map(category => (
          <button
            key={category}
            onClick={() => {
              setActiveCategory(category);
              setVisibleCount(6); // Reset visible count on filter change
            }}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative overflow-hidden",
              activeCategory === category
                ? "text-white shadow-[0_0_15px_rgba(255,138,0,0.2)]"
                : "text-slate-400 hover:text-white bg-white/5 hover:bg-white/10"
            )}
          >
            {activeCategory === category && (
              <motion.div
                layoutId="portfolioActiveTab"
                className="absolute inset-0 bg-orange-600/80 rounded-full -z-10 border border-orange-400/50"
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              />
            )}
            <span className="relative z-10">{category}</span>
          </button>
        ))}
      </motion.div>

      {/* Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        style={{ perspective: '1000px' }}
      >
        <AnimatePresence mode="popLayout">
          {visibleThumbnails.map((thumb) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              key={thumb.id}
            >
              <TiltCard
                className="spotlight-card group relative rounded-xl overflow-hidden glass-card cursor-pointer border border-white/5 transition-shadow duration-300 hover:z-10 hover:shadow-2xl"
                onMouseMove={handleSpotlight}
                onClick={() => onImageClick?.(thumb.imageUrl)}
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
                  <img 
                    src={thumb.imageUrl} 
                    alt={thumb.title}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Load More */}
      {hasMore && (
        <motion.div 
          className="mt-16 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <MagneticButton
            onClick={() => setVisibleCount(p => p + 8)}
            className="flex items-center space-x-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            <div className="flex items-center space-x-2 pointer-events-none">
              <Plus size={18} />
              <span>Load More Work</span>
            </div>
          </MagneticButton>
        </motion.div>
      )}
    </section>
  );
}
