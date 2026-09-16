import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CornerBrackets, ArewaKnot, EquestrianInsignia } from './CulturalMotifs.tsx';
import { Maximize2, Upload, Sparkles, Award } from 'lucide-react';

interface CeremonyGalleryProps {
  posterSrc?: string;
  onOpenLightbox?: (src: string, title: string, caption?: string) => void;
  onCustomPosterSelected?: (dataUrl: string) => void;
}

export const CeremonyGallery: React.FC<CeremonyGalleryProps> = ({
  posterSrc = '/assets/ceremony-poster.jpg',
  onOpenLightbox,
  onCustomPosterSelected,
}) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onCustomPosterSelected) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          onCustomPosterSelected(reader.result);
          setImageError(false);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section
      id="section-ceremony-gallery"
      className="relative py-24 sm:py-32 px-6 bg-[#FAF7F0] text-[#282724] border-t border-[#C5A568]/15 overflow-hidden"
    >
      <div className="relative z-10 max-w-5xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[1px] w-6 bg-[#C5A568]" />
            <span className="font-cinzel text-xs tracking-[0.3em] uppercase text-[#766F63]">
              Commemorative Chronicle
            </span>
            <span className="h-[1px] w-6 bg-[#C5A568]" />
          </div>
          <h2
            id="heading-moment-of-honour"
            className="font-serif-royal text-3xl sm:text-4xl md:text-5xl text-[#282724] font-normal tracking-tight mb-4"
          >
            The Ceremony of Sardauna
          </h2>
          <p className="text-sm sm:text-base text-[#766F63] font-light max-w-xl mx-auto leading-relaxed">
            Commemorating the auspicious turbaning of His Excellency AbdulRahman AbdulRazaq CON as Sardauna of Ilorin Emirate.
          </p>
        </div>

        {/* Dominant Editorial Presentation */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          {/* Main Editorial Commemorative Artwork (7 cols) */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="relative group w-full max-w-md bg-[#111927] p-3 sm:p-4 rounded-sm border border-[#C5A568]/30 shadow-xl shadow-stone-300/40">
              <CornerBrackets borderColor="border-[#C5A568]/50" />
              
              <div className="relative overflow-hidden aspect-[3/4] bg-[#0c121d] flex items-center justify-center">
                {!imageError ? (
                  <img
                    src={posterSrc}
                    alt="Commemorative Turbaning Ceremony Poster — Sardauna of Ilorin Emirate"
                    referrerPolicy="no-referrer"
                    onLoad={() => setImageLoaded(true)}
                    onError={() => setImageError(true)}
                    className={`w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02] ${
                      imageLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ) : (
                  <div className="p-8 text-center text-[#FAF7F0] flex flex-col items-center justify-center">
                    <Sparkles size={36} className="text-[#C5A568] mb-3 opacity-70" />
                    <p className="font-cinzel text-xs tracking-widest uppercase text-[#C5A568] mb-1">
                      Commemorative Ceremony Poster
                    </p>
                    <p className="text-xs text-[#FAF7F0]/60 max-w-xs font-light mb-4">
                      Official turbaning congratulations as Sardauna of Ilorin Emirate.
                    </p>
                    <label className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#C5A568]/40 text-[11px] font-cinzel text-[#C5A568] hover:bg-[#C5A568]/10 cursor-pointer transition-colors">
                      <Upload size={12} />
                      Select Local Poster File
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileUpload}
                        className="sr-only"
                      />
                    </label>
                  </div>
                )}

                {/* Lightbox action */}
                {onOpenLightbox && !imageError && (
                  <button
                    type="button"
                    onClick={() =>
                      onOpenLightbox(
                        posterSrc,
                        'The Turbaning Ceremony Commemoration',
                        'Official celebration of His Excellency AbdulRahman AbdulRazaq CON as Sardauna of Ilorin Emirate.'
                      )
                    }
                    className="absolute bottom-4 right-4 z-20 p-2 rounded-full bg-[#111927]/80 backdrop-blur-md border border-[#C5A568]/40 text-[#FAF7F0] opacity-80 hover:opacity-100 hover:text-[#C5A568] transition-all cursor-pointer shadow-md"
                    title="Enlarge commemorative ceremony artwork"
                    aria-label="Enlarge commemorative ceremony artwork"
                  >
                    <Maximize2 size={16} />
                  </button>
                )}
              </div>

              {/* Verified Editorial Caption */}
              <div className="p-3 text-left">
                <p className="text-xs text-[#FAF7F0]/80 font-light leading-relaxed">
                  <span className="font-medium text-[#C5A568]">Ceremonial Tribute:</span> Commemorating the official turbaning as Sardauna of Ilorin Emirate, celebrating steadfast leadership and visionary service.
                </p>
              </div>
            </div>
          </div>

          {/* Complementary Commemorative Insignia Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-[#FAF7F0] border border-[#C5A568]/30 p-6 sm:p-8 rounded-sm shadow-md text-left flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <EquestrianInsignia size={38} />
                  <ArewaKnot size={32} color="#C5A568" />
                </div>
                <h3 className="font-serif-royal text-xl sm:text-2xl text-[#282724] font-medium leading-snug mb-3">
                  Historic Conferment
                </h3>
                <p className="text-xs sm:text-sm text-[#766F63] font-light leading-relaxed mb-4">
                  Conferred by His Royal Highness, the Emir of Ilorin, Alhaji Dr. Ibrahim Sulu-Gambari CFR, the revered title of <span className="font-medium text-[#282724]">Sardauna</span> marks a landmark celebration of honour, peace-building, and communal guardianship.
                </p>
                <div className="space-y-2 py-3 border-t border-b border-[#C5A568]/20 my-4 text-xs text-[#282724]">
                  <div className="flex items-center gap-2">
                    <Award size={14} className="text-[#C5A568]" />
                    <span className="font-medium">Chieftaincy:</span> Sardauna of Ilorin Emirate
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 text-center text-[#C5A568] font-serif">•</span>
                    <span><strong>Conferred by:</strong> HRH Alhaji Dr. Ibrahim Sulu-Gambari CFR</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 text-center text-[#C5A568] font-serif">•</span>
                    <span><strong>Location:</strong> Emir’s Palace, Ilorin, Kwara State</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between text-[11px] font-cinzel text-[#766F63]">
                <span className="text-[#766F63]/80 tracking-wider uppercase text-[10px]">Commemorative Archive</span>
                <span className="text-[#C5A568]">September 2026</span>
              </div>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
