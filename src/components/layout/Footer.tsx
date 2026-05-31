import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Instagram, Facebook, Mail, Heart, Github, Send, AlertCircle, CheckCircle } from 'lucide-react';
import Logo from './Logo';
import { useRouteStore } from '../../store/routeStore';
import { Category } from '../../types';

export default function Footer() {
  const { navigateTo } = useRouteStore();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1000);
  };

  const handleCategoryClick = (category: Category) => {
    sessionStorage.setItem('shop-category-filter', category);
    navigateTo('shop');
  };

  const categories: Category[] = ['Plushies', 'Bags', 'Keychains', 'Home Decor', 'Custom Orders'];

  return (
    <footer className="bg-neutral-50/70 dark:bg-neutral-950/70 backdrop-blur-md border-t border-brand-coral/10 dark:border-white/5 pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Introduction */}
          <div className="flex flex-col gap-4">
            <Logo size="md" showText={true} animated={false} />
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2 leading-relaxed">
              Whimsical, high-quality, 100% handmade crochet creations crafted to spread joy, cozy smiles, and tactile comfort across the globe.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-4">
              <a
                href="#instagram"
                className="p-2 rounded-full bg-brand-coral/10 hover:bg-brand-coral/20 text-brand-coral transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#facebook"
                className="p-2 rounded-full bg-brand-coral/10 hover:bg-brand-coral/20 text-brand-coral transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#email"
                className="p-2 rounded-full bg-brand-coral/10 hover:bg-brand-coral/20 text-brand-coral transition-colors"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Directory Shop Links */}
          <div>
            <h3 className="font-fredoka font-bold text-sm text-neutral-800 dark:text-neutral-100 uppercase tracking-widest mb-4">
              Shop Categories
            </h3>
            <ul className="flex flex-col gap-2.5">
              {categories.map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => handleCategoryClick(cat)}
                    className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-brand-coral dark:hover:text-brand-coral transition-colors cursor-pointer"
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-fredoka font-bold text-sm text-neutral-800 dark:text-neutral-100 uppercase tracking-widest mb-4">
              Warm Hub links
            </h3>
            <ul className="flex flex-col gap-2.5">
              <li>
                <button
                  onClick={() => navigateTo('home')}
                  className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-brand-coral transition-colors cursor-pointer"
                >
                  Home Showcase
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('shop')}
                  className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-brand-coral transition-colors cursor-pointer"
                >
                  Browse Shop
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('about')}
                  className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-brand-coral transition-colors cursor-pointer"
                >
                  Our Passion Story
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('contact')}
                  className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-brand-coral transition-colors cursor-pointer"
                >
                  Get In Touch / FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('wishlist')}
                  className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-brand-coral transition-colors cursor-pointer"
                >
                  Your Saved Wishlist
                </button>
              </li>
            </ul>
          </div>

          {/* Integrated Newsletter Form */}
          <div>
            <h3 className="font-fredoka font-bold text-sm text-neutral-800 dark:text-neutral-100 uppercase tracking-widest mb-4">
              Stitch Newsletter
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-4 leading-relaxed">
              Stay updated on launch batch notifications, restock alerts, crochet secret patterns, and happy bundle discounts!
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your cozy email..."
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-10 pl-3 pr-10 rounded-xl border border-brand-coral/20 bg-white dark:bg-neutral-900 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-brand-coral focus:border-brand-coral transition-colors"
                  id="footer-email-input"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="absolute right-1 top-1 bottom-1 px-3 bg-brand-coral hover:bg-primary-600 text-white rounded-lg flex items-center justify-center transition-colors cursor-pointer disabled:opacity-50"
                  id="footer-subscribe-btn"
                >
                  <Send className="h-3 w-3" />
                </button>
              </div>

              {/* Status messages */}
              {status === 'success' && (
                <div className="flex items-center gap-1.5 text-[11px] text-green-500 dark:text-green-400 mt-1 font-semibold">
                  <CheckCircle className="h-3 w-3" />
                  <span>Stitched! Welcome to the loop. 🧶</span>
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brand-coral/10 dark:border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
          <p className="text-xs text-neutral-400 dark:text-neutral-500">
            © 2026 Happy Hookers. All rights reserved. • Established inside the internet loop.
          </p>
          <p className="text-xs text-neutral-400 dark:text-neutral-500 flex items-center gap-1">
            Handcrafted with <Heart className="h-3 w-3 fill-brand-coral text-brand-coral animate-pulse" /> using sustainable milk-cotton fibers.
          </p>
        </div>

      </div>
    </footer>
  );
}
