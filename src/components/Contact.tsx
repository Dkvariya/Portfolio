import React from 'react';
import { motion } from 'motion/react';
import { Mail, Instagram, ArrowUpRight, Briefcase } from 'lucide-react';
import { handleSpotlight } from '../lib/utils';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 md:px-8 max-w-4xl mx-auto relative z-10">
      <div className="flex flex-col items-center text-center">
        
        {/* Copy */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="w-full"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-sans font-extrabold mb-6 leading-[0.9] tracking-tight">
            Let's Make <br/>
            <span className="text-orange-500 italic">Your Next Video</span> <br/>
            Go Viral.
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Stop losing views to bad thumbnails. Send me a message and let's craft a visual strategy that demands clicks.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full max-w-3xl mx-auto inset-x-0">
            <a href="mailto:dharmikvariya006@gmail.com?subject=Thumbnail%20Services%20Inquiry&body=Hi%20Dharmik%2C%0A%0AI'm%20interested%20in%20getting%20custom%20thumbnails%20for%20my%20YouTube%20channel.%0A%0AChannel%20Link%3A%20%5BInsert%20Link%20Here%5D%0AWhat%20kind%20of%20thumbnails%20are%20you%20looking%20for%3A%20%5BBrief%20description%5D%0A%0ALet%20me%20know%20your%20rates%20and%20availability!%0A%0AThanks!" target="_blank" rel="noopener noreferrer" onMouseMove={handleSpotlight} className="spotlight-card group flex items-center space-x-4 p-4 rounded-xl glass-card hover:bg-white/5 transition-all duration-300 relative border border-white/5 w-full sm:w-auto pr-10">
               <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors shrink-0">
                  <Mail className="text-orange-400" size={18} />
               </div>
               <div className="pointer-events-none text-left">
                 <p className="text-[11px] text-gray-400 uppercase tracking-wider mb-0.5">Email Me</p>
                 <p className="text-white font-medium group-hover:text-orange-300 transition-colors text-sm">dharmikvariya006@gmail.com</p>
               </div>
               <ArrowUpRight size={16} className="absolute top-4 right-4 text-gray-600 group-hover:text-white transition-colors" />
            </a>

            <a href="https://instagram.com/dharmik_variya_99" target="_blank" rel="noopener noreferrer" onMouseMove={handleSpotlight} className="spotlight-card group flex items-center space-x-4 p-4 rounded-xl glass-card hover:bg-white/5 transition-all duration-300 relative border border-white/5 w-full sm:w-auto pr-10">
               <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors shrink-0">
                  <Instagram className="text-orange-400" size={18} />
               </div>
               <div className="pointer-events-none text-left">
                 <p className="text-[11px] text-gray-400 uppercase tracking-wider mb-0.5">Instagram</p>
                 <p className="text-white font-medium group-hover:text-orange-300 transition-colors text-sm">@dharmik_variya_99</p>
               </div>
               <ArrowUpRight size={16} className="absolute top-4 right-4 text-gray-600 group-hover:text-white transition-colors" />
            </a>

            <a href="https://www.upwork.com/freelancers/~014380bfeb14c95dd9" target="_blank" rel="noopener noreferrer" onMouseMove={handleSpotlight} className="spotlight-card group flex items-center space-x-4 p-4 rounded-xl glass-card hover:bg-white/5 transition-all duration-300 relative border border-white/5 w-full sm:w-auto pr-10">
               <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors shrink-0">
                  <Briefcase className="text-orange-400" size={18} />
               </div>
               <div className="pointer-events-none text-left">
                 <p className="text-[11px] text-gray-400 uppercase tracking-wider mb-0.5">Upwork</p>
                 <p className="text-white font-medium group-hover:text-orange-300 transition-colors text-sm">Hire Me</p>
               </div>
               <ArrowUpRight size={16} className="absolute top-4 right-4 text-gray-600 group-hover:text-white transition-colors" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
