import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Heart, Sun, Moon, Search, Menu, X, Gift, Sparkles } from 'lucide-react';
import Logo from './Logo';
import { useRouteStore } from '../../store/routeStore';
import { useCartStore } from '../../store/cartStore';
import { useWishlistStore } from '../../store/wishlistStore';
import { useThemeStore } from '../../store/themeStore';

export default function Navbar() {
  const { currentRoute, navigateTo } = useRouteStore();
  const { getTotalItems } = useCartStore();
  const { items: wishlistItems } = useWishlistStore();
  const { isDarkMode, toggleTheme } = useThemeStore();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const cartCount = getTotalItems();
  const wishlistCount = wishlistItems.length;

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to shop with search trigger (using query string simulation or store)
      // Custom session storage trigger for search query is reliable and fast
      sessionStorage.setItem('shop-search-query', searchQuery);
      navigateTo('shop');
      setSearchQuery('');
    }
  };

  const navLinks = [
    { label: 'Home', route: 'home' as const },
    { label: 'Shop All', route: 'shop' as const },
    { label: 'Our Story', route: 'about' as const },
    { label: 'Get In Touch', route: 'contact' as const },
  ];

  return (
    <>
      {/* Top micro announcement bar */}
      <div className="bg-brand-coral text-white py-1 px-4 text-center text-xs font-semibold tracking-wider flex items-center justify-center gap-2 select-none">
        <Gift className="h-3 w-3 animate-bounce" />
        <span>✨ Free Shipping on amigurumi orders over ₹3,000! ✨</span>
      </div>

      <header className="sticky top-0 z-40 w-full glass-panel transition-all duration-300 border-b border-brand-coral/10 dark:border-white/5 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
          
          {/* Logo */}
          <div className="cursor-pointer" onClick={() => navigateTo('home')}>
            <Logo size="md" />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => {
              const isActive = currentRoute === link.route;
              return (
                <button
                  key={link.label}
                  onClick={() => navigateTo(link.route)}
                  className={`relative font-fredoka font-semibold text-sm lg:text-base tracking-wide transition-colors py-1 cursor-pointer ${
                    isActive
                      ? 'text-brand-coral'
                      : 'text-neutral-600 dark:text-neutral-300 hover:text-brand-coral dark:hover:text-brand-coral'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-coral rounded-full"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right hand controls (Search, Theme, Wishlist, Cart, Mobile Menu button) */}
          <div className="flex items-center gap-2 lg:gap-4">
            
            {/* Search Input (Desktop) */}
            <form onSubmit={handleSearchSubmit} className="hidden lg:flex items-center relative">
              <input
                type="text"
                placeholder="Search yarn buddies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-48 xl:w-60 h-9 pl-3 pr-8 rounded-full border border-brand-coral/20 bg-white/40 dark:bg-neutral-900/40 text-xs font-semibold focus:outline-none focus:border-brand-coral transition-colors"
                id="navbar-search"
              />
              <button
                type="submit"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-brand-coral cursor-pointer"
                id="search-btn"
              >
                <Search className="h-4 w-4" />
              </button>
            </form>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
              aria-label="Toggle Theme"
              id="theme-toggle"
            >
              {isDarkMode ? <Sun className="h-5 w-5 text-brand-yellow" /> : <Moon className="h-5 w-5" />}
            </button>

            {/* Wishlist Icon */}
            <button
              onClick={() => navigateTo('wishlist')}
              className="p-2 rounded-full text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors relative cursor-pointer"
              aria-label="Wishlist"
              id="wishlist-link"
            >
              <Heart className={`h-5 w-5 ${wishlistCount > 0 ? 'fill-brand-coral text-brand-coral' : ''}`} />
              {wishlistCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-brand-coral text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center border-2 border-white dark:border-neutral-900 shadow-sm animate-pulse">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart Icon */}
            <button
              onClick={() => navigateTo('cart')}
              className="p-2 rounded-full text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors relative cursor-pointer"
              aria-label="Cart"
              id="cart-link"
            >
              <ShoppingBag className={`h-5 w-5 ${cartCount > 0 ? 'text-brand-coral' : ''}`} />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-brand-secondary text-neutral-900 text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center border-2 border-white dark:border-neutral-900 shadow-sm">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 -mr-1 rounded-full text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors md:hidden cursor-pointer"
              aria-label="Open menu"
              id="mobile-menu-btn"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>

          </div>
        </div>

        {/* Mobile search bar block */}
        <div className="lg:hidden px-4 pb-2 flex justify-center border-t border-brand-coral/5 pt-2">
          <form onSubmit={handleSearchSubmit} className="relative w-full">
            <input
              type="text"
              placeholder="Search amigurumi creations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-9 pl-3 pr-8 rounded-full border border-brand-coral/20 bg-white/40 dark:bg-neutral-900/40 text-xs font-semibold focus:outline-none focus:border-brand-coral transition-colors"
              id="navbar-mobile-search"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-brand-coral cursor-pointer"
              id="mobile-search-btn"
            >
              <Search className="h-4 w-4" />
            </button>
          </form>
        </div>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-brand-coral/10 dark:border-white/5 bg-white/95 dark:bg-neutral-950/95 overflow-hidden shadow-inner"
            >
              <div className="px-4 pt-2 pb-6 flex flex-col gap-3">
                {navLinks.map((link) => {
                  const isActive = currentRoute === link.route;
                  return (
                    <button
                      key={link.label}
                      onClick={() => {
                        navigateTo(link.route);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`text-left font-fredoka font-semibold text-base py-2 transition-colors ${
                        isActive
                          ? 'text-brand-coral border-l-4 border-brand-coral pl-3'
                          : 'text-neutral-600 dark:text-neutral-300 pl-4 hover:text-brand-coral'
                      }`}
                    >
                      {link.label}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
