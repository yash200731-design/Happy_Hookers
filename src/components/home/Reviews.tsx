import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star, Quote, Heart } from 'lucide-react';

interface MockReview {
  id: string;
  name: string;
  rating: number;
  role: string;
  comment: string;
  itemBought: string;
  avatar: string;
}

const BRAND_REVIEWS: MockReview[] = [
  {
    id: 'f1',
    name: 'Seraphina Bennett',
    rating: 5,
    role: 'Verified Buyer',
    comment: "I can't believe how soft Oliver the Octopus is! The stitch density is unreal—there are absolutely no holes where stuffing could peek out. It looks beautiful on my bedside drawers and is the ultimate sensory cuddle buddy.",
    itemBought: 'Oliver the Baby Octopus',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
  },
  {
    id: 'f2',
    name: 'Jonathan Miller',
    rating: 5,
    role: 'Ardent Collector',
    comment: "The Custom Pet Portrait doll they did for my dog Rusty is a literal masterwork of art. They captured his white chest splash, his droopy floppy ears, and even his lazy sit! My wife shed real tears when she opened it. Thank you!",
    itemBought: 'Custom Amigurumi Pet Portrait',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
  },
  {
    id: 'f3',
    name: 'Chloe Sinclair',
    rating: 5,
    role: 'Plant Lover',
    comment: "The Ivy Leaf Host Coasters are pure genius! When and family visit, we pull them out, and when done, they tuck inside their little pot. It looks exactly like an Ivy plant hanging on our kitchen bar! Splendid cotton quality.",
    itemBought: 'Hanging Ivy Leaf Coasters (4-Pack)',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150',
  },
  {
    id: 'f4',
    name: 'Liam Peterson',
    rating: 5,
    role: 'Kawaii Enthusiast',
    comment: "Barnaby the Bumblebee and Boba Keychain have literally taken over state of my backpack. I get asked where I got them at least once a day on campus! Super cute, extremely durable, and stitched with pure passion.",
    itemBought: 'Barnaby the Bumblebee',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150',
  }
];

export default function Reviews() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [index]);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % BRAND_REVIEWS.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + BRAND_REVIEWS.length) % BRAND_REVIEWS.length);
  };

  const active = BRAND_REVIEWS[index];

  return (
    <section className="py-16 sm:py-24 bg-white/40 dark:bg-neutral-950/40 backdrop-blur-md transition-colors duration-300 relative overflow-hidden">
      
      {/* Background Decorative Rings */}
      <div className="absolute right-0 top-1/4 w-72 h-72 rounded-full bg-brand-lavender/10 blur-3xl -z-10" />
      <div className="absolute left-0 bottom-1/4 w-72 h-72 rounded-full bg-brand-peach/15 blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header Title */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1 text-xs font-bold text-brand-coral uppercase tracking-widest mb-1.5 select-none">
            <Heart className="h-3.5 w-3.5 fill-brand-coral" />
            <span>Hooker Love Letters</span>
          </span>
          <h2 className="font-fredoka font-bold text-2xl sm:text-3.5xl text-neutral-800 dark:text-white tracking-tight">
            Happy Customer Reviews
          </h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2">
            Stitched from scratch and shared from the heart. Here is what our lovely community thinks!
          </p>
        </div>

        {/* Carousel Slot */}
        <div className="relative min-h-[340px] md:min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="bg-primary-50/15 dark:bg-neutral-900/40 rounded-3xl border border-brand-coral/10 dark:border-white/5 p-6 sm:p-10 flex flex-col md:flex-row gap-6 sm:gap-8 items-center"
            >
              
              {/* Review Avatar & Title */}
              <div className="flex flex-col items-center text-center shrink-0">
                <div className="relative">
                  <img
                    src={active.avatar}
                    alt={active.name}
                    className="w-20 h-20 rounded-full border-4 border-brand-coral/20 object-cover shadow-sm bg-neutral-100"
                    referrerPolicy="no-referrer"
                  />
                  {/* Floating stitch decoration */}
                  <span className="absolute -bottom-1 -right-1 text-base bg-white dark:bg-neutral-850 p-1 rounded-full shadow-xs">🧶</span>
                </div>
                <h4 className="font-fredoka font-bold text-base text-neutral-800 dark:text-white mt-4 leading-none">
                  {active.name}
                </h4>
                <p className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider mt-1.5 leading-none">
                  {active.role}
                </p>
                <span className="inline-block mt-3 px-2.5 py-1 bg-brand-coral/5 text-brand-coral text-[10px] font-bold rounded-full border border-brand-coral/10">
                  Bought: {active.itemBought}
                </span>
              </div>

              {/* Review Quote Body */}
              <div className="flex flex-col gap-3 relative flex-grow text-center md:text-left">
                {/* Quote Indicator Icon */}
                <span className="text-brand-coral/10 absolute -top-4 -left-4 hidden sm:block">
                  <Quote className="h-10 w-10 fill-brand-coral/8" />
                </span>

                {/* Rating Stars */}
                <div className="flex items-center justify-center md:justify-start gap-0.5 text-brand-yellow">
                  {[...Array(active.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-brand-yellow" strokeWidth={0} />
                  ))}
                </div>

                <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 font-medium italic leading-relaxed">
                  "{active.comment}"
                </p>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="absolute -left-2 sm:-left-6 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white dark:bg-neutral-900 border border-neutral-150 dark:border-white/5 hover:border-brand-coral text-neutral-500 hover:text-brand-coral shadow-sm transition-colors cursor-pointer"
            aria-label="Previous review"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="absolute -right-2 sm:-right-6 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white dark:bg-neutral-900 border border-neutral-150 dark:border-white/5 hover:border-brand-coral text-neutral-500 hover:text-brand-coral shadow-sm transition-colors cursor-pointer"
            aria-label="Next review"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Dots Indicators Indicator */}
        <div className="flex justify-center gap-1.5 mt-8 select-none">
          {BRAND_REVIEWS.map((review, idx) => (
            <button
              key={review.id}
              onClick={() => setIndex(idx)}
              className={`h-2.5 rounded-full transition-all cursor-pointer ${
                idx === index ? 'w-6 bg-brand-coral' : 'w-2.5 bg-neutral-200 dark:bg-neutral-800 hover:bg-[#FF8BA1]/40'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
