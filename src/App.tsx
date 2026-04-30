import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { Stats } from './components/Stats';
import { Testimonials } from './components/Testimonials';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { BackgroundElements } from './components/BackgroundElements';
import { ImageModal } from './components/ImageModal';
import { useScroll } from './lib/data';

export default function App() {
  const [activeTab, setActiveTab] = useState('Home');
  const [modalImage, setModalImage] = useState<string | null>(null);
  const { scrollProgress } = useScroll();

  return (
    <div className="bg-[#020205] text-white min-h-screen font-sans selection:bg-orange-600/30 selection:text-white">
      <BackgroundElements />

      {/* Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-orange-400 to-orange-600 z-50"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="relative flex flex-col items-center w-full">
        <div className="w-full" id="home">
          <Hero />
        </div>
        <div className="w-full">
          <Stats />
        </div>
        <div className="w-full" id="portfolio">
          <Portfolio onImageClick={setModalImage} />
        </div>
        <div className="w-full">
          <About />
        </div>
        <div className="w-full">
          <Testimonials />
        </div>
        <div className="w-full" id="contact">
          <Contact />
        </div>
      </main>

      <footer className="py-8 text-center text-slate-500 font-light border-t border-white/5 relative z-10 w-full mt-12">
        <p>&copy; {new Date().getFullYear()} Dharmik - Thumbnail Designer. All rights reserved.</p>
      </footer>

      <ImageModal url={modalImage} onClose={() => setModalImage(null)} />
    </div>
  );
}

