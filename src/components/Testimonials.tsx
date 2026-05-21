import { motion } from 'motion/react';
import { handleSpotlight } from '../lib/utils';
import { Star } from 'lucide-react';

const REVIEWS = [
  {
    name: "Pablo Castilla",
    content: "Dharmik's work is very nice and aligned to our channel focus. Most importantly I really appreciate his effectiveness with quick responses and positive attitude!",
    avatar: "https://drive.google.com/thumbnail?id=1lOzMTlSIhObtQ_dGm9_8b-Xa0wD3mOvs&sz=w200",
    rating: 5
  },
  {
    name: "Maria Fleimisch",
    content: "It was great to work with Dharmik! He did a great job with thumbnails; is reliable, highly responsive and delivers on time. Will definitely want to work with him again. Thank you Dharmik and wishing you all the best.",
    avatar: "https://drive.google.com/thumbnail?id=1ZqdO9s5uE4DlzYJSVv7I92wuoWU3u2iE&sz=w200",
    rating: 5
  },
  {
    name: "Tobi Fayiga",
    content: "Dharmik use of thumbnail art was crucial for my channel's success. Even when given little background on the topic and text for engagement, he continually showed good judgement and execution. Would definitely recommend for anyone looking to improve their click through rate and returning watchers to their channel.",
    avatar: "https://drive.google.com/thumbnail?id=1fb7RTxqyyNU4ywPOSrPHqAVm2DrtlwSP&sz=w200",
    rating: 5
  },
  {
    name: "Adam Lach",
    content: "Clear with his communication, takes feedback on board and also provides it. Very experienced and is a fantastic editor.",
    avatar: "https://drive.google.com/thumbnail?id=1Qb-upgZBLcC5Q7MSfZ-0pZFa1ffNDhxM&sz=w200",
    rating: 5
  },
  {
    name: "Tin Dmitrovic",
    content: "Dharmik is one of the best thumbnail designers that I had a chance to work with, his designs are flawless and his creative process is just 10/10 every single time. With his skills, you can be sure that you will never get low CTR on your thumbnails on YouTube, highly recommend him for everything around graphic designs and thumbnail design!",
    avatar: "https://drive.google.com/thumbnail?id=1kLlpnJZjLzMectzVvStB_l-CpqifLrud&sz=w200",
    rating: 5
  }
];

export function Testimonials() {
  const marqueeReviews = [...REVIEWS, ...REVIEWS, ...REVIEWS, ...REVIEWS];

  return (
    <section className="py-12 px-4 md:px-0 mx-auto relative z-10 overflow-hidden w-full">
      <div className="text-center mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-4xl md:text-5xl lg:text-6xl font-sans font-extrabold mb-4 tracking-tight"
        >
          Client <span className="text-orange-500 italic">Wins</span>
        </motion.h2>
      </div>

      <div 
        className="w-full relative flex items-center overflow-hidden" 
        style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
      >
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          className="flex gap-6 w-max px-4"
        >
          {marqueeReviews.map((review, i) => (
            <div
              key={i}
              onMouseMove={handleSpotlight}
              className="spotlight-card glass-card rounded-2xl p-8 flex flex-col relative group hover:border-orange-500/20 transition-colors duration-500 w-[320px] md:w-[400px] shrink-0 whitespace-normal"
            >
             {/* Subtle quote mark */}
               <div className="absolute top-6 right-6 text-6xl font-serif text-white/5 group-hover:text-orange-500/10 transition-colors duration-500 leading-none">
                "
               </div>
               
               <div className="flex items-center gap-1 mb-4">
                 {[...Array(review.rating)].map((_, index) => (
                   <Star key={index} fill="currentColor" className="text-orange-500 w-5 h-5" />
                 ))}
                 <span className="ml-2 font-bold text-white tracking-wide text-lg">{review.rating}.0</span>
               </div>

               <p className="text-slate-300 relative z-10 mb-8 italic flex-grow text-sm md:text-base">
                 "{review.content}"
               </p>
               
               <div className="flex items-center space-x-4 mt-auto">
                 <div className="w-12 h-12 shrink-0 rounded-full bg-orange-500/10 flex items-center justify-center overflow-hidden border border-white/10 ring-2 ring-orange-500/0 group-hover:ring-orange-500/30 transition-all duration-500">
                   {review.avatar ? (
                     <img src={review.avatar} alt={review.name} className="w-full h-full object-cover" />
                   ) : (
                     <span className="text-orange-400 font-bold text-lg uppercase">
                       {review.name.charAt(0)}{review.name.split(' ')[1] ? review.name.split(' ')[1].charAt(0) : ''}
                     </span>
                   )}
                 </div>
                 <div>
                   <h4 className="text-white font-medium">{review.name}</h4>
                 </div>
               </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
