/**
 * Happy Hookers - Types & Interfaces
 */

export interface Review {
  id: string;
  userName: string;
  rating: number;
  date: string;
  comment: string;
  avatar?: string;
}

export type Category = 'Plushies' | 'Bags' | 'Keychains' | 'Home Decor' | 'Custom Orders';

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  images: string[];
  category: Category;
  price: number;
  stock: number;
  rating: number;
  reviews: Review[];
  tags: string[];
  isBestSeller?: boolean;
  isNewArrival?: boolean;
  dimensions?: string;
  materials?: string[];
  careInstructions?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
