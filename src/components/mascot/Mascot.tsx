import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquareHeart, Sparkles } from 'lucide-react';

interface MascotProps {
  className?: string;
  context?: 'general' | 'cart' | 'shop' | 'about' | 'contact' | 'success';
}

const CONTEXT_MESSAGES = {
  general: [
    "Ready to get absolutely hooked? 🧶",
    "Stitched with love and a pinch of magic! ✨",
    "Each plushie has their own happy personality!",
    "Can you feel the squish already? 😍",
    "Need custom colors? Ask about Custom Orders!"
  ],
  cart: [
    "Yum, those look cozy in your basket! 🎒",
    "My tentacles are ready to pack your package!",
    "Free shipping on plush orders over ₹3,000! 🎉",
    "Hurry, some of these are made in tiny batches!"
  ],
  shop: [
    "Use filters to find the perfect yarn buddy! 🍀",
    "Want keychains? They make adorable zipper pullers!",
    "Our plushies are knit with Hypoallergenic polyfill!",
    "Have a custom idea? Send us an order form!"
  ],
  about: [
    "Founded in 2026, we stitch in sunny workshops! ☀️",
    "We use premium combed Egyptian milk cotton!",
    "No machines used. 100% human-crafted luxury!"
  ],
  contact: [
    "Have questions? Stitch them into our form! 💌",
    "We reply within 24 yarn-spins (one business day)!",
    "Need customization? We love custom sketch matching!"
  ],
  success: [
    "Hooray! That order is going to be so cozy! 🥳",
    "Thank you for supporting human handmade art!",
    "We're already hand-wrapping your parcel!"
  ]
};

export default function Mascot({ className = '', context = 'general' }: MascotProps) {
  const [bubbleText, setBubbleText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const messages = CONTEXT_MESSAGES[context];

  useEffect(() => {
    // Pick initial random message
    const rand = messages[Math.floor(Math.random() * messages.length)];
    setBubbleText(rand);
  }, [context]);

  const changeMessage = () => {
    const currentIdx = messages.indexOf(bubbleText);
    let nextIdx = Math.floor(Math.random() * messages.length);
    if (nextIdx === currentIdx && messages.length > 1) {
      nextIdx = (nextIdx + 1) % messages.length;
    }
    setBubbleText(messages[nextIdx]);
    setClickCount(prev => prev + 1);
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      {/* Dynamic speech bubble */}
      <AnimatePresence mode="wait">
        {bubbleText && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            className="relative mb-4 bg-white dark:bg-neutral-800 border-2 border-brand-coral/30 rounded-2xl px-4 py-3 shadow-sm max-w-[240px] text-center"
          >
            <p className="font-sans font-semibold text-xs leading-relaxed text-neutral-700 dark:text-neutral-200">
              {bubbleText}
            </p>
            {/* Talk tail */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-white dark:border-t-neutral-800" />
            <div className="absolute top-[calc(100%+2px)] left-1/2 -translate-x-1/2 border-8 border-transparent border-t-brand-coral/20 -z-10" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mascot character */}
      <motion.div
        className="cursor-pointer relative group"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={changeMessage}
      >
        {/* Glow effect on hover */}
        <div className="absolute inset-x-0 bottom-0 h-16 w-16 mx-auto rounded-full bg-brand-coral/20 blur-xl group-hover:bg-brand-secondary/30 transition-colors duration-300 -z-10" />

        {/* Mascot SVG drawing (Chibi Crochet Octopus 'Octo') */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 120 120"
          className="w-24 h-24 sm:w-28 sm:h-28"
        >
          {/* Main Body */}
          <motion.g
            animate={{
              y: isHovered ? [0, -6, 0] : [0, -4, 0],
              scaleY: isHovered ? [1, 0.96, 1.02, 1] : [1, 0.98, 1.01, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: isHovered ? 2.5 : 4,
              ease: "easeInOut",
            }}
          >
            {/* Back Crown/Hook accessory */}
            <path
              d="M 60,30 Q 72,12 80,24"
              fill="none"
              stroke="#FF8BA1"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <circle cx="80" cy="24" r="4.5" fill="#FFEAA7" />

            {/* Octopus Body */}
            <ellipse
              cx="60"
              cy="65"
              rx="38"
              ry="32"
              fill="#81E6D9"
              stroke="#4FD1C5"
              strokeWidth="3.5"
            />

            {/* Kawaii blush circles */}
            <circle cx="38" cy="74" r="5" fill="#FF8BA1" opacity="0.6" />
            <circle cx="82" cy="74" r="5" fill="#FF8BA1" opacity="0.6" />

            {/* Big glossy anime eyes */}
            <circle cx="48" cy="68" r="6" fill="#2D2525" />
            <circle cx="46" cy="65" r="2.2" fill="#FFFFFF" />
            <circle cx="50" cy="70" r="1" fill="#FFFFFF" />

            <circle cx="72" cy="68" r="6" fill="#2D2525" />
            <circle cx="70" cy="65" r="2.2" fill="#FFFFFF" />
            <circle cx="74" cy="70" r="1" fill="#FFFFFF" />

            {/* Tiny happy mouth */}
            <path
              d="M 57,75 Q 60,78 63,75"
              fill="none"
              stroke="#2D2525"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Soft stitch crosses on body */}
            <path d="M 36,48 L 42,54" stroke="#FFF" strokeWidth="2" strokeLinecap="round" />
            <path d="M 42,48 L 36,54" stroke="#FFF" strokeWidth="2" strokeLinecap="round" />

            <path d="M 78,48 L 84,54" stroke="#FFF" strokeWidth="2" strokeLinecap="round" />
            <path d="M 84,48 L 78,54" stroke="#FFF" strokeWidth="2" strokeLinecap="round" />

            {/* Curly Tentacles (Front) */}
            <motion.path
              d="M 33,88 Q 23,101 28,103 Q 33,105 38,94"
              fill="none"
              stroke="#81E6D9"
              strokeWidth="6"
              strokeLinecap="round"
              animate={{ rotate: isHovered ? [-2, 4, -2] : [0, 2, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            />
            <motion.path
              d="M 47,94 Q 44,106 50,107 Q 56,108 55,94"
              fill="none"
              stroke="#81E6D9"
              strokeWidth="6"
              strokeLinecap="round"
              animate={{ rotate: isHovered ? [3, -3, 3] : [0, -1, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
            <motion.path
              d="M 73,94 Q 76,106 70,107 Q 64,108 65,94"
              fill="none"
              stroke="#81E6D9"
              strokeWidth="6"
              strokeLinecap="round"
              animate={{ rotate: isHovered ? [-3, 3, -3] : [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
            />
            <motion.path
              d="M 87,88 Q 97,101 92,103 Q 87,105 82,94"
              fill="none"
              stroke="#81E6D9"
              strokeWidth="6"
              strokeLinecap="round"
              animate={{ rotate: isHovered ? [2, -4, 2] : [0, -2, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            />
          </motion.g>

          {/* Floating tiny yarn needle of luck */}
          <motion.polygon
            points="10,25 20,40 15,45"
            fill="#FFAAA6"
            animate={{
              y: [-2, 2, -2],
              x: [1, -1, 1],
            }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
        </svg>

        {/* Small sparkle icons next to the avatar */}
        <span className="absolute -top-1 -right-2 text-brand-coral group-hover:scale-125 transition-transform duration-300">
          <Sparkles className="h-4 w-4 fill-brand-coral" />
        </span>
      </motion.div>
    </div>
  );
}
