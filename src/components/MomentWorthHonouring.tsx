import React from 'react';
import { motion } from 'motion/react';
import { ArewaKnot, OrnamentalDivider } from './CulturalMotifs.tsx';

export const MomentWorthHonouring: React.FC = () => {
  return (
    <section
      id="section-moment-worth-honouring"
      className="relative py-24 sm:py-32 md:py-40 px-6 bg-[#FAF7F0] text-[#282724] overflow-hidden select-text"
    >
      {/* Editorial layout container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        
        {/* Subtle Cultural Motif */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center mb-6"
        >
          <ArewaKnot size={38} color="#C5A568" className="opacity-90 mb-3" />
          <span className="font-cinzel text-xs tracking-[0.3em] uppercase text-[#766F63]">
            Traditional Chieftaincy
          </span>
        </motion.div>

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1.4, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4 mb-8"
        >
          <h2
            id="heading-moment-worth-honouring"
            className="font-serif-royal text-3xl sm:text-5xl md:text-6xl text-[#282724] font-normal tracking-tight leading-[1.15]"
          >
            A Moment Worth Honouring
          </h2>
          <OrnamentalDivider />
        </motion.div>

        {/* Editorial Body Text (strictly grounded in occasion & message) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto space-y-6 text-[#282724]/85 text-base sm:text-lg md:text-xl font-light leading-relaxed"
        >
          <p className="font-serif italic text-xl sm:text-2xl text-[#282724]/90">
            &ldquo;Today, you are being honoured not only with a traditional title, but with the trust, confidence, and recognition of your people.&rdquo;
          </p>

          <p className="text-sm sm:text-base text-[#766F63] leading-relaxed">
            The conferment of the revered title of <strong className="font-medium text-[#282724]">Sardauna of Ilorin</strong> marks a historic and solemn milestone in the heritage of the Ilorin Emirate. It stands as a profound testament to leadership rooted in service, peace, and mutual respect.
          </p>

          <div className="pt-2">
            <div className="w-12 h-[1px] bg-[#C5A568]/50 mx-auto" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};
