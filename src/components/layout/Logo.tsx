import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'custom';
  showText?: boolean;
  animated?: boolean;
}

export default function Logo({
  className = '',
  size = 'md',
  showText = true,
  animated = true,
}: LogoProps) {
  const sizeClasses = {
    sm: 'h-9 w-9',
    md: 'h-13 w-13 sm:h-14 sm:w-14',
    lg: 'h-18 w-18',
    xl: 'h-26 w-26',
    custom: 'h-11 w-11',
  };

  const imageSizeClass = sizeClasses[size];

  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      {/* Improved Crisp Logo container with refined border and soft outer shadow */}
      <div
        className={`relative rounded-full overflow-hidden border-2 border-brand-coral bg-white p-0.5 shadow-sm hover:scale-105 active:scale-95 transition-all duration-300 ${imageSizeClass} ${
          animated ? 'animate-float-slow' : ''
        }`}
      >
        <img
          src="https://cdn.corenexis.com/files/c/1423987720.jpg"
          alt="Happy Hookers Official Logo"
          className="h-full w-full object-cover rounded-full"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      </div>

      {showText && (
        <div className="flex flex-col select-none animate-fade-in">
          <span className="font-fredoka font-bold text-xl md:text-2xl leading-none tracking-tight text-neutral-800 dark:text-neutral-100 flex items-center gap-1.5 drop-shadow-xs">
            <span className="text-black dark:text-black">Happy</span> <span className="text-brand-coral relative">
              Hookers
              <span className="absolute left-0 bottom-0.5 w-full h-[3px] bg-[#FFEAA7] -z-10 rounded-full opacity-65 dark:opacity-30" />
            </span>
            <span className="text-brand-coral text-xs animate-pulse">🌸</span>
          </span>
          <span className="font-sans font-semibold text-[9px] md:text-[10px] text-neutral-500 dark:text-neutral-400 leading-none tracking-wider uppercase mt-1">
            Modern stitches. Timeless style
          </span>
        </div>
      )}
    </div>
  );
}
