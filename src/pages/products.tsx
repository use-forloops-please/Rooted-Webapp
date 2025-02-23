import React from 'react';
import ProductGrid from '../components/Products/ProductGrid';
import Layout from '@/components/layout/layout';

const ProductsPage: React.FC = () => {
  // Mock data - replace with actual data fetching
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
    // Add more mock products as needed
  ];

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Available Products</h1>
      <ProductGrid products={products} />
    </Layout>
  );
};

export default ProductsPage;