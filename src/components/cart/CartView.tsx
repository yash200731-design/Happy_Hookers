import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Trash2,
  Gift,
  Truck,
  ArrowRight,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Heart,
  ChevronRight,
  ChevronLeft,
  CheckCircle,
  Percent,
  Plus,
  Minus
} from 'lucide-react';
import { useCartStore } from '../../store/cartStore';
import { useRouteStore } from '../../store/routeStore';
import Mascot from '../mascot/Mascot';

export default function CartView() {
  const { items, updateQuantity, removeItem, clearCart, getSubtotal } = useCartStore();
  const { navigateTo } = useRouteStore();

  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoStatus, setPromoStatus] = useState<'idle' | 'applied' | 'invalid'>('idle');
  const [isSuccessCheckedOut, setIsSuccessCheckedOut] = useState(false);

  const subtotal = getSubtotal();
  const isFreeShipping = subtotal >= 3000;
  const shippingCost = subtotal === 0 ? 0 : isFreeShipping ? 0 : 150;
  const taxCost = subtotal * 0.12; // 12% GST

  const discountValue = subtotal * (discountPercent / 100);
  const finalTotal = subtotal - discountValue + shippingCost + taxCost;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    const normalized = promoCode.trim().toUpperCase();
    if (normalized === 'HAPPYHOOKER10' || normalized === 'OCTO10') {
      setDiscountPercent(10);
      setPromoStatus('applied');
    } else if (normalized === 'KNOTY' || normalized === 'FREESTITCH') {
      setDiscountPercent(15);
      setPromoStatus('applied');
    } else {
      setPromoStatus('invalid');
      setDiscountPercent(0);
    }
  };

  const handleCheckoutSubmit = () => {
    setIsSuccessCheckedOut(true);
    // Clear out cart upon successfully completing the order!
    setTimeout(() => {
      clearCart();
    }, 100);
  };

  if (isSuccessCheckedOut) {
    return (
      <div className="max-w-xl mx-auto px-4 py-16 text-center transition-all duration-300">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white dark:bg-neutral-900 border-2 border-dashed border-brand-coral/30 rounded-3xl p-8 sm:p-12 shadow-sm flex flex-col items-center justify-center relative overflow-hidden"
        >
          {/* Confetti floats */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-coral via-[#FFEAA7] to-[#81E6D9]" />

          {/* Connected Mascot success speech */}
          <Mascot context="success" />

          <h2 className="font-fredoka font-bold text-2xl sm:text-3xl text-neutral-800 dark:text-white mt-6 mb-2">
            Order Dispatched!
          </h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6 font-semibold leading-relaxed max-w-sm">
            Hooray! Our veteran crocheters are already wrapping your custom parcel in zero-plastic wraps with custom flower stickers. We will ping shipping details soon!
          </p>

          <div className="p-4 bg-primary-50/20 dark:bg-neutral-950/45 border border-dashed border-brand-coral/15 rounded-xl text-left w-full text-xs font-semibold flex flex-col gap-1.5 mb-8">
            <span className="font-fredoka font-bold text-sm text-brand-coral">📄 Order Receipt stub</span>
            <div className="flex justify-between mt-1 text-neutral-500">
              <span>Status:</span>
              <span className="text-green-500 font-bold">Stitching In Queue 🧶</span>
            </div>
            <div className="flex justify-between text-neutral-500">
              <span>Est. Delivery:</span>
              <span>June 4 - June 6, 2026</span>
            </div>
          </div>

          <button
            onClick={() => {
              setIsSuccessCheckedOut(false);
              navigateTo('home');
            }}
            className="w-full h-11 bg-brand-coral hover:bg-primary-600 text-white font-fredoka font-bold text-xs tracking-widest rounded-xl transition-all cursor-pointer shadow-xs"
            id="success-home-btn"
          >
            Go Back Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 transition-colors duration-300">
      
      {/* Page Title */}
      <div className="mb-10 text-center sm:text-left">
        <h1 className="font-fredoka font-bold text-3xl text-neutral-800 dark:text-white flex items-center justify-center sm:justify-start gap-2 leading-none">
          <ShoppingBag className="h-7 w-7 text-brand-coral" />
          <span>Your Shopping Bag</span>
        </h1>
        <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1.5 font-semibold">
          Double-check your colorway specs and sizes before starting the hook spinning!
        </p>
      </div>

      <AnimatePresence mode="wait">
        {items.length === 0 ? (
          <motion.div
            key="empty-cart"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="bg-white dark:bg-neutral-900 border border-brand-coral/15 dark:border-white/5 rounded-3xl py-14 px-6 text-center max-w-lg mx-auto flex flex-col items-center shadow-xs"
          >
            <Mascot context="cart" className="mb-6" />
            <h2 className="font-fredoka font-bold text-base sm:text-lg text-neutral-800 dark:text-white mb-2 leading-none">
              Your yarn bag is empty...
            </h2>
            <p className="text-xs text-neutral-450 max-w-xs leading-relaxed mb-6 font-semibold">
              Octo feels lonely! Slide over to the shop floor and find an adorable stuffed buddy to pack inside.
            </p>
            <button
              onClick={() => navigateTo('shop')}
              className="font-fredoka font-bold text-xs tracking-widest px-8 h-11 bg-brand-coral text-white hover:bg-primary-600 rounded-xl transition-all cursor-pointer shadow-xs"
              id="empty-cart-shop-btn"
            >
              Browse Shop Catalog
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="active-cart"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
          >
            
            {/* Left Hand: Items Directory */}
            <div className="lg:col-span-8 flex flex-col gap-4">
              {items.map((item, idx) => (
                <div
                  key={`${item.product.id}-${item.selectedColor}`}
                  className="bg-white dark:bg-neutral-905 border border-brand-coral/10 dark:border-white/5 p-4 sm:p-5 rounded-2xl flex gap-4 sm:gap-5 items-center relative"
                >
                  {/* Thumbnail */}
                  <div
                    className="h-20 w-20 sm:h-24 sm:w-24 rounded-xl overflow-hidden bg-neutral-50 dark:bg-neutral-950 shrink-0 border border-neutral-100 cursor-pointer"
                    onClick={() => navigateTo('product-detail', item.product.id)}
                  >
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="h-full w-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Core details */}
                  <div className="flex-grow flex flex-col justify-center min-w-0 pr-6">
                    <span className="text-[10px] font-bold text-brand-coral uppercase tracking-widest leading-none mb-1">
                      {item.product.category}
                    </span>
                    <h3
                      className="font-fredoka font-bold text-sm sm:text-base text-neutral-800 dark:text-white leading-tight line-clamp-1 truncate hover:text-brand-coral cursor-pointer transition-colors"
                      onClick={() => navigateTo('product-detail', item.product.id)}
                    >
                      {item.product.name}
                    </h3>
                    <p className="text-[11px] text-neutral-450 dark:text-neutral-400 font-bold mt-1.5 select-none leading-none">
                      Threadway: <span className="text-neutral-600 dark:text-neutral-200">{item.selectedColor || 'Default Rose'}</span>
                    </p>

                    {/* Quantity Selector Counter Inside Item row */}
                    <div className="flex items-center gap-2 mt-3 select-none">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1, item.selectedColor)}
                        className="h-6 w-6 rounded-md bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-750 flex items-center justify-center text-neutral-600 dark:text-neutral-300 font-bold text-xs cursor-pointer"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="font-fredoka font-bold text-xs text-neutral-800 dark:text-white min-w-[20px] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1, item.selectedColor)}
                        className="h-6 w-6 rounded-md bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-750 flex items-center justify-center text-neutral-600 dark:text-neutral-300 font-bold text-xs cursor-pointer"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>

                  </div>

                  {/* Subtotal and rubbish remove */}
                  <div className="flex flex-col items-end justify-between self-stretch shrink-0">
                    <button
                      onClick={() => removeItem(item.product.id, item.selectedColor)}
                      className="text-neutral-300 hover:text-brand-coral transition-colors cursor-pointer p-1"
                      aria-label="Delete item"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>

                    <span className="font-fredoka font-bold text-sm sm:text-base text-neutral-800 dark:text-white mb-1">
                      ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                    </span>
                  </div>

                </div>
              ))}

              {/* Keep shopping link footer */}
              <button
                onClick={() => navigateTo('shop')}
                className="self-start inline-flex items-center gap-1.5 text-xs font-bold text-brand-coral hover:underline cursor-pointer py-2 mt-1"
                id="cart-continue-btn"
              >
                <ChevronLeft className="h-4.5 w-4.5" />
                <span>Add More Stitched Pals...</span>
              </button>

            </div>

            {/* Right Hand: Order Summary Calculations card */}
            <div className="lg:col-span-4 flex flex-col gap-5 shrink-0">
              
              <div className="bg-white dark:bg-neutral-900 border border-brand-coral/15 dark:border-white/5 rounded-3xl p-6 shadow-sm flex flex-col gap-4">
                <span className="font-fredoka font-bold text-base text-neutral-800 dark:text-white leading-none border-b border-neutral-105 dark:border-neutral-800 pb-3">
                  Summary calculations
                </span>

                {/* Subtotal */}
                <div className="flex justify-between text-xs sm:text-sm font-semibold">
                  <span className="text-neutral-500">Cart Subtotal</span>
                  <span className="text-neutral-800 dark:text-neutral-200">₹{subtotal.toLocaleString('en-IN')}</span>
                </div>

                {/* Promo Code Discount */}
                {discountPercent > 0 && (
                  <div className="flex justify-between text-xs sm:text-sm font-semibold text-green-500">
                    <span className="flex items-center gap-1">
                      <Percent className="h-3.5 w-3.5" />
                      <span>Discount ({discountPercent}%)</span>
                    </span>
                    <span>-₹{discountValue.toLocaleString('en-IN')}</span>
                  </div>
                )}

                {/* Shipping */}
                <div className="flex justify-between text-xs sm:text-sm font-semibold">
                  <span className="text-neutral-500">Estimated Shipping</span>
                  <span className="text-neutral-800 dark:text-neutral-200">
                    {shippingCost === 0 ? 'FREE' : `₹${shippingCost.toLocaleString('en-IN')}`}
                  </span>
                </div>

                {/* Tax */}
                <div className="flex justify-between text-xs sm:text-sm font-semibold">
                  <span className="text-neutral-500">Estimated GST (12%)</span>
                  <span className="text-neutral-805 dark:text-neutral-200">₹{taxCost.toLocaleString('en-IN')}</span>
                </div>

                {/* Progressive Free shipping bar indicator */}
                {!isFreeShipping && (
                  <div className="bg-primary-50/10 border border-dashed border-brand-coral/10 p-3 rounded-xl flex flex-col gap-1.5 mt-1 text-[11px] font-semibold leading-relaxed">
                    <span className="text-[#FF8BA1] flex items-center gap-1">
                      <Truck className="h-3.5 w-3.5" />
                      <span>Progress limit</span>
                    </span>
                    <span>
                      Add just <span className="font-bold text-[#FF8BA1]">₹{(3000 - subtotal).toLocaleString('en-IN')}</span> more to unlock FREE amigurumi shipping!
                    </span>
                  </div>
                )}

                <hr className="border-neutral-100 dark:border-neutral-800" />

                {/* Final Total */}
                <div className="flex justify-between text-sm sm:text-base font-bold font-fredoka pt-1">
                  <span className="text-neutral-800 dark:text-white">Order Total</span>
                  <span className="text-neutral-800 dark:text-white text-lg">₹{finalTotal.toLocaleString('en-IN')}</span>
                </div>

                {/* Checkout Submit trigger button */}
                <button
                  onClick={handleCheckoutSubmit}
                  className="w-full h-12 bg-brand-coral hover:bg-primary-600 text-white font-fredoka font-bold text-xs tracking-widest rounded-2xl flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-pink-100 dark:shadow-none hover:scale-[1.01] transform active:scale-95 duration-200 mt-2"
                  id="cart-checkout"
                >
                  <span>Complete Checkout</span>
                  <ArrowRight className="h-4.5 w-4.5" />
                </button>

              </div>

              {/* Promo input field coupon */}
              <form onSubmit={handleApplyPromo} className="bg-white dark:bg-neutral-900 border border-brand-coral/10 dark:border-white/5 rounded-3xl p-5 shadow-xs flex flex-col gap-3">
                <span className="text-xs font-bold text-neutral-450 uppercase tracking-wider">
                  Stitch Coupon Code
                </span>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="E.g. HAPPYHOOKER10"
                    value={promoCode}
                    onChange={(e) => {
                      setPromoCode(e.target.value);
                      if (promoStatus === 'invalid') setPromoStatus('idle');
                    }}
                    className="flex-grow h-10 px-3 bg-neutral-50 dark:bg-neutral-950 border border-brand-coral/15 rounded-xl text-xs font-semibold uppercase focus:outline-none"
                    id="promo-code-input"
                  />
                  <button
                    type="submit"
                    className="h-10 px-4 bg-white dark:bg-neutral-900 border border-brand-coral text-brand-coral hover:bg-brand-coral/5 text-xs font-bold rounded-xl cursor-pointer"
                    id="apply-promo-btn"
                  >
                    Apply
                  </button>
                </div>

                {/* Success/Error displays */}
                {promoStatus === 'applied' && (
                  <p className="text-[11px] text-green-500 font-semibold flex items-center gap-1">
                    <CheckCircle className="h-3.5 w-3.5" />
                    <span>Coupon successfully stitched! Discount loaded. 🧶</span>
                  </p>
                )}
                {promoStatus === 'invalid' && (
                  <p className="text-[11px] text-brand-coral font-semibold flex items-center gap-1">
                    <span>⚠️ Unrecognized pattern codes. Try details inside footer news!</span>
                  </p>
                )}
              </form>

            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
