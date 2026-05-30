import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, ShoppingBag, FolderHeart, ChevronLeft, ArrowRight } from 'lucide-react';
import { useWishlistStore } from '../../store/wishlistStore';
import { useRouteStore } from '../../store/routeStore';
import ProductCard from '../shared/ProductCard';

export default function WishlistView() {
  const { items } = useWishlistStore();
  const { navigateTo } = useRouteStore();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 transition-colors duration-300">
      
      {/* Page Title */}
      <div className="mb-10 text-center sm:text-left flex flex-col sm:flex-row items-center sm:items-end justify-between gap-4">
        <div className="flex flex-col">
          <h1 className="font-fredoka font-bold text-3xl text-neutral-800 dark:text-white flex items-center justify-center sm:justify-start gap-2 leading-none">
            <Heart className="h-7 w-7 text-brand-coral fill-brand-coral" />
            <span>Saved Wishlist</span>
          </h1>
          <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1.5 font-semibold">
            Track your favorite dream amigurumis and knit companions in one simple hub!
          </p>
        </div>

        <button
          onClick={() => navigateTo('shop')}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-coral hover:underline"
          id="wishlist-shop-btn"
        >
          <span>Continue Shopping</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      {/* Grid listing */}
      <AnimatePresence mode="wait">
        {items.length === 0 ? (
          <motion.div
            key="empty-wishlist"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="bg-white dark:bg-neutral-900 border border-brand-coral/15 dark:border-white/5 rounded-3xl py-16 px-6 text-center max-w-lg mx-auto flex flex-col items-center shadow-xs"
          >
            <span className="text-5xl animate-pulse mb-4">🩹</span>
            <h2 className="font-fredoka font-bold text-base sm:text-lg text-neutral-800 dark:text-white mb-2 leading-none">
              Your wishlist is silent...
            </h2>
            <p className="text-xs text-neutral-450 max-w-xs leading-relaxed mb-6 font-semibold">
              No favorites marked yet! Browse our catalog, click the sweet heart buttons on any plush, and they'll gather here.
            </p>
            <button
              onClick={() => navigateTo('shop')}
              className="font-fredoka font-bold text-xs tracking-widest px-8 h-11 bg-brand-coral text-white hover:bg-primary-600 rounded-xl transition-all cursor-pointer shadow-xs"
              id="empty-wishlist-cta"
            >
              Browse Shop Catalog
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="active-wishlist"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          >
            {items.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
