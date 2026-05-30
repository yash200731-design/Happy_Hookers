import React from 'react';
import { motion } from 'motion/react';
import { CalendarDays, Sparkles } from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import ProductCard from '../shared/ProductCard';
import { useRouteStore } from '../../store/routeStore';

export default function NewArrivals() {
  const { navigateTo } = useRouteStore();

  // Search new arrivals or default back to second tranche of items
  const newArrivals = PRODUCTS.filter((p) => p.isNewArrival).slice(0, 4);

  return (
    <section className="py-16 sm:py-24 bg-primary-50/20 dark:bg-neutral-900/10 border-t border-b border-brand-coral/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 text-center sm:text-left">
          <div className="flex flex-col">
            <span className="inline-flex items-center justify-center sm:justify-start gap-1.5 text-xs font-bold text-brand-coral uppercase tracking-widest mb-1 select-none">
              <CalendarDays className="h-3.5 w-3.5" />
              <span>Fresh off the Crochet Hook</span>
            </span>
            <h2 className="font-fredoka font-bold text-2xl sm:text-3.5xl text-neutral-800 dark:text-white tracking-tight leading-none flex items-center justify-center sm:justify-start gap-1.5">
              <span>New Stitched Arrivals</span>
              <Sparkles className="h-5 w-5 text-brand-yellow fill-brand-yellow animate-spin-slow" />
            </h2>
          </div>
          
          <button
            onClick={() => navigateTo('shop')}
            className="self-center sm:self-end font-fredoka font-bold text-xs tracking-widest text-[#FF8BA1] hover:text-primary-600 border border-[#FF8BA1]/20 hover:border-[#FF8BA1] rounded-2xl px-5 py-2.5 bg-[#FF8BA1]/5 transition-colors cursor-pointer"
            id="view-all-newarrivals-btn"
          >
            Check Out What\'s New
          </button>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {newArrivals.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
