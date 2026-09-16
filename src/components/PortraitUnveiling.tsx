import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CornerBrackets, ArewaKnot } from './CulturalMotifs.tsx';
import { Maximize2, ShieldCheck, Upload } from 'lucide-react';

interface PortraitUnveilingProps {
  portraitSrc: string;
  onOpenLightbox?: (src: string, title: string, caption?: string) => void;
  onCustomImageSelected?: (dataUrl: string) => void;
  onSelectPresetPortrait?: (path: string) => void;
}

export const PortraitUnveiling: React.FC<PortraitUnveilingProps> = ({
  portraitSrc,
  onOpenLightbox,
  onCustomImageSelected,
  onSelectPresetPortrait,
}) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const isCeremonial = portraitSrc.includes('governor-ceremonial-turban.jpg') || portraitSrc.includes('sardauna-regalia');

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onCustomImageSelected) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          onCustomImageSelected(reader.result);
          setImageError(false);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section
      id="section-portrait-unveiling"
      className="relative py-20 md:py-28 lg:py-36 px-6 bg-[#111927] overflow-hidden"
    >
      {/* Background depth gradations */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(24,34,52,0.85)_0%,#111927_80%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Portrait Column (Desktop: 7 cols, Mobile: full width) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex justify-center"
          >
            <div className="relative group w-full max-w-md sm:max-w-lg lg:max-w-none">
              {/* Outer ornamental frame */}
              <div className="relative p-3 sm:p-4 rounded-sm bg-gradient-to-b from-[#182234] to-[#111927] border border-[#C5A568]/30 shadow-2xl shadow-black/80">
                <CornerBrackets borderColor="border-[#C5A568]/60" />

                {/* Inner image container with exact matching aspect ratio for ceremonial photo */}
                <div
                  className={`relative overflow-hidden bg-[#0c121d] flex items-center justify-center ${
                    isCeremonial ? 'aspect-[963/1039]' : 'aspect-[4/5] sm:aspect-[3/4]'
                  }`}
                >
                  {!imageError ? (
                    <img
                      src={portraitSrc}
                      alt={
                        isCeremonial
                          ? 'His Excellency AbdulRahman AbdulRazaq in ceremonial regalia with sword and royal turban as Sardauna of Ilorin'
                          : 'Official Portrait of His Excellency AbdulRahman AbdulRazaq CON, Executive Governor of Kwara State'
                      }
                      referrerPolicy="no-referrer"
                      onLoad={() => setImageLoaded(true)}
                      onError={() => setImageError(true)}
                      className={`w-full h-full ${
                        isCeremonial ? 'object-contain' : 'object-cover object-top'
                      } transition-transform duration-1000 ease-out group-hover:scale-[1.01] ${
                        imageLoaded ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  ) : (
                    /* Elegant respectful placeholder if image asset path needs attention */
                    <div className="p-8 text-center flex flex-col items-center justify-center h-full">
                      <ArewaKnot size={48} color="#C5A568" className="mb-4 opacity-75" />
                      <p className="font-cinzel text-sm text-[#C5A568] tracking-widest uppercase mb-2">
                        Official State Portrait
                      </p>
                      <p className="text-xs text-[#FAF7F0]/70 max-w-xs leading-relaxed mb-6 font-light">
                        H.E. AbdulRahman AbdulRazaq CON, Executive Governor of Kwara State & Sardauna of Ilorin Emirate.
                      </p>
                      <label className="inline-flex items-center gap-2 px-4 py-2 border border-[#C5A568]/50 text-xs font-cinzel text-[#C5A568] hover:bg-[#C5A568]/10 cursor-pointer transition-colors">
                        <Upload size={14} />
                        Select Local Image File
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleFileUpload}
                          className="sr-only"
                        />
                      </label>
                    </div>
                  )}

                  {/* Gradient sheen overlay only for non-ceremonial portrait to keep regalia photo completely unedited */}
                  {!isCeremonial && (
                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#111927]/60 via-transparent to-transparent opacity-40"
                      aria-hidden="true"
                    />
                  )}

                  {/* Lightbox / Zoom Action Button */}
                  {onOpenLightbox && (
                    <button
                      type="button"
                      onClick={() =>
                        onOpenLightbox(
                          portraitSrc,
                          'His Excellency AbdulRahman AbdulRazaq CON',
                          isCeremonial
                            ? 'Official Ceremonial Portrait — Sardauna of Ilorin Emirate'
                            : 'Official Portrait — Executive Governor of Kwara State & Sardauna of Ilorin Emirate'
                        )
                      }
                      className="absolute bottom-4 right-4 z-20 p-2.5 rounded-full bg-[#111927]/80 backdrop-blur-md border border-[#C5A568]/40 text-[#FAF7F0] opacity-80 hover:opacity-100 hover:text-[#C5A568] transition-all cursor-pointer shadow-lg"
                      title="View full portrait"
                      aria-label="View portrait in full resolution"
                    >
                      <Maximize2 size={16} />
                    </button>
                  )}
                </div>
              </div>

              {/* Discreet photo provenance tag */}
              <div className="mt-3 flex items-center justify-between text-[11px] text-[#FAF7F0]/60 font-light tracking-wide px-2">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck size={12} className="text-[#C5A568]" />
                  <span>{isCeremonial ? 'Sardauna of Ilorin Emirate' : 'Executive Governor, Kwara State'}</span>
                </span>
                <span className="italic font-serif text-[#C5A568]/80">
                  {isCeremonial ? 'Chieftaincy Regalia Portrait' : 'Official State Portrait'}
                </span>
              </div>

              {/* Portrait Variant Switcher */}
              {onSelectPresetPortrait && (
                <div className="mt-3 flex flex-wrap items-center gap-2 px-1 text-[11px] font-cinzel">
                  <span className="text-[#FAF7F0]/40 mr-1 text-[10px] tracking-wider uppercase">View:</span>
                  <button
                    type="button"
                    onClick={() => {
                      onSelectPresetPortrait('/assets/governor-ceremonial-turban.jpg');
                      setImageError(false);
                    }}
                    className={`px-2.5 py-1 rounded-sm border transition-all cursor-pointer ${
                      isCeremonial
                        ? 'border-[#C5A568] text-[#C5A568] bg-[#C5A568]/15'
                        : 'border-[#FAF7F0]/20 text-[#FAF7F0]/60 hover:text-[#FAF7F0] hover:border-[#FAF7F0]/40'
                    }`}
                  >
                    Chieftaincy Regalia
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      onSelectPresetPortrait('/assets/governor-portrait.jpg');
                      setImageError(false);
                    }}
                    className={`px-2.5 py-1 rounded-sm border transition-all cursor-pointer ${
                      !isCeremonial
                        ? 'border-[#C5A568] text-[#C5A568] bg-[#C5A568]/15'
                        : 'border-[#FAF7F0]/20 text-[#FAF7F0]/60 hover:text-[#FAF7F0] hover:border-[#FAF7F0]/40'
                    }`}
                  >
                    Official Portrait
                  </button>
                </div>
              )}
            </div>
          </motion.div>

          {/* Text Column (Desktop: 5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-center text-left"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-[1px] w-8 bg-[#C5A568]/70" />
              <span className="font-cinzel text-xs tracking-[0.3em] uppercase text-[#C5A568]">
                Ceremonial Unveiling
              </span>
            </div>

            <div className="space-y-3 mb-6">
              <span className="block font-cinzel text-xs sm:text-sm tracking-[0.25em] text-[#FAF7F0]/70 uppercase">
                His Excellency
              </span>
              <h2
                id="governor-official-name"
                className="font-serif-royal text-3xl sm:text-4xl lg:text-5xl text-[#FAF7F0] font-normal leading-[1.15]"
              >
                AbdulRahman <br className="hidden sm:inline" />
                AbdulRazaq <span className="text-xl sm:text-2xl font-light text-[#C5A568]">CON</span>
              </h2>
            </div>

            <div className="w-16 h-[1px] bg-gradient-to-r from-[#C5A568] to-transparent mb-6" />

            <div className="space-y-4 text-sm sm:text-base text-[#FAF7F0]/80 font-light leading-relaxed">
              <p className="font-cinzel text-xs tracking-[0.18em] uppercase text-[#C5A568]/95 font-medium">
                Executive Governor, Kwara State
              </p>
              <p>
                Installed as the <strong className="font-medium text-[#FAF7F0]">Sardauna of Ilorin</strong> by His Royal Highness, the Emir of Ilorin, Alhaji Dr. Ibrahim Sulu-Gambari CFR, at the historic Emir&apos;s Palace.
              </p>
              <p className="text-xs sm:text-sm text-[#FAF7F0]/65 leading-normal">
                A time-honoured title recognizing distinguished statesmanship, peaceful unity, and dedicated devotion to the progress of the people.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
