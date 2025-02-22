export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  tag?: string;
  description: string;
  category: string;
  inStock: boolean;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  count: string;
  slug: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData extends LoginData {
  name: string;
}

export interface CartModification {
  productId: string;
  quantity: number;
}

export interface CheckoutData {
  address: {
    line1: string;
    line2?: string;
    city: string;
    state: string;
    pincode: string;
  };
  paymentMethod: 'card' | 'upi' | 'cod';
} 