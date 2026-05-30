import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, ShoppingCart, Star, HeartCrack, Check } from 'lucide-react';
import { Product } from '../../types';
import { useRouteStore } from '../../store/routeStore';
import { useCartStore } from '../../store/cartStore';
import { useWishlistStore } from '../../store/wishlistStore';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { navigateTo } = useRouteStore();
  const { addItem } = useCartStore();
  const { toggleWishlist, isInWishlist } = useWishlistStore();

  const [addedFeedback, setAddedFeedback] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const isFav = isInWishlist(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation(); // prevent card click navigation
    addItem(product, 1);
    setAddedFeedback(true);
    setTimeout(() => {
      setAddedFeedback(false);
    }, 1500);
  };

  const handleToggleFav = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleWishlist(product);
  };

  return (
    <motion.div
      onClick={() => navigateTo('product-detail', product.id)}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -6 }}
      className="bg-white dark:bg-neutral-900 rounded-3xl border border-brand-coral/10 dark:border-white/5 overflow-hidden shadow-sm hover:shadow-md hover:border-brand-coral/20 cursor-pointer flex flex-col group select-none transition-all duration-300 relative h-full"
    >
      
      {/* Top badges & Wishlist Button overlay */}
      <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between z-10 pointer-events-none">
        {/* Badges */}
        <div className="flex flex-col gap-1.5 items-start">
          {product.isBestSeller && (
            <span className="px-2.5 py-1 bg-brand-yellow text-neutral-800 text-[10px] font-bold uppercase tracking-wider rounded-xl shadow-xs">
              🔥 Best Seller
            </span>
          )}
          {product.stock <= 5 && (
            <span className="px-2.5 py-1 bg-orange-100 dark:bg-orange-950/80 text-orange-600 dark:text-orange-400 text-[10px] font-bold uppercase tracking-wider rounded-xl">
              ⏳ Only {product.stock} Left!
            </span>
          )}
        </div>

        {/* Wishlist Toggle Button (Reacts to pointer event) */}
        <button
          onClick={handleToggleFav}
          className="pointer-events-auto h-8 w-8 rounded-full bg-white/90 dark:bg-neutral-800/90 hover:bg-white dark:hover:bg-neutral-800 flex items-center justify-center text-neutral-400 hover:text-brand-coral transition-colors shadow-xs cursor-pointer active:scale-90"
          aria-label={isFav ? 'Remove from wishlist' : 'Add to wishlist'}
          id={`wishlist-btn-${product.id}`}
        >
          <Heart className={`h-4.5 w-4.5 transition-transform duration-300 ${isFav ? 'fill-brand-coral text-brand-coral scale-110' : ''}`} />
        </button>
      </div>

      {/* Image Gallery Slot */}
      <div className="aspect-square relative w-full overflow-hidden bg-neutral-100 dark:bg-neutral-950">
        <motion.img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        {/* Soft gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Info Body */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow">
        
        {/* Category banner */}
        <span className="text-[10px] md:text-xs font-bold text-brand-coral tracking-widest uppercase mb-1">
          {product.category}
        </span>

        {/* Product Title */}
        <h3 className="font-fredoka font-bold text-sm sm:text-base text-neutral-800 dark:text-white leading-normal line-clamp-1 mb-1.5 group-hover:text-brand-coral transition-colors">
          {product.name}
        </h3>

        {/* Rating and Reviews count */}
        <div className="flex items-center gap-1 mb-3">
          <div className="flex items-center text-brand-yellow">
            <Star className="h-3.5 w-3.5 fill-brand-yellow" strokeWidth={0} />
          </div>
          <span className="text-[11px] sm:text-xs font-bold text-neutral-700 dark:text-neutral-300">
            {product.rating.toFixed(1)}
          </span>
          <span className="text-[10px] sm:text-[11px] text-neutral-400">
            ({product.reviews.length})
          </span>
        </div>

        {/* Price and Cart controls */}
        <div className="mt-auto flex items-center justify-between gap-2.5 pt-3 border-t border-dashed border-neutral-100 dark:border-neutral-800">
          <div className="flex flex-col">
            <span className="font-fredoka font-bold text-base sm:text-lg text-neutral-800 dark:text-white leading-none">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            <span className="text-[9px] text-neutral-400 font-semibold mt-0.5 select-none">
              includes tax
            </span>
          </div>

          {/* Quick Add Button */}
          <button
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            className={`cursor-pointer h-9 px-3.5 sm:px-4 rounded-xl flex items-center gap-1.5 font-fredoka font-bold text-xs tracking-wider transition-all duration-300 ${
              product.stock === 0
                ? 'bg-neutral-100 dark:bg-neutral-800 text-neutral-400 dark:text-neutral-500 cursor-not-allowed'
                : addedFeedback
                ? 'bg-brand-secondary text-neutral-900 border border-teal-200'
                : 'bg-primary-50 dark:bg-brand-coral/10 hover:bg-brand-coral hover:text-white text-brand-coral dark:text-brand-coral hover:shadow-xs transition-colors'
            }`}
            id={`quick-add-${product.id}`}
          >
            <AnimatePresence mode="wait">
              {addedFeedback ? (
                <motion.span
                  key="check"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="flex items-center gap-1.5"
                >
                  <Check className="h-3.5 w-3.5 text-teal-800" />
                  <span>Stitched!</span>
                </motion.span>
              ) : (
                <motion.span
                  key="cart"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="flex items-center gap-1.5"
                >
                  <ShoppingCart className="h-3.5 w-3.5" />
                  <span>Add</span>
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>

      </div>

    </motion.div>
  );
}
