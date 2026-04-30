import { motion, animate, useInView } from 'motion/react';
import { cn } from '../lib/utils';
import { useEffect, useState, useRef } from 'react';

function AnimatedStat({ 
  value, 
  suffix, 
  className 
}: { 
  value: number; 
  suffix: string; 
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate(v) {
          setDisplayValue(Math.round(v));
        }
      });
      return controls.stop;
    }
  }, [value, isInView]);

  return (
    <span ref={ref} className={className}>
      {displayValue}{suffix}
    </span>
  );
}

export function Stats() {
  const stats: Array<{num: number, suffix: string, label: string, color: string, italic?: boolean}> = [
    {
      num: 100,
      suffix: "M+",
      label: "Total Views Generated",
      color: "text-white"
    },
    {
      num: 50,
      suffix: "+",
      label: "Clients Worldwide",
      color: "text-white"
    },
    {
      num: 12,
      suffix: "%",
      label: "Average CTR Boost",
      color: "text-white"
    }
  ];

  return (
    <section className="py-10 relative z-10 w-full max-w-7xl mx-auto px-4 md:px-12">
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full">
        {/* Left side stats */}
        <div className="flex items-center justify-center gap-8 md:gap-16 w-full flex-wrap">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="flex flex-col items-center text-center relative"
            >
              <h3 className={cn(
                "text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-2 flex items-center justify-center",
                stat.color,
                stat.italic ? "italic tracking-tighter" : ""
              )}>
                <AnimatedStat value={stat.num} suffix={stat.suffix} />
              </h3>
              <p className="text-xs md:text-sm text-gray-400 uppercase tracking-widest mt-1 font-semibold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
