import React, { useState, useEffect } from 'react';
import { HeroOpening } from './components/HeroOpening.tsx';
import { PortraitUnveiling } from './components/PortraitUnveiling.tsx';
import { MomentWorthHonouring } from './components/MomentWorthHonouring.tsx';
import { CongratulatoryMessage } from './components/CongratulatoryMessage.tsx';
import { CeremonyGallery } from './components/CeremonyGallery.tsx';
import { CeoClosing } from './components/CeoClosing.tsx';
import { FinalClosing } from './components/FinalClosing.tsx';
import { ImageLightbox } from './components/ImageLightbox.tsx';

export default function App() {
  // Primary portrait asset (defaults to authentic ceremonial chieftaincy regalia portrait)
  const [portraitSrc, setPortraitSrc] = useState<string>(() => {
    try {
      return localStorage.getItem('jetflite_governor_portrait_v3') || '/assets/governor-ceremonial-turban.jpg';
    } catch {
      return '/assets/governor-ceremonial-turban.jpg';
    }
  });

  // Commemorative turbaning poster asset (local public asset default, with saved storage support)
  const [posterSrc, setPosterSrc] = useState<string>(() => {
    try {
      return localStorage.getItem('jetflite_ceremony_poster') || '/assets/ceremony-poster.jpg';
    } catch {
      return '/assets/ceremony-poster.jpg';
    }
  });

  // CEO signature state (default to authentic supplied signature)
  const [customSignatureUrl, setCustomSignatureUrl] = useState<string | null>(() => {
    try {
      return localStorage.getItem('jetflite_ceo_signature') || '/assets/ceo-signature.svg';
    } catch {
      return '/assets/ceo-signature.svg';
    }
  });

  // Lightbox state
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    src: string | null;
    title: string;
    caption?: string;
  }>({
    isOpen: false,
    src: null,
    title: '',
    caption: '',
  });

  const handleOpenLightbox = (src: string, title: string, caption?: string) => {
    setLightboxState({
      isOpen: true,
      src,
      title,
      caption,
    });
  };

  const handleCloseLightbox = () => {
    setLightboxState((prev) => ({ ...prev, isOpen: false }));
  };

  const handleSignatureUpdated = (url: string | null) => {
    setCustomSignatureUrl(url);
    try {
      if (url) {
        localStorage.setItem('jetflite_ceo_signature', url);
      } else {
        localStorage.removeItem('jetflite_ceo_signature');
      }
    } catch {
      // Ignore storage errors in restricted contexts
    }
  };

  const handleCustomPortraitSelected = (dataUrl: string) => {
    setPortraitSrc(dataUrl);
    try {
      localStorage.setItem('jetflite_governor_portrait_v3', dataUrl);
    } catch {
      // Ignore storage errors
    }
  };

  const handleSelectPresetPortrait = (path: string) => {
    setPortraitSrc(path);
    try {
      localStorage.setItem('jetflite_governor_portrait_v3', path);
    } catch {
      // Ignore storage errors
    }
  };

  const handleCustomPosterSelected = (dataUrl: string) => {
    setPosterSrc(dataUrl);
    try {
      localStorage.setItem('jetflite_ceremony_poster', dataUrl);
    } catch {
      // Ignore storage errors
    }
  };

  return (
    <div className="min-h-screen bg-[#111927] text-[#FAF7F0] selection:bg-[#C5A568]/30 selection:text-[#FAF7F0] font-sans antialiased overflow-x-hidden">
      
      {/* SECTION 01: CINEMATIC OPENING */}
      <HeroOpening />

      {/* SECTION 02: PORTRAIT UNVEILING */}
      <PortraitUnveiling
        portraitSrc={portraitSrc}
        onOpenLightbox={handleOpenLightbox}
        onCustomImageSelected={handleCustomPortraitSelected}
        onSelectPresetPortrait={handleSelectPresetPortrait}
      />

      {/* SECTION 03: A MOMENT WORTH HONOURING */}
      <MomentWorthHonouring />

      {/* SECTION 04: THE CONGRATULATORY MESSAGE */}
      <CongratulatoryMessage />

      {/* SECTION 05: COMMEMORATIVE CEREMONY POSTER & CHRONICLE */}
      <CeremonyGallery
        posterSrc={posterSrc}
        onOpenLightbox={handleOpenLightbox}
        onCustomPosterSelected={handleCustomPosterSelected}
      />

      {/* SECTIONS 06 & 07: PERSONAL CLOSING & AUTHENTIC CEO SIGNATURE */}
      <CeoClosing
        customSignatureUrl={customSignatureUrl}
        onSignatureUpdated={handleSignatureUpdated}
      />

      {/* SECTIONS 08 & 09: FINAL CLOSING & MINIMAL FOOTER */}
      <FinalClosing />

      {/* Image Lightbox viewer */}
      <ImageLightbox
        isOpen={lightboxState.isOpen}
        imageSrc={lightboxState.src}
        title={lightboxState.title}
        caption={lightboxState.caption}
        onClose={handleCloseLightbox}
      />
    </div>
  );
}
