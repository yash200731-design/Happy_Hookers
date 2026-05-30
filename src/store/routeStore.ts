import { create } from 'zustand';

export type AppRoute = 'home' | 'shop' | 'product-detail' | 'cart' | 'about' | 'contact' | 'wishlist';

interface RouteState {
  currentRoute: AppRoute;
  activeProductId: string | null;
  navigateTo: (route: AppRoute, productId?: string | null) => void;
}

export const useRouteStore = create<RouteState>((set) => ({
  currentRoute: 'home',
  activeProductId: null,

  navigateTo: (route, productId = null) => {
    set({ currentRoute: route, activeProductId: productId });
    // Scroll smoothly to top on route navigation
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  },
}));
