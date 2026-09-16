import React from 'react';

interface WordmarkProps {
  variant?: 'light' | 'dark' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Wordmark: React.FC<WordmarkProps> = ({
  variant = 'light',
  size = 'md',
  className = '',
}) => {
  const textColor =
    variant === 'dark'
      ? 'text-[#282724]'
      : variant === 'gold'
      ? 'text-[#C5A568]'
      : 'text-[#FAF7F0]';

  const subColor =
    variant === 'dark'
      ? 'text-[#766F63]'
      : variant === 'gold'
      ? 'text-[#C5A568]/80'
      : 'text-[#FAF7F0]/60';

  const sizeClasses = {
    sm: {
      brand: 'text-xs tracking-[0.3em]',
      sub: 'text-[9px] tracking-[0.45em]',
      gap: 'gap-0.5',
    },
    md: {
      brand: 'text-sm tracking-[0.35em]',
      sub: 'text-[10px] tracking-[0.5em]',
      gap: 'gap-1',
    },
    lg: {
      brand: 'text-lg tracking-[0.4em]',
      sub: 'text-xs tracking-[0.55em]',
      gap: 'gap-1.5',
    },
  };

  const currentSize = sizeClasses[size];

  return (
    <div
      id="jetflite-wordmark"
      className={`inline-flex flex-col items-center select-none ${currentSize.gap} ${className}`}
      aria-label="Jetflite Limited"
    >
      <span
        className={`font-cinzel font-semibold uppercase leading-none transition-colors duration-300 ${textColor} ${currentSize.brand}`}
      >
        JETFLITE
      </span>
      <span
        className={`font-cinzel font-normal uppercase leading-none transition-colors duration-300 ${subColor} ${currentSize.sub}`}
      >
        LIMITED
      </span>
    </div>
  );
};
