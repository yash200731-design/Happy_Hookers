import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/home/Hero';
import BestSellers from './components/home/BestSellers';
import NewArrivals from './components/home/NewArrivals';
import Reviews from './components/home/Reviews';
import AboutPreview from './components/home/AboutPreview';
import InstagramGallery from './components/home/Instagram';
import Newsletter from './components/home/Newsletter';
import ShopView from './components/shop/ShopView';
import ProductDetailView from './components/product/ProductDetailView';
import CartView from './components/cart/CartView';
import AboutView from './components/about/AboutView';
import ContactView from './components/contact/ContactView';
import WishlistView from './components/wishlist/WishlistView';
import { useRouteStore } from './store/routeStore';

export default function App() {
  const { currentRoute } = useRouteStore();

  const renderActiveRoute = () => {
    switch (currentRoute) {
      case 'home':
        return (
          <>
            <Hero />
            <BestSellers />
            <NewArrivals />
            <Reviews />
            <AboutPreview />
            <InstagramGallery />
            <Newsletter />
          </>
        );
      case 'shop':
        return <ShopView />;
      case 'product-detail':
        return <ProductDetailView />;
      case 'cart':
        return <CartView />;
      case 'about':
        return <AboutView />;
      case 'contact':
        return <ContactView />;
      case 'wishlist':
        return <WishlistView />;
      default:
        return (
          <div className="py-20 text-center">
            <span className="text-4xl">🧶</span>
            <h2 className="font-fredoka font-bold text-lg mt-4 text-neutral-805">Navigation Lost</h2>
            <button
              onClick={() => useRouteStore.getState().navigateTo('home')}
              className="mt-4 px-6 py-2 bg-brand-coral text-white font-bold rounded-xl"
            >
              Go Back Home
            </button>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 text-neutral-900 transition-colors duration-300">
      {/* Dynamic Global Header */}
      <Navbar />

      {/* Main Content Area with Route Transitions */}
      <AnimatePresence mode="wait">
        <motion.main
          key={currentRoute}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          className="flex-grow"
        >
          {renderActiveRoute()}
        </motion.main>
      </AnimatePresence>

      {/* Global Brand Footer */}
      <Footer />
    </div>
  );
}
