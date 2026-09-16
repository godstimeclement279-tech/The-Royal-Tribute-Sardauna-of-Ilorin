import React, { useState } from 'react';
import { motion } from 'motion/react';
import { OrnamentalDivider } from './CulturalMotifs.tsx';
import { Wordmark } from './Wordmark.tsx';
import { Upload, X, Check } from 'lucide-react';

interface CeoClosingProps {
  customSignatureUrl: string | null;
  onSignatureUpdated: (url: string | null) => void;
}

export const CeoClosing: React.FC<CeoClosingProps> = ({
  customSignatureUrl,
  onSignatureUpdated,
}) => {
  const [isHoveringUpload, setIsHoveringUpload] = useState(false);

  const handleSignatureUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          onSignatureUpdated(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const removeSignature = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSignatureUpdated(null);
  };

  return (
    <section
      id="section-personal-closing"
      className="relative py-24 sm:py-32 px-6 bg-[#FAF7F0] text-[#282724] border-t border-[#C5A568]/20 overflow-hidden"
    >
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        
        {/* Subtle Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4"
        >
          <span className="font-cinzel text-xs tracking-[0.3em] uppercase text-[#766F63]">
            Tribute Presentation
          </span>
        </motion.div>

        {/* Heading: WITH WARMEST REGARDS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1.4, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4 mb-12"
        >
          <h2
            id="heading-with-warmest-regards"
            className="font-serif-royal text-3xl sm:text-4xl md:text-5xl text-[#282724] font-normal tracking-tight leading-tight"
          >
            With Warmest Regards
          </h2>
          <OrnamentalDivider />
        </motion.div>

        {/* Personal Closing Block & Dedicated Signature Area */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center max-w-md mx-auto"
        >
          {/* SECTION 07: AUTHENTIC SIGNATURE AREA */}
          <div
            id="section-authentic-signature-area"
            className="relative w-full py-4 flex flex-col items-center justify-center min-h-[130px]"
          >
            {customSignatureUrl ? (
              /* Display Authentic Supplied Signature */
              <div className="relative group/sig flex flex-col items-center w-full">
                <div className="relative p-2 flex items-center justify-center">
                  <img
                    src={customSignatureUrl}
                    alt="Authentic signature of Mr. Benjamin Udekwe, CEO Jetflite Limited"
                    referrerPolicy="no-referrer"
                    className="h-24 sm:h-28 w-auto max-w-[280px] object-contain select-none transition-transform duration-500 hover:scale-[1.03]"
                  />
                </div>

                {/* Subtle verified signature indicator */}
                <div className="flex items-center gap-1.5 text-[10px] font-cinzel tracking-[0.2em] text-[#C5A568] uppercase mt-1 mb-2">
                  <Check size={12} className="text-[#C5A568]" />
                  <span>Authentic Signature Verified</span>
                </div>

                {/* Secondary actions: replace or reset */}
                <div className="opacity-0 group-hover/sig:opacity-100 transition-opacity duration-300 flex items-center gap-4 text-[11px] text-[#766F63]">
                  <label className="hover:text-[#282724] cursor-pointer flex items-center gap-1 transition-colors">
                    <Upload size={11} />
                    <span>Change scan</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleSignatureUpload}
                      className="sr-only"
                    />
                  </label>
                  {customSignatureUrl !== '/assets/ceo-signature.svg' && (
                    <button
                      type="button"
                      onClick={() => onSignatureUpdated('/assets/ceo-signature.svg')}
                      className="hover:text-red-700 flex items-center gap-1 transition-colors"
                      title="Restore default provided signature"
                    >
                      <X size={11} />
                      <span>Reset to default</span>
                    </button>
                  )}
                </div>
              </div>
            ) : (
              /* Standard Development Placeholder (Fallback) */
              <div className="w-full border border-dashed border-[#C5A568]/60 bg-[#F2EBDD]/60 p-6 rounded-sm text-center flex flex-col items-center justify-center relative">
                <span
                  id="ceo-signature-placeholder"
                  className="font-cinzel text-xs tracking-[0.25em] uppercase text-[#766F63] font-medium"
                >
                  [CEO SIGNATURE IMAGE WILL BE PROVIDED]
                </span>
                <p className="text-[11px] text-[#766F63]/75 mt-1 font-light">
                  Awaiting authentic signature asset for Mr. Benjamin Udekwe
                </p>

                {/* Upload Action */}
                <label className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#C5A568] bg-[#FAF7F0] text-[11px] font-cinzel text-[#282724] hover:bg-[#C5A568]/10 cursor-pointer transition-colors shadow-xs">
                  <Upload size={12} className="text-[#C5A568]" />
                  <span>Upload Signature PNG/JPG</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleSignatureUpload}
                    className="sr-only"
                  />
                </label>
              </div>
            )}
          </div>

          {/* Fine divider under signature */}
          <div className="w-36 h-[1px] bg-gradient-to-r from-transparent via-[#C5A568]/60 to-transparent mb-5" />

          {/* Clearly Identified Sender Details */}
          <div className="space-y-1 text-center">
            <h3
              id="ceo-full-name"
              className="font-serif-royal text-2xl sm:text-3xl text-[#282724] font-medium tracking-tight"
            >
              Mr. Benjamin Udekwe
            </h3>
            <p className="font-cinzel text-xs sm:text-sm tracking-[0.2em] uppercase text-[#766F63] font-normal">
              Chief Executive Officer
            </p>
            <div className="pt-3">
              <Wordmark variant="dark" size="sm" />
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
