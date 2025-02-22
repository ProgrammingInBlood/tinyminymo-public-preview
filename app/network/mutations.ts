import { useMutation, useQueryClient } from '@tanstack/react-query';
import { axiosInstance } from './axios';
import { ENDPOINTS } from './endpoints';
import type { LoginData, RegisterData, CartModification, CheckoutData } from '@/types';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: async (data: LoginData) => {
      const response = await axiosInstance.post(ENDPOINTS.AUTH.LOGIN, data);
      return response.data;
    },
  });
};

export const useRegisterMutation = () => {
  return useMutation({
    mutationFn: async (data: RegisterData) => {
      const response = await axiosInstance.post(ENDPOINTS.AUTH.REGISTER, data);
      return response.data;
    },
  });
};

export const useLogoutMutation = () => {
  return useMutation({
    mutationFn: async () => {
      const response = await axiosInstance.post(ENDPOINTS.AUTH.LOGOUT);
      return response.data;
    },
  });
};

export const useAddToCartMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: CartModification) => {
      const response = await axiosInstance.post(ENDPOINTS.CART.ADD, data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
    },
  });
};

export const useUpdateCartMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: CartModification) => {
      const response = await axiosInstance.post(ENDPOINTS.CART.UPDATE, data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
    },
  });
};

export const useRemoveFromCartMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (productId: string) => {
      const response = await axiosInstance.post(ENDPOINTS.CART.REMOVE, { productId });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
    },
  });
};

export const useAddToWishlistMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (productId: string) => {
      const response = await axiosInstance.post(ENDPOINTS.USER.ADD_TO_WISHLIST, { productId });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['wishlist'] });
    },
  });
};

export const useRemoveFromWishlistMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (productId: string) => {
      const response = await axiosInstance.post(ENDPOINTS.USER.REMOVE_FROM_WISHLIST, { productId });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['wishlist'] });
    },
  });
};

export const useCheckoutMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: CheckoutData) => {
      const response = await axiosInstance.post(ENDPOINTS.CHECKOUT.INITIATE, data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
      queryClient.invalidateQueries({ queryKey: ['orders'] });
    },
  });
};

export const useContactFormMutation = () => {
  return useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await axiosInstance.post('/contact', data);
      return response.data;
    },
  });
}; 