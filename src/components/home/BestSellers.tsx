import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeftRight, Heart, Sparkles, TrendingUp } from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import ProductCard from '../shared/ProductCard';
import { useRouteStore } from '../../store/routeStore';

export default function BestSellers() {
  const { navigateTo } = useRouteStore();

  // Pick top 4 products with best seller flag
  const bestSellers = PRODUCTS.filter((p) => p.isBestSeller).slice(0, 4);

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-neutral-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 text-center sm:text-left">
          <div className="flex flex-col">
            <span className="inline-flex items-center justify-center sm:justify-start gap-1 text-xs font-bold text-brand-coral uppercase tracking-widest mb-1 select-none">
              <TrendingUp className="h-3.5 w-3.5 animate-pulse" />
              <span>DTC Hot Favorites</span>
            </span>
            <h2 className="font-fredoka font-bold text-2xl sm:text-3.5xl text-neutral-800 dark:text-white tracking-tight leading-none">
              Most Loved Plushies
            </h2>
          </div>
          
          <button
            onClick={() => navigateTo('shop')}
            className="self-center sm:self-end font-fredoka font-bold text-xs tracking-widest text-[#FF8BA1] hover:text-primary-600 border border-[#FF8BA1]/20 hover:border-[#FF8BA1] rounded-2xl px-5 py-2.5 bg-[#FF8BA1]/5 transition-colors cursor-pointer"
            id="view-all-bestsellers-btn"
          >
            Explore Full Shop
          </button>
        </div>

        {/* Product Cards Grid Structure */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {bestSellers.map((product, idx) => (
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
