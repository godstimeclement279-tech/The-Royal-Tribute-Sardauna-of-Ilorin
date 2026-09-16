import React from 'react';
import { motion } from 'motion/react';
import { Wordmark } from './Wordmark.tsx';
import { ArewaKnot, OrnamentalDivider } from './CulturalMotifs.tsx';
import { ChevronDown } from 'lucide-react';

interface HeroOpeningProps {
  onExploreClick?: () => void;
}

export const HeroOpening: React.FC<HeroOpeningProps> = ({ onExploreClick }) => {
  const scrollToNext = () => {
    if (onExploreClick) {
      onExploreClick();
    } else {
      const portraitElem = document.getElementById('section-portrait-unveiling');
      if (portraitElem) {
        portraitElem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="section-cinematic-opening"
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between items-center text-center px-6 py-12 md:py-16 bg-[#111927] overflow-hidden select-none"
    >
      {/* Subtle atmospheric radial glow */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(24,34,52,0.9)_0%,#111927_75%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-20 editorial-grain"
        aria-hidden="true"
      />

      {/* Top Header Bar / Sender Wordmark */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 pt-2 pb-6 w-full max-w-4xl flex flex-col items-center"
      >
        <Wordmark variant="light" size="sm" />
        <div className="w-12 h-[1px] bg-[#C5A568]/30 mt-3" />
      </motion.div>

      {/* Main Ceremonial Typography Block */}
      <div className="relative z-10 my-auto max-w-3xl flex flex-col items-center">
        {/* Ceremonial Badge Motif */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-5 flex flex-col items-center"
        >
          <ArewaKnot size={34} color="#C5A568" className="opacity-80 mb-3" />
          <span
            id="ceremonial-intro-label"
            className="text-[11px] sm:text-xs tracking-[0.35em] uppercase text-[#C5A568] font-cinzel font-medium"
          >
            A Tribute of Honour
          </span>
        </motion.div>

        {/* Title: SARDAUNA OF ILORIN */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-2 mb-6"
        >
          <h1
            id="royal-tribute-main-title"
            className="font-serif-royal text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#FAF7F0] font-light leading-[1.08]"
          >
            Sardauna of Ilorin
          </h1>
          <OrnamentalDivider />
        </motion.div>

        {/* Supporting Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-3 max-w-xl text-center px-4"
        >
          <p className="text-base sm:text-lg md:text-xl font-light text-[#FAF7F0]/90 leading-relaxed">
            Celebrating{' '}
            <span className="font-medium text-[#FAF7F0]">
              His Excellency, AbdulRahman AbdulRazaq
            </span>
          </p>
          <p className="text-xs sm:text-sm tracking-[0.2em] uppercase text-[#C5A568]/90 font-cinzel font-normal">
            Executive Governor, Kwara State
          </p>
          <div className="pt-4">
            <p className="text-xs sm:text-sm text-[#FAF7F0]/60 font-light italic font-serif">
              With warmest congratulations from Jetflite Limited.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Restrained Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1 }}
        className="relative z-10 pb-4 flex flex-col items-center cursor-pointer group"
        onClick={scrollToNext}
        role="button"
        tabIndex={0}
        aria-label="Scroll to Portrait Unveiling"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            scrollToNext();
          }
        }}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-[#FAF7F0]/40 group-hover:text-[#C5A568] transition-colors duration-300 font-cinzel mb-2">
          Unveil The Tribute
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
        >
          <ChevronDown
            size={18}
            className="text-[#C5A568]/60 group-hover:text-[#C5A568] transition-colors"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
