import { motion } from 'motion/react';
import { handleSpotlight } from '../lib/utils';

const REVIEWS = [
  {
    name: "Alex Becker",
    role: "Finance Creator (1.2M Subs)",
    content: "Dharmik completely transformed my channel. My CTR jumped from 4% to 11% in literally a week. Worth every penny.",
    avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100&h=100&fit=crop"
  },
  {
    name: "Sarah Chen",
    role: "Tech Documentary",
    content: "The level of detail and understanding of human psychology in these designs is insane. Hooked 500k views on my last video.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
  },
  {
    name: "Mark V.",
    role: "Gaming Channel",
    content: "Fast turnaround and exactly the high-end gaming aesthetic I was looking for. The glow effects he does are top tier.",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop"
  }
];

export function Testimonials() {
  return (
    <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto relative z-10 overflow-hidden">
      <div className="text-center mb-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-4xl md:text-5xl lg:text-6xl font-sans font-extrabold mb-4 tracking-tight"
        >
          Client <span className="text-orange-500 italic">Wins</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {REVIEWS.map((review, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            onMouseMove={handleSpotlight}
            className="spotlight-card glass-card rounded-2xl p-8 flex flex-col relative group hover:border-orange-500/20 transition-colors duration-500"
          >
             {/* Subtle quote mark */}
             <div className="absolute top-6 right-6 text-6xl font-serif text-white/5 group-hover:text-orange-500/10 transition-colors duration-500 leading-none">
              "
             </div>
             
             <p className="text-slate-300 relative z-10 mb-8 italic flex-grow">
               "{review.content}"
             </p>
             
             <div className="flex items-center space-x-4 mt-auto">
               <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 ring-2 ring-orange-500/0 group-hover:ring-orange-500/30 transition-all duration-500">
                 <img src={review.avatar} alt={review.name} className="w-full h-full object-cover" />
               </div>
               <div>
                 <h4 className="text-white font-medium">{review.name}</h4>
                 <p className="text-slate-500 text-sm">{review.role}</p>
               </div>
             </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
