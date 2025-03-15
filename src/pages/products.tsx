import React from 'react';
import ProductGrid from '../components/Products/ProductGrid';
import Layout from '@/components/layout/layout';

const ProductsPage: React.FC = () => {
  // Mock data - replace with actual data fetching when we add the API
  const products = [
    {
      id: '1',
      name: 'Fresh Tomatoes',
      price: 3.99,
      category: 'Vegetables',
      vendor: 'Green Acres Farm',
      description: 'Locally grown organic tomatoes',
      inStock: true,
    },
    {
      id: '2',
      name: 'Fresh Apples',
      price: 3.99,
      category: 'Vegetables',
      vendor: 'Green Acres Farm',
      description: 'Locally grown organic tomatoes',
      inStock: true,
    },
    {
      id: '3',
      name: 'Fresh Potatos',
      price: 3.99,
      category: 'Vegetables',
      vendor: 'Green Acres Farm',
      description: 'Locally grown organic tomatoes',
      inStock: true,
    },
    {
      id: '4',
      name: 'Fresh Lettace',
      price: 3.99,
      category: 'Vegetables',
      vendor: 'Green Acres Farm',
      description: 'Locally grown organic tomatoes',
      inStock: true,
    },
    
  ];
  
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Available Products</h1>
      <ProductGrid products={products} />
    </Layout>
  );
};

export default ProductsPage;