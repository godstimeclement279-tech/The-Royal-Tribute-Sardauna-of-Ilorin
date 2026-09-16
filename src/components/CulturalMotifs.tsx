import React from 'react';

/**
 * Geometric Northern Knot (Dagin Arewa inspired motif)
 * Clean, restrained vector representation of unity and honour.
 */
export const ArewaKnot: React.FC<{
  className?: string;
  size?: number;
  color?: string;
}> = ({ className = '', size = 32, color = '#C5A568' }) => {
  return (
    <svg
      id="arewa-knot-motif"
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Central diamond */}
      <rect
        x="36"
        y="36"
        width="28"
        height="28"
        stroke={color}
        strokeWidth="2.5"
        strokeLinejoin="round"
        transform="rotate(45 50 50)"
      />
      {/* Four Interlaced Petal Loops */}
      <path
        d="M50 15 C40 15 32 26 32 36 C32 46 42 54 50 62 C58 54 68 46 68 36 C68 26 60 15 50 15 Z"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M50 85 C40 85 32 74 32 64 C32 54 42 46 50 38 C58 46 68 54 68 64 C68 74 60 85 50 85 Z"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 50 C15 40 26 32 36 32 C46 32 54 42 62 50 C54 58 46 68 36 68 C26 68 15 60 15 50 Z"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M85 50 C85 40 74 32 64 32 C54 32 46 42 38 50 C46 58 54 68 64 68 C74 68 85 60 85 50 Z"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Central core pivot */}
      <circle cx="50" cy="50" r="3" fill={color} />
    </svg>
  );
};

/**
 * Fine Ornamental Divider with central diamond accent
 */
export const OrnamentalDivider: React.FC<{
  className?: string;
  color?: string;
}> = ({ className = '', color = '#C5A568' }) => {
  return (
    <div
      className={`flex items-center justify-center gap-3 w-full max-w-xs mx-auto py-3 ${className}`}
      aria-hidden="true"
    >
      <div
        className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C5A568]/40 to-[#C5A568]/70"
      />
      <div className="flex items-center gap-1">
        <div className="w-1 h-1 rotate-45 bg-[#C5A568]/60" />
        <div className="w-2 h-2 rotate-45 border border-[#C5A568] bg-[#C5A568]/20" />
        <div className="w-1 h-1 rotate-45 bg-[#C5A568]/60" />
      </div>
      <div
        className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#C5A568]/40 to-[#C5A568]/70"
      />
    </div>
  );
};

/**
 * Editorial Corner Brackets for framing regal portraits
 */
export const CornerBrackets: React.FC<{
  className?: string;
  borderColor?: string;
}> = ({ className = '', borderColor = 'border-[#C5A568]/40' }) => {
  return (
    <div
      className={`pointer-events-none absolute inset-0 z-10 ${className}`}
      aria-hidden="true"
    >
      {/* Top Left */}
      <div
        className={`absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 ${borderColor}`}
      />
      {/* Top Right */}
      <div
        className={`absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 ${borderColor}`}
      />
      {/* Bottom Left */}
      <div
        className={`absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 ${borderColor}`}
      />
      {/* Bottom Right */}
      <div
        className={`absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 ${borderColor}`}
      />
    </div>
  );
};

/**
 * Royal Equestrian Crest vector silhouette
 * Subtly pays homage to the emirate's celebrated cavalry legacy
 */
export const EquestrianInsignia: React.FC<{
  className?: string;
  size?: number;
}> = ({ className = '', size = 48 }) => {
  return (
    <svg
      id="equestrian-insignia"
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Rectangular boundary frame */}
      <rect
        x="4"
        y="4"
        width="56"
        height="56"
        stroke="#C5A568"
        strokeWidth="1.5"
        strokeOpacity="0.5"
      />
      {/* Stylized rider and spear silhouette */}
      <path
        d="M26 14L44 8M32 16C33 16 35 15 35 13C35 11 33 11 32 11C31 11 30 12 30 14C30 15 31 16 32 16ZM30 18L34 26L30 32M34 26L42 28M24 38C22 36 21 33 21 30C21 28 23 27 26 27C30 27 35 29 39 31C42 32 45 35 45 38L47 48M22 38L18 48M34 32L38 42L36 50"
        stroke="#C5A568"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
