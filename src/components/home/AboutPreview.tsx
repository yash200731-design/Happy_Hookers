import React from 'react';
import { motion } from 'motion/react';
import { Heart, ArrowRight, Sparkles } from 'lucide-react';
import { useRouteStore } from '../../store/routeStore';

export default function AboutPreview() {
  const { navigateTo } = useRouteStore();

  return (
    <section className="py-16 sm:py-24 bg-primary-50/10 dark:bg-neutral-900/10 border-t border-brand-coral/5 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Cozy Vector Illustrative card representation */}
          <div className="lg:col-span-6 relative flex justify-center">
            {/* Ambient background blur */}
            <div className="absolute h-64 w-64 rounded-full bg-brand-secondary/15 dark:bg-brand-secondary/5 blur-3xl -z-10" />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              className="bg-white dark:bg-neutral-900 rounded-3xl border border-brand-coral/10 p-5 sm:p-7 relative max-w-[420px] shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src="https://images.unsplash.com/photo-1622560480654-d96214fdc887?auto=format&fit=crop&q=80&w=500"
                alt="Crocheting process"
                className="w-full h-56 sm:h-64 object-cover rounded-2xl mb-5"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              <div className="flex gap-4 items-center">
                {/* Micro branding */}
                <span className="text-3xl sm:text-4xl">🧶</span>
                <div className="flex flex-col">
                  <h4 className="font-fredoka font-bold text-sm sm:text-base text-neutral-800 dark:text-white leading-none">
                    Stitched by Veteran Hookers
                  </h4>
                  <p className="text-xs text-neutral-450 dark:text-neutral-400 mt-1.5 leading-normal">
                    Sustainable bio-degradable fibers. Zero emissions. 100% warm handshakes.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Float badge 1 */}
            <motion.div
              className="absolute top-4 left-6 hidden sm:block"
              animate={{ y: [-4, 4, -4] }}
              transition={{ repeat: Infinity, duration: 3.5 }}
            >
              <span className="bg-brand-mint text-neutral-900 text-[10px] font-bold px-3 py-1.5 rounded-xl border border-teal-100 shadow-sm">
                ⭐ Zero-Plastic Packaging
              </span>
            </motion.div>
          </div>

          {/* Right Column: Mini Story copy */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
            <span className="inline-flex items-center gap-1 text-xs font-bold text-brand-coral uppercase tracking-widest mb-1 select-none">
              <Heart className="h-3.5 w-3.5 fill-brand-coral" />
              <span>Behind the stitches</span>
            </span>
            
            <h2 className="font-fredoka font-bold text-2xl sm:text-3.5xl text-neutral-800 dark:text-white tracking-tight leading-none mb-5">
              The Happy Hookers Story
            </h2>

            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4 font-medium">
              We started in a sunlit kitchen corner in 2026, armed with size-H hooks, skeins of soft pastel cotton thread, and an endless desire to create adorable companions who would never feel lonely.
            </p>

            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6 font-medium">
              Today, Happy Hookers is a collective of devoted, veteran crochet artists. We reject conveyor-belt factory molding entirely. Every single item we wrap has spent hours tumbling through custom stitches, built exclusively by human hands.
            </p>

            <button
              onClick={() => navigateTo('about')}
              className="h-11 px-6 bg-brand-coral hover:bg-primary-600 text-white font-fredoka font-bold text-xs tracking-widest rounded-xl flex items-center gap-1.5 transition-all cursor-pointer shadow-xs"
              id="about-preview-story-btn"
            >
              <span>Our Full Journey</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
