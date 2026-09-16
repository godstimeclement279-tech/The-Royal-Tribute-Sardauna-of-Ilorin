import React from 'react';
import { motion } from 'motion/react';
import { CornerBrackets } from './CulturalMotifs.tsx';
import { Quote } from 'lucide-react';

export const CongratulatoryMessage: React.FC = () => {
  return (
    <section
      id="section-congratulatory-message"
      className="relative py-20 sm:py-28 md:py-36 px-6 bg-[#F2EBDD] text-[#282724] overflow-hidden"
    >
      <div className="relative z-10 max-w-4xl mx-auto">
        
        {/* Editorial Letter Card */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-[#FAF7F0] border border-[#C5A568]/35 p-8 sm:p-12 md:p-16 lg:p-20 shadow-xl shadow-stone-400/20"
        >
          {/* Subtle gold editorial corner brackets */}
          <CornerBrackets borderColor="border-[#C5A568]/50" />

          {/* Letterhead Accents */}
          <div className="flex flex-col items-center text-center pb-10 border-b border-[#C5A568]/20 mb-10">
            <Quote size={28} className="text-[#C5A568]/70 mb-3" />
            <span className="font-cinzel text-xs tracking-[0.3em] uppercase text-[#766F63]">
              Congratulatory Letter of Tribute
            </span>
          </div>

          {/* Letter Content */}
          <article className="space-y-8 text-[#282724] font-serif text-lg sm:text-xl md:text-2xl leading-[1.75] sm:leading-[1.85] max-w-3xl mx-auto">
            
            {/* Opening Greeting */}
            <p className="font-serif-royal text-xl sm:text-2xl md:text-3xl text-[#282724] font-medium tracking-tight">
              Congratulations, Your Excellency, sir, on this very special and historic occasion of your chieftaincy title.
            </p>

            {/* Main Body Paragraph 1 */}
            <p className="font-light text-[#282724]/90">
              Today, you are being honoured not only with a traditional title, but with the trust, confidence, and recognition of your people. May God continue to elevate you and grant you the wisdom and strength to uphold this great honour.
            </p>

            {/* Main Body Paragraph 2 */}
            <p className="font-light text-[#282724]/90">
              May this new chapter bring you greater respect, more opportunities to serve, and abundant blessings. I wish Your Excellency a truly memorable and magnificent celebration today.
            </p>

            {/* Final Congratulations */}
            <p className="font-medium text-[#282724] pt-2 text-xl sm:text-2xl">
              Congratulations once again, sir.
            </p>

          </article>

          {/* Letter Bottom Seal Detail */}
          <div className="mt-12 pt-8 border-t border-[#C5A568]/20 flex items-center justify-between text-xs font-cinzel text-[#766F63] tracking-widest uppercase">
            <span>The Sardauna Tribute</span>
            <span>September 2026</span>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
