import { motion, useScroll, useTransform } from 'motion/react';
import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';
import { Menu, X } from 'lucide-react';

export function Navbar({ activeTab = 'Home', setActiveTab }: { activeTab: string, setActiveTab: (tab: string) => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navItems = ['Home', 'Portfolio', 'Contact'];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (item: string) => {
    setActiveTab(item);
    setIsMenuOpen(false);
    const element = document.getElementById(item.toLowerCase());
    if (element) {
      const offset = 80; // Approximate navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-40 flex justify-between items-center transition-all duration-300",
          isScrolled 
            ? "py-4 px-4 sm:px-8 lg:px-12 bg-[#050510]/80 backdrop-blur-xl border-b border-white/5 shadow-lg" 
            : "py-6 px-4 sm:px-8 lg:px-12 bg-transparent"
        )}
      >
        <div 
          onClick={() => handleNavClick('Home')}
          className="font-sans font-bold text-2xl tracking-tighter text-white cursor-pointer group whitespace-nowrap"
        >
          Dharmik <span className="text-orange-500 group-hover:text-orange-400 transition-colors">creates</span>
        </div>

        <div className={cn(
          "hidden md:flex items-center gap-8 transition-all duration-300",
          isScrolled 
            ? "bg-transparent border-transparent px-0 py-0" 
            : "bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-8 py-3"
        )}>
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item)}
              className="relative font-medium text-sm transition-colors duration-300 group"
            >
              <span className={cn(
                "relative z-10 transition-colors duration-300",
                activeTab === item ? "text-orange-500" : "text-white hover:text-orange-400"
              )}>
                {item}
              </span>
              {activeTab === item && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-500 shadow-[0_0_8px_#f97316] rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        <div className="hidden md:block">
          <button 
            onClick={() => handleNavClick('Contact')}
            className={cn(
              "px-6 py-2.5 rounded-full font-bold transition-all text-sm tracking-wide",
              isScrolled
                ? "bg-orange-600 hover:bg-orange-500 text-white shadow-lg"
                : "bg-orange-600 hover:bg-orange-500 text-white shadow-[0_0_20px_rgba(234,88,12,0.3)]"
            )}
          >
            HIRE ME
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-300 hover:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-30 pt-24 px-4 bg-[#050510]/95 backdrop-blur-xl md:hidden flex flex-col items-center"
        >
          <div className="flex flex-col space-y-4 items-center w-full max-w-sm">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className={cn(
                  "w-full py-4 text-lg font-medium rounded-2xl transition-all",
                  activeTab === item 
                    ? "bg-orange-500/20 text-white border border-orange-500/30 shadow-[0_0_20px_rgba(255,138,0,0.2)]" 
                    : "text-slate-400 hover:bg-white/5"
                )}
              >
                {item}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
}
