import Layout from '@/components/layout/layout';
import React from 'react';

const CartPage: React.FC = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-gray-600">Your cart is empty</p>
      </div>
    </Layout>
  );
};

export default CartPage;