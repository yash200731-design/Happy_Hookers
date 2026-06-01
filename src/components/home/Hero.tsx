import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Heart, Pin } from 'lucide-react';
import Mascot from '../mascot/Mascot';
import { useRouteStore } from '../../store/routeStore';

export default function Hero() {
  const { navigateTo } = useRouteStore();

  const handleCustomOrderClick = () => {
    sessionStorage.setItem('shop-category-filter', 'Custom Orders');
    navigateTo('shop');
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-50/50 to-white/10 dark:from-primary-50/20 dark:to-neutral-50/10 py-12 md:py-20 lg:py-28 transition-colors duration-300">
      
      {/* Absolute Decorative Floating Elements */}
      {/* Floating Yarn Ball 1 (Rose Pink) */}
      <motion.div
        className="absolute top-10 left-[8%] hidden sm:block pointer-events-none opacity-40 dark:opacity-20"
        animate={{
          y: [-15, 15, -15],
          rotate: [0, 360],
        }}
        transition={{
          repeat: Infinity,
          duration: 9,
          ease: "easeInOut",
        }}
      >
        <span className="text-4xl">🧶</span>
      </motion.div>

      {/* Floating Yarn Ball 2 (Mint Green) */}
      <motion.div
        className="absolute bottom-16 left-[5%] hidden md:block pointer-events-none opacity-40 dark:opacity-20"
        animate={{
          y: [12, -12, 12],
          rotate: [360, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 11,
          ease: "easeInOut",
        }}
      >
        <span className="text-3.5xl">🟢</span>
      </motion.div>

      {/* Floating Sparkle/Heart Group */}
      <motion.div
        className="absolute top-20 right-[15%] hidden lg:block pointer-events-none opacity-60"
        animate={{
          scale: [0.9, 1.1, 0.9],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: "easeInOut",
        }}
      >
        <Sparkles className="h-6 w-6 text-brand-yellow fill-brand-yellow" />
      </motion.div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bold Copy & CTAs */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Tag / Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-coral/10 dark:bg-brand-coral/20 border border-brand-coral/25 rounded-full text-brand-coral dark:text-brand-coral text-xs font-bold uppercase tracking-wider mb-6 select-none"
            >
              <Heart className="h-3 w-3 fill-brand-coral animate-pulse" />
              <span>Cozy Crochet Magic • Est. 2026</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-fredoka font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-brand-coral dark:text-brand-coral leading-none mb-4"
            >
              Modern stitches. <br />
              <span>Timeless style</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg lg:text-xl text-neutral-600 dark:text-neutral-300 max-w-lg mb-8 leading-relaxed font-medium"
            >
              Explore handcrafted crochet creations for every occasion
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <button
                onClick={() => navigateTo('shop')}
                className="w-full sm:w-auto h-12 px-8 bg-brand-coral hover:bg-primary-600 text-white font-fredoka font-bold text-sm tracking-widest rounded-2xl flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-pink-100 dark:shadow-none hover:shadow-lg hover:scale-[1.02] transform transition-all active:scale-[0.98]"
                id="hero-shop-btn"
              >
                <span>Shop Now</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                onClick={handleCustomOrderClick}
                className="w-full sm:w-auto h-12 px-8 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 text-brand-coral border-2 border-brand-coral/25 rounded-2xl font-fredoka font-bold text-sm tracking-widest flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:scale-[1.02] transform transition-all active:scale-[0.98]"
                id="hero-custom-btn"
              >
                <span>Custom Orders</span>
              </button>
            </motion.div>

            {/* Micro stats banner */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-12 flex items-center gap-6 text-neutral-400 dark:text-neutral-500 font-bold font-fredoka uppercase tracking-widest text-[10px] md:text-xs"
            >
              <div>⭐⭐⭐⭐⭐ 100+ Chibi Plushes Wrapped</div>
              <div className="h-3 w-px bg-neutral-200 dark:bg-white/10" />
              <div>🧶 Human-Crafted Stitching</div>
            </motion.div>

          </div>

          {/* Right Column: Dynamic Interactive Bento Stage */}
          <div className="flex justify-center items-center relative py-8">
            {/* Background glowing rings */}
            <div className="absolute h-56 sm:h-80 w-56 sm:w-80 rounded-full bg-brand-coral/10 dark:bg-brand-coral/5 blur-3xl -z-10" />
            <div className="absolute h-40 sm:h-60 w-40 sm:w-60 rounded-full bg-brand-secondary/10 dark:bg-brand-secondary/5 blur-3xl -z-10 -bottom-10" />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative p-6 sm:p-8 bg-white/40 dark:bg-neutral-900/20 backdrop-blur-md rounded-3xl border border-brand-coral/15 flex flex-col items-center shadow-lg"
            >
              {/* Pin on top of bento box */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-brand-coral">
                <Pin className="h-5 w-5 fill-brand-coral rotate-45" />
              </div>

              {/* Primary Interactive Mascot Character */}
              <Mascot context="general" />

              {/* Tiny speech pointer note */}
              <p className="text-[10px] sm:text-xs font-semibold text-neutral-400 dark:text-neutral-500 mt-4 max-w-[200px] text-center select-none leading-relaxed">
                👋 Try clicking on Oliver the Octopus to see what he says!
              </p>
            </motion.div>

            {/* Little floating elements beside the mascot */}
            <motion.div
              className="absolute -top-4 -right-1 hidden md:block"
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            >
              <div className="bg-brand-lavender text-neutral-800 text-[10px] font-bold px-2.5 py-1.5 rounded-xl rotate-12 shadow-sm border border-neutral-200 dark:border-neutral-800">
                ⭐ 100% Cotton
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-6 hidden md:block"
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
            >
              <div className="bg-brand-yellow text-neutral-800 text-[10px] font-bold px-2.5 py-1.5 rounded-xl -rotate-12 shadow-sm border border-neutral-200 dark:border-neutral-800">
                🌸 Sensory Safe
              </div>
            </motion.div>

          </div>

        </div>
      </div>
      
    </section>
  );
}
