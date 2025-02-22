import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from './axios';
import { ENDPOINTS } from './endpoints';
import type { Product, Category, Cart, Order, User } from '@/types';

export const useProducts = (params?: { category?: string; search?: string }) => {
  return useQuery({
    queryKey: ['products', params],
    queryFn: async () => {
      const { data } = await axiosInstance.get<Product[]>(ENDPOINTS.PRODUCTS.LIST, { params });
      return data;
    },
  });
};

export const useProduct = (id: string) => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: async () => {
      const { data } = await axiosInstance.get<Product>(ENDPOINTS.PRODUCTS.DETAILS(id));
      return data;
    },
  });
};

export const useNewArrivals = () => {
  return useQuery({
    queryKey: ['new-arrivals'],
    queryFn: async () => {
      const { data } = await axiosInstance.get<Product[]>(ENDPOINTS.PRODUCTS.NEW_ARRIVALS);
      return data;
    },
  });
};

export const useCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const { data } = await axiosInstance.get<Category[]>(ENDPOINTS.CATEGORIES.LIST);
      return data;
    },
  });
};

export const useCategory = (id: string) => {
  return useQuery({
    queryKey: ['category', id],
    queryFn: async () => {
      const { data } = await axiosInstance.get<Category>(ENDPOINTS.CATEGORIES.DETAILS(id));
      return data;
    },
  });
};

export const useCart = () => {
  return useQuery({
    queryKey: ['cart'],
    queryFn: async () => {
      const { data } = await axiosInstance.get<Cart>(ENDPOINTS.CART.GET);
      return data;
    },
  });
};

export const useOrders = () => {
  return useQuery({
    queryKey: ['orders'],
    queryFn: async () => {
      const { data } = await axiosInstance.get<Order[]>(ENDPOINTS.USER.ORDERS);
      return data;
    },
  });
};

export const useOrder = (id: string) => {
  return useQuery({
    queryKey: ['order', id],
    queryFn: async () => {
      const { data } = await axiosInstance.get<Order>(ENDPOINTS.USER.ORDER_DETAILS(id));
      return data;
    },
  });
};

export const useWishlist = () => {
  return useQuery({
    queryKey: ['wishlist'],
    queryFn: async () => {
      const { data } = await axiosInstance.get<Product[]>(ENDPOINTS.USER.WISHLIST);
      return data;
    },
  });
};

export const useUserProfile = () => {
  return useQuery({
    queryKey: ['profile'],
    queryFn: async () => {
      const { data } = await axiosInstance.get<User>(ENDPOINTS.USER.PROFILE);
      return data;
    },
  });
}; 