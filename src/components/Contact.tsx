import React from 'react';
import { motion } from 'motion/react';
import { Mail, Instagram, ArrowUpRight, Send } from 'lucide-react';
import { handleSpotlight } from '../lib/utils';
import { MagneticButton } from './Effects';

export function Contact() {
  const handleLinkOpen = (e: React.MouseEvent) => {
    e.preventDefault();
    // Simulate link click or open a mailto overlay
    console.log("Contact action clicked");
  }

  return (
    <section id="contact" className="py-12 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Copy */}
        <motion.div
           initial={{ opacity: 0, x: -40 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-sans font-extrabold mb-6 leading-[0.9] tracking-tight">
            Let's Make <br/>
            <span className="text-orange-500 italic">Your Next Video</span> <br/>
            Go Viral.
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-md font-light leading-relaxed">
            Stop losing views to bad thumbnails. Send me a message and let's craft a visual strategy that demands clicks.
          </p>

          <div className="space-y-6">
            <a href="mailto:dharmikvariya006@gmail.com?subject=Thumbnail%20Services%20Inquiry&body=Hi%20Dharmik%2C%0A%0AI'm%20interested%20in%20getting%20custom%20thumbnails%20for%20my%20YouTube%20channel.%0A%0AChannel%20Link%3A%20%5BInsert%20Link%20Here%5D%0AWhat%20kind%20of%20thumbnails%20are%20you%20looking%20for%3A%20%5BBrief%20description%5D%0A%0ALet%20me%20know%20your%20rates%20and%20availability!%0A%0AThanks!" target="_blank" rel="noopener noreferrer" onMouseMove={handleSpotlight} className="spotlight-card group flex items-center space-x-4 p-4 rounded-xl glass-card hover:bg-white/5 transition-all duration-300 w-full md:w-3/4">
               <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                  <Mail className="text-orange-400" size={20} />
               </div>
               <div className="flex-1 pointer-events-none">
                 <p className="text-sm text-gray-400">Email Me</p>
                 <p className="text-white font-medium group-hover:text-orange-300 transition-colors">dharmikvariya006@gmail.com</p>
               </div>
               <ArrowUpRight size={20} className="text-gray-500 group-hover:text-white transition-colors z-10" />
            </a>

            <a href="https://instagram.com/dharmik_variya_99" target="_blank" rel="noopener noreferrer" onMouseMove={handleSpotlight} className="spotlight-card group flex items-center space-x-4 p-4 rounded-xl glass-card hover:bg-white/5 transition-all duration-300 w-full md:w-3/4">
               <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors z-10">
                  <Instagram className="text-orange-400" size={20} />
               </div>
               <div className="flex-1 pointer-events-none">
                 <p className="text-sm text-gray-400">DM on Instagram</p>
                 <p className="text-white font-medium group-hover:text-orange-300 transition-colors">@dharmik_variya_99</p>
               </div>
               <ArrowUpRight size={20} className="text-gray-500 group-hover:text-white transition-colors z-10" />
            </a>
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div
           initial={{ opacity: 0, x: 40 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.2 }}
           onMouseMove={handleSpotlight}
           className="spotlight-card glass-card p-6 md:p-10 rounded-2xl border border-white/10 relative overflow-hidden"
        >
          {/* Soft glow in corner of form */}
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px]" />
          
          <form className="relative z-10 space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Message sent!'); }}>
             <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 ml-1">Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all"
                  required
                />
             </div>
             <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 ml-1">Email</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all"
                  required
                />
             </div>
             <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 ml-1">Message</label>
                <textarea 
                  placeholder="Tell me about your channel and goals..."
                  rows={4}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all resize-none"
                  required
                ></textarea>
             </div>
             
             <MagneticButton
               type="submit"
               className="w-full group relative inline-flex items-center justify-center px-8 py-4 font-medium text-white bg-orange-600 rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-orange-500/20"
             >
               <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black" />
               <span className="relative flex items-center space-x-2">
                 <span>Send Message</span>
                 <Send size={18} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
               </span>
             </MagneticButton>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
