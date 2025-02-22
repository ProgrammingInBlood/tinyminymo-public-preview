export const ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    REFRESH_TOKEN: '/auth/refresh-token',
  },
  PRODUCTS: {
    LIST: '/products',
    DETAILS: (id: string) => `/products/${id}`,
    NEW_ARRIVALS: '/products/new-arrivals',
    FEATURED: '/products/featured',
    BY_CATEGORY: (categoryId: string) => `/products/category/${categoryId}`,
    SEARCH: '/products/search',
  },
  CATEGORIES: {
    LIST: '/categories',
    DETAILS: (id: string) => `/categories/${id}`,
    FEATURED: '/categories/featured',
  },
  CART: {
    GET: '/cart',
    ADD: '/cart/add',
    UPDATE: '/cart/update',
    REMOVE: '/cart/remove',
    CLEAR: '/cart/clear',
  },
  USER: {
    PROFILE: '/user/profile',
    UPDATE_PROFILE: '/user/profile/update',
    ORDERS: '/user/orders',
    ORDER_DETAILS: (id: string) => `/user/orders/${id}`,
    WISHLIST: '/user/wishlist',
    ADD_TO_WISHLIST: '/user/wishlist/add',
    REMOVE_FROM_WISHLIST: '/user/wishlist/remove',
  },
  CHECKOUT: {
    INITIATE: '/checkout/initiate',
    PROCESS_PAYMENT: '/checkout/process-payment',
    VERIFY_PAYMENT: '/checkout/verify-payment',
  },
} as const; 