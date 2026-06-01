import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Heart,
  ShoppingCart,
  Star,
  ShieldCheck,
  Truck,
  Sparkles,
  Info,
  Calendar,
  ChevronLeft,
  Share2,
  Check,
  Plus,
  Minus
} from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import { useRouteStore } from '../../store/routeStore';
import { useCartStore } from '../../store/cartStore';
import { useWishlistStore } from '../../store/wishlistStore';
import ProductCard from '../shared/ProductCard';

export default function ProductDetailView() {
  const { activeProductId, navigateTo } = useRouteStore();
  const { addItem } = useCartStore();
  const { toggleWishlist, isInWishlist } = useWishlistStore();

  const [activeImgIdx, setActiveImgIdx] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('Default Rose');
  const [alertFeedback, setAlertFeedback] = useState(false);

  // Fetch product matching route state
  const product = PRODUCTS.find((p) => p.id === activeProductId);

  // Reset states on product changes
  useEffect(() => {
    setActiveImgIdx(0);
    setQuantity(1);
    setSelectedColor('Default Warmth');
  }, [activeProductId]);

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <span className="text-5xl animate-bounce mb-4 block">🧶</span>
        <h2 className="font-fredoka font-bold text-2xl text-neutral-800 dark:text-white mb-4">
          Where is my amigurumi?
        </h2>
        <p className="text-sm text-neutral-500 mb-6 font-semibold">
          We can't seem to locate this specific stitched companion. It may have run away to a cozy spot!
        </p>
        <button
          onClick={() => navigateTo('shop')}
          className="font-fredoka font-bold text-xs tracking-widest px-6 py-2.5 bg-brand-coral text-white rounded-xl cursor-pointer shadow-xs"
        >
          Return to Shop
        </button>
      </div>
    );
  }

  const isFav = isInWishlist(product.id);

  const handleIncrement = () => {
    if (quantity < product.stock) {
      setQuantity((prev) => prev + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    addItem(product, quantity, selectedColor);
    setAlertFeedback(true);
    setTimeout(() => {
      setAlertFeedback(false);
    }, 2000);
  };

  // Find 3 related products in same category (excluding active product)
  const related = PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);
  // Default to bestsellers if not enough items in same category
  if (related.length < 3) {
    const ids = related.map((r) => r.id);
    const extras = PRODUCTS.filter((p) => p.id !== product.id && !ids.includes(p.id)).slice(0, 3 - related.length);
    related.push(...extras);
  }

  const availableColors = ['Classic Thread', 'Baby Mint', 'Lilac Blush', 'Soft Peach'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 transition-colors duration-300">
      
      {/* Back Button */}
      <button
        onClick={() => navigateTo('shop')}
        className="inline-flex items-center gap-1 text-xs font-bold text-neutral-500 dark:text-neutral-400 hover:text-brand-coral cursor-pointer mb-8 group"
        id="detail-back-btn"
      >
        <ChevronLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
        <span>Back to Handmades</span>
      </button>

      {/* Primary Detail Column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-16">
        
        {/* Left Column: Image Gallery View */}
        <div className="lg:col-span-6 flex flex-col gap-4">
          <div className="aspect-square w-full rounded-3xl overflow-hidden border border-brand-coral/10 bg-neutral-50 dark:bg-neutral-950 relative">
            <img
              src={product.images[activeImgIdx] || product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover select-none"
              referrerPolicy="no-referrer"
            />
            {product.isBestSeller && (
              <span className="absolute top-4 left-4 px-3 py-1 bg-brand-yellow text-neutral-800 text-[10px] font-bold uppercase tracking-wider rounded-xl shadow-xs leading-none">
                🔥 Hot Seller
              </span>
            )}
          </div>

          {/* Sub Thumbnails row if multiple images exist */}
          {product.images.length > 1 && (
            <div className="flex gap-3 select-none">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImgIdx(idx)}
                  className={`cursor-pointer h-16 w-16 rounded-xl overflow-hidden border-2 bg-neutral-50 ${
                    idx === activeImgIdx ? 'border-brand-coral' : 'border-neutral-200 dark:border-neutral-800'
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${idx}`} className="h-full w-full object-cover" referrerPolicy="no-referrer" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Specifiers & Form */}
        <div className="lg:col-span-6 flex flex-col gap-5">
          
          {/* Header titles */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold text-brand-coral tracking-widest uppercase">
              {product.category}
            </span>
            <div className="flex items-start justify-between gap-4">
              <h1 className="font-fredoka font-bold text-2xl sm:text-3xl text-neutral-800 dark:text-white leading-tight">
                {product.name}
              </h1>
              
              <button
                onClick={() => toggleWishlist(product)}
                className="p-2 rounded-full border border-neutral-200 dark:border-neutral-800 hover:border-brand-coral transition-colors cursor-pointer text-neutral-400 hover:text-brand-coral"
                aria-label="Save item"
              >
                <Heart className={`h-5 w-5 ${isFav ? 'fill-brand-coral text-brand-coral' : ''}`} />
              </button>
            </div>

            {/* Ratings row */}
            <div className="flex items-center gap-1.5 mt-1">
              <div className="flex text-brand-yellow">
                <Star className="h-4.5 w-4.5 fill-brand-yellow" strokeWidth={0} />
              </div>
              <span className="text-sm font-bold text-neutral-700 dark:text-neutral-300">
                {product.rating.toFixed(1)} / 5.0
              </span>
            </div>
          </div>

          <hr className="border-neutral-100 dark:border-neutral-850" />

          {/* Pricing indicator */}
          <div className="flex items-end gap-2.5">
            <span className="font-fredoka font-bold text-2xl sm:text-3xl text-neutral-800 dark:text-white leading-none">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            <span className="text-xs text-neutral-400 mb-0.5 leading-none">
              Free shipping eligible
            </span>
          </div>

          {/* Item Description */}
          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-semibold">
            {product.description}
          </p>

          {/* Thread / Color variation */}
          <div className="flex flex-col gap-2 pt-2">
            <span className="text-xs font-bold text-neutral-450 dark:text-neutral-500 uppercase tracking-wider">
              Select Colorway
            </span>
            <div className="flex items-center gap-2 select-none">
              {availableColors.map((col) => (
                <button
                  key={col}
                  onClick={() => setSelectedColor(col)}
                  className={`h-9 px-3.5 rounded-xl text-xs font-semibold transition-all border cursor-pointer ${
                    selectedColor === col
                      ? 'border-brand-coral bg-brand-coral/5 text-brand-coral font-bold'
                      : 'border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:border-brand-coral'
                  }`}
                  id={`color-${col.toLowerCase().replace(' ', '-')}`}
                >
                  {col}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity selector and Cart adding */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1">
            
            {/* Quantity Button */}
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold text-neutral-450 dark:text-neutral-500 uppercase tracking-wider">
                Quantity
              </span>
              <div className="h-12 w-32 flex items-center justify-between border border-brand-coral/25 bg-neutral-50/50 dark:bg-neutral-900 rounded-2xl px-2.5">
                <button
                  onClick={handleDecrement}
                  disabled={quantity <= 1}
                  className="h-8 w-8 rounded-lg flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-500 cursor-pointer disabled:opacity-30"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="font-fredoka font-bold text-sm text-neutral-800 dark:text-white select-none">
                  {quantity}
                </span>
                <button
                  onClick={handleIncrement}
                  disabled={quantity >= product.stock}
                  className="h-8 w-8 rounded-lg flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-500 cursor-pointer disabled:opacity-30"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Cart Button */}
            <div className="flex-grow flex flex-col justify-end">
              <div className="h-2 block hidden sm:block" />
              <button
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                className={`w-full h-12 rounded-2xl flex items-center justify-center gap-2 font-fredoka font-bold tracking-widest font-bold text-sm transition-all cursor-pointer ${
                  product.stock === 0
                    ? 'bg-neutral-200 dark:bg-neutral-800 text-neutral-400 dark:text-neutral-500 cursor-not-allowed'
                    : alertFeedback
                    ? 'bg-brand-secondary text-neutral-900 border border-teal-200'
                    : 'bg-brand-coral hover:bg-primary-600 text-white shadow-md shadow-pink-100 dark:shadow-none'
                }`}
                id="add-to-cart-detail"
              >
                <AnimatePresence mode="wait">
                  {alertFeedback ? (
                    <motion.span
                      key="st"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="flex items-center gap-1.5"
                    >
                      <Check className="h-4.5 w-4.5 text-teal-800" />
                      <span>Item Stitched in Bag!</span>
                    </motion.span>
                  ) : (
                    <motion.span
                      key="ct"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="flex items-center gap-2"
                    >
                      <ShoppingCart className="h-4.5 w-4.5" />
                      <span>Add to Shopping Bag</span>
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>

          </div>

          {/* Quick Badges specs info box */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-dashed border-neutral-100 dark:border-neutral-850 text-xs sm:text-sm">
            <div className="flex items-center gap-2.5 text-neutral-600 dark:text-neutral-400 font-semibold select-none">
              <Truck className="h-5 w-5 text-brand-coral shrink-0" />
              <div className="flex flex-col leading-tight">
                <span>Free Shipping</span>
                <span className="text-[10px] text-neutral-400">On batch orders</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5 text-neutral-600 dark:text-neutral-400 font-semibold select-none">
              <ShieldCheck className="h-5 w-5 text-brand-coral shrink-0" />
              <div className="flex flex-col leading-tight">
                <span>100% Cotton</span>
                <span className="text-[10px] text-neutral-400">Hypoallergenic</span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Tabs list: Ingredients & Materials */}
      <div className="border border-brand-coral/10 dark:border-white/5 rounded-3xl p-6 sm:p-8 bg-neutral-50/20 dark:bg-neutral-900/10 mb-16">
        <h3 className="font-fredoka font-bold text-lg text-neutral-800 dark:text-white mb-4 flex items-center gap-2">
          <Info className="h-5 w-5 text-brand-coral" />
          <span>Handicraft Specs & Materials</span>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div className="flex flex-col gap-1">
            <span className="font-bold text-xs uppercase tracking-wider text-neutral-400">Materials used</span>
            <ul className="list-disc pl-4 text-neutral-600 dark:text-neutral-300 font-semibold leading-relaxed">
              {product.materials?.map((m) => (
                <li key={m}>{m}</li>
              )) || (
                <>
                  <li>100% Combed Milk Cotton Yarn</li>
                  <li>Hypoallergenic stuffing</li>
                  <li>Safety lock eyes</li>
                </>
              )}
            </ul>
          </div>

          <div className="flex flex-col gap-1">
            <span className="font-bold text-xs uppercase tracking-wider text-neutral-400">Sizing & dimensions</span>
            <p className="text-neutral-600 dark:text-neutral-300 font-semibold leading-relaxed">
              {product.dimensions || 'Approx 5" Tall • Pocket sized charm'}
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <span className="font-bold text-xs uppercase tracking-wider text-neutral-400">Care details</span>
            <p className="text-neutral-600 dark:text-neutral-300 font-semibold leading-relaxed">
              {product.careInstructions || 'Spot clean only with cold water. Lay flat to dry on white towel.'}
            </p>
          </div>
        </div>
      </div>



      {/* Related Products list */}
      <div>
        <h3 className="font-fredoka font-bold text-xl text-neutral-800 dark:text-white mb-6 text-center sm:text-left">
          More Crochet Friends
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {related.map((item) => (
            <div key={item.id}>
              <ProductCard product={item} />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
