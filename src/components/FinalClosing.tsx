import React from 'react';
import { motion } from 'motion/react';
import { Wordmark } from './Wordmark.tsx';
import { ArewaKnot, OrnamentalDivider } from './CulturalMotifs.tsx';

export const FinalClosing: React.FC = () => {
  return (
    <footer
      id="section-final-closing"
      className="relative bg-[#111927] text-[#FAF7F0] pt-24 pb-16 px-6 overflow-hidden select-none border-t border-[#C5A568]/20"
    >
      {/* Subtle radial lighting */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(24,34,52,0.85)_0%,#111927_80%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        
        {/* Ceremonial Final Salute */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 flex flex-col items-center"
        >
          <ArewaKnot size={36} color="#C5A568" className="opacity-75 mb-6" />
          
          <h2
            id="final-salute-title"
            className="font-serif-royal text-2xl sm:text-4xl md:text-5xl text-[#FAF7F0] font-light tracking-wide uppercase leading-tight mb-4"
          >
            Congratulations, <br className="sm:hidden" />
            Your Excellency.
          </h2>

          <OrnamentalDivider />

          <p className="mt-4 text-xs sm:text-sm tracking-[0.25em] uppercase text-[#FAF7F0]/70 font-cinzel">
            With warmest wishes from Jetflite Limited.
          </p>
        </motion.div>

        {/* Wordmark presentation */}
        <div className="my-10">
          <Wordmark variant="gold" size="md" />
        </div>

        {/* SECTION 09: MINIMAL RESPECTFUL LEGAL FOOTER */}
        <div className="pt-12 mt-4 border-t border-[#C5A568]/15 w-full max-w-2xl text-center space-y-3">
          <p
            id="disclaimer-private-tribute"
            className="text-[11px] sm:text-xs text-[#FAF7F0]/50 font-light leading-relaxed max-w-xl mx-auto"
          >
            A private congratulatory commemorative tribute presented by <span className="text-[#FAF7F0]/80">Jetflite Limited</span>. This website is not an official Kwara State Government platform and does not claim government authorization or endorsement.
          </p>

          <p className="text-[10px] tracking-[0.2em] uppercase text-[#FAF7F0]/30 font-cinzel">
            © 2026 Jetflite Limited • All Rights Reserved
          </p>
        </div>

      </div>
    </footer>
  );
};
