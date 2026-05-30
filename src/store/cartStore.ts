import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product, CartItem } from '../types';

interface CartState {
  items: CartItem[];
  addItem: (product: Product, quantity?: number, selectedColor?: string) => void;
  removeItem: (productId: string, selectedColor?: string) => void;
  updateQuantity: (productId: string, quantity: number, selectedColor?: string) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getSubtotal: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (product, quantity = 1, selectedColor) => {
        const currentItems = get().items;
        const existingItemIndex = currentItems.findIndex(
          (item) => item.product.id === product.id && item.selectedColor === selectedColor
        );

        if (existingItemIndex > -1) {
          const updatedItems = [...currentItems];
          const newQuantity = updatedItems[existingItemIndex].quantity + quantity;
          // Clamp quantity to stock limits
          updatedItems[existingItemIndex].quantity = Math.min(newQuantity, product.stock);
          set({ items: updatedItems });
        } else {
          set({
            items: [...currentItems, { product, quantity: Math.min(quantity, product.stock), selectedColor }],
          });
        }
      },

      removeItem: (productId, selectedColor) => {
        set({
          items: get().items.filter(
            (item) => !(item.product.id === productId && item.selectedColor === selectedColor)
          ),
        });
      },

      updateQuantity: (productId, quantity, selectedColor) => {
        if (quantity <= 0) {
          get().removeItem(productId, selectedColor);
          return;
        }

        const currentItems = get().items;
        const itemIndex = currentItems.findIndex(
          (item) => item.product.id === productId && item.selectedColor === selectedColor
        );

        if (itemIndex > -1) {
          const updatedItems = [...currentItems];
          const maxStock = updatedItems[itemIndex].product.stock;
          updatedItems[itemIndex].quantity = Math.min(quantity, maxStock);
          set({ items: updatedItems });
        }
      },

      clearCart: () => set({ items: [] }),

      getTotalItems: () => {
        return get().items.reduce((sum, item) => sum + item.quantity, 0);
      },

      getSubtotal: () => {
        return get().items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
      },
    }),
    {
      name: 'happy-hookers-cart', // key used in localStorage
    }
  )
);
