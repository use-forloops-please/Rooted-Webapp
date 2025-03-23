import { Product, Vendor } from "@/types";

// src/services/api.ts
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Generic fetch function with error handling
async function fetchData<T>(
  endpoint: string, 
  options: RequestInit = {}
): Promise<T> {
  const response = await fetch(`${API_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Something went wrong');
  }

  return response.json();
}

// Products API
export const productsApi = {
  getAll: () => fetchData<Product[]>('/products'),
  getById: (id: string) => fetchData<Product>(`/products/${id}`),
  create: (product: Omit<Product, 'id'>) => 
    fetchData<Product>('/products', {
      method: 'POST',
      body: JSON.stringify(product),
    }),
  update: (id: string, product: Partial<Product>) => 
    fetchData<Product>(`/products/${id}`, {
      method: 'PUT',
      body: JSON.stringify(product),
    }),
  delete: (id: string) => 
    fetchData<{ message: string }>(`/products/${id}`, {
      method: 'DELETE',
    }),
};

// Vendors API
export const vendorsApi = {
  getAll: () => fetchData<Vendor[]>('/vendors'),
  getById: (id: string) => fetchData<Vendor & { products: Product[] }>(`/vendors/${id}`),
  create: (vendor: Omit<Vendor, 'id'>) => 
    fetchData<Vendor>('/vendors', {
      method: 'POST',
      body: JSON.stringify(vendor),
    }),
  update: (id: string, vendor: Partial<Vendor>) => 
    fetchData<Vendor>(`/vendors/${id}`, {
      method: 'PUT',
      body: JSON.stringify(vendor),
    }),
  delete: (id: string) => 
    fetchData<{ message: string }>(`/vendors/${id}`, {
      method: 'DELETE',
    }),
};