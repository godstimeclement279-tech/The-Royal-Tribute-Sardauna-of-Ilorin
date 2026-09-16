import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface ImageLightboxProps {
  isOpen: boolean;
  imageSrc: string | null;
  title?: string;
  caption?: string;
  onClose: () => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  isOpen,
  imageSrc,
  title,
  caption,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && imageSrc && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#111927]/95 backdrop-blur-md"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={title || 'Image preview'}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-6 right-6 z-50 p-2.5 rounded-full bg-[#182234] border border-[#C5A568]/40 text-[#FAF7F0] hover:text-[#C5A568] transition-colors cursor-pointer"
            aria-label="Close preview"
          >
            <X size={20} />
          </button>

          {/* Modal Content */}
          <div
            className="relative max-w-4xl max-h-[90vh] flex flex-col items-center select-none"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative p-2 sm:p-3 bg-[#182234] border border-[#C5A568]/40 shadow-2xl rounded-sm overflow-hidden flex items-center justify-center">
              <img
                src={imageSrc}
                alt={title || 'Ceremonial image'}
                referrerPolicy="no-referrer"
                className="max-h-[75vh] w-auto object-contain rounded-xs"
              />
            </div>

            {/* Caption & Title */}
            {(title || caption) && (
              <div className="mt-4 text-center max-w-lg px-4">
                {title && (
                  <h4 className="font-serif-royal text-lg sm:text-xl text-[#FAF7F0] font-normal">
                    {title}
                  </h4>
                )}
                {caption && (
                  <p className="text-xs sm:text-sm text-[#FAF7F0]/70 font-light mt-1">
                    {caption}
                  </p>
                )}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
