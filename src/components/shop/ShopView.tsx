import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, SlidersHorizontal, Search, RotateCcw, AlertTriangle, ArrowUpDown, HelpCircle } from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import { Category, Product } from '../../types';
import ProductCard from '../shared/ProductCard';

export default function ShopView() {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [maxPrice, setMaxPrice] = useState(13000);

  // Check storage on load for deep linking configurations (e.g. search from navbar, or footer link)
  useEffect(() => {
    const navSearch = sessionStorage.getItem('shop-search-query');
    if (navSearch) {
      setSearchQuery(navSearch);
      sessionStorage.removeItem('shop-search-query');
    }

    const footerCat = sessionStorage.getItem('shop-category-filter');
    if (footerCat) {
      setSelectedCategory(footerCat as Category);
      sessionStorage.removeItem('shop-category-filter');
    }
  }, []);

  const handleResetFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
    setSortBy('featured');
    setMaxPrice(13000);
  };

  // Filter products
  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesPrice = product.price <= maxPrice;
    const matchesSearch =
      searchQuery.trim() === '' ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesPrice && matchesSearch;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    // 'featured' sorting (bestsellers first)
    const aVal = (a.isBestSeller ? 2 : 0) + (a.isNewArrival ? 1 : 0);
    const bVal = (b.isBestSeller ? 2 : 0) + (b.isNewArrival ? 1 : 0);
    return bVal - aVal;
  });

  const categories: (Category | 'All')[] = ['All', 'Plushies', 'Bags', 'Keychains', 'Home Decor', 'Custom Orders'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 transition-colors duration-300">
      
      {/* Banner / Title Panel */}
      <div className="bg-gradient-to-r from-primary-50 to-[#E2D4F0]/20 dark:from-brand-peach/15 dark:to-neutral-50 rounded-3xl p-6 md:p-10 mb-10 border border-brand-coral/10 text-center md:text-left shadow-xs">
        <h1 className="font-fredoka font-bold text-3xl sm:text-4.5xl text-neutral-800 dark:text-white leading-none">
          Browse Handcrafted Creepy-Cutes
        </h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2 max-w-2xl font-medium">
          Denser knots, premium combed milk-cotton, and hand-stitched safety eyes. Explore plush toys, high fashion granny square bags, customized keychains, and custom memory portraits.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Left Side: Sorting and Filter Panel */}
        <div className="lg:col-span-1 flex flex-col gap-6.5 shrink-0">
          
          <div className="bg-white dark:bg-neutral-900 border border-brand-coral/15 dark:border-white/5 rounded-3xl p-6.5">
            <div className="flex items-center justify-between border-b border-neutral-100 dark:border-neutral-800 pb-4 mb-5">
              <span className="font-fredoka font-bold text-base text-neutral-800 dark:text-white flex items-center gap-1.5 leading-none">
                <SlidersHorizontal className="h-4.5 w-4.5 text-brand-coral" />
                <span>Filters</span>
              </span>
              <button
                onClick={handleResetFilters}
                className="text-xs text-brand-coral font-bold flex items-center gap-1 hover:underline cursor-pointer"
                id="reset-filters"
              >
                <RotateCcw className="h-3 w-3" />
                <span>Reset</span>
              </button>
            </div>

            {/* Keyword Search Input */}
            <div className="mb-5 flex flex-col gap-2">
              <label htmlFor="shop-search" className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
                Keyword search
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Yarn / bee / clover..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-10 pl-3 pr-8 rounded-xl border border-brand-coral/20 bg-neutral-50 dark:bg-neutral-950 text-xs font-semibold focus:outline-none focus:border-brand-coral transition-colors"
                  id="shop-search"
                />
                <Search className="h-4 w-4 absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400" />
              </div>
            </div>

            {/* Category selection */}
            <div className="mb-6 flex flex-col gap-2">
              <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-1">
                Category
              </span>
              <div className="flex flex-col gap-1.5">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`h-9 px-3.5 rounded-xl text-left text-xs font-semibold tracking-wide flex items-center justify-between transition-colors cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-brand-coral text-white font-bold font-fredoka'
                        : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-950'
                    }`}
                    id={`filter-${cat.toLowerCase().replace(' ', '-')}`}
                  >
                    <span>{cat}</span>
                    <span className="text-[10px] opacity-70">
                      ({cat === 'All' ? PRODUCTS.length : PRODUCTS.filter(p => p.category === cat).length})
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Price Cap Slide */}
            <div className="mb-6 flex flex-col gap-2">
              <div className="flex items-center justify-between font-semibold">
                <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
                  Max Budget
                </span>
                <span className="font-fredoka font-bold text-sm text-brand-coral leading-none">
                  ₹{maxPrice.toLocaleString('en-IN')}
                </span>
              </div>
              <input
                type="range"
                min="500"
                max="13000"
                step="100"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-[#FF8BA1] cursor-pointer"
                id="shop-price-slider"
              />
              <div className="flex justify-between text-[10px] text-neutral-450 mt-1 font-semibold">
                <span>₹500</span>
                <span>₹13,000</span>
              </div>
            </div>

            {/* Sort Dropdown simulated */}
            <div className="flex flex-col gap-2">
              <label htmlFor="shop-sort" className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
                Sort By
              </label>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="w-full h-10 px-3 rounded-xl border border-brand-coral/20 bg-neutral-50 dark:bg-neutral-950 text-xs font-semibold focus:outline-none focus:border-brand-coral cursor-pointer"
                  id="shop-sort"
                >
                  <option value="featured">🔥 Recommended</option>
                  <option value="price-asc">💵 Price: Low to High</option>
                  <option value="price-desc">💵 Price: High to Low</option>
                  <option value="rating">⭐ Rated: Top First</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-400">
                  <ArrowUpDown className="h-3.5 w-3.5" />
                </div>
              </div>
            </div>

          </div>

          {/* Quick FAQ small reminder */}
          <div className="hidden lg:flex bg-[#FFEAA7]/10 dark:bg-[#FFEAA7]/5 border-2 border-dashed border-[#FFEAA7]/30 rounded-3xl p-5 gap-3 items-start select-none">
            <HelpCircle className="h-5 w-5 text-brand-yellow shrink-0 mt-0.5" />
            <div className="flex flex-col gap-1">
              <span className="font-fredoka font-bold text-xs text-neutral-800 dark:text-neutral-100">
                Washing instructions?
              </span>
              <p className="text-[11px] text-neutral-500 leading-relaxed font-semibold">
                Most toys can wash on delicate cold cycles in mesh garments! Cardigans/bags thrive with dry clean blockings.
              </p>
            </div>
          </div>

        </div>

        {/* Right Side: Products Grid Display */}
        <div className="lg:col-span-3">
          
          <div className="flex items-center justify-between mb-6">
            <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 font-bold">
              Showing <span className="text-brand-coral">{sortedProducts.length}</span> results matching your mood
            </p>
          </div>

          {/* Grid display block */}
          <AnimatePresence mode="popLayout">
            {sortedProducts.length > 0 ? (
              <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7"
              >
                {sortedProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-neutral-900 rounded-3xl border border-brand-coral/15 dark:border-white/5 py-16 px-6 text-center shadow-xs flex flex-col items-center justify-center max-w-xl mx-auto mt-6"
              >
                <span className="text-5xl animate-bounce mb-4">😿</span>
                <span className="font-fredoka font-bold text-base text-neutral-800 dark:text-white mb-2 leading-none">
                  No yarn buddies found...
                </span>
                <p className="text-xs text-neutral-400 max-w-md leading-relaxed font-semibold mb-6">
                  We scanned our crochet catalog twice but couldn't find matches for <span className="font-bold text-brand-coral">"{searchQuery || selectedCategory}"</span> under ${maxPrice}. Try relaxing your filter caps or search parameters!
                </p>

                <button
                  onClick={handleResetFilters}
                  className="font-fredoka font-bold text-xs tracking-widest px-6 py-2.5 bg-brand-coral text-white hover:bg-primary-600 rounded-xl transition-all cursor-pointer shadow-xs"
                  id="reset-all-filters-cta"
                >
                  Clear All Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>

    </div>
  );
}
