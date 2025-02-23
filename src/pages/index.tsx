import React from 'react';
import Layout from '../components/layout/layout';
import FeaturedVendors from '../components/Home/FeaturedVendors';

const HomePage: React.FC = () => {
  // Mock data - replace with actual data fetching
  const featuredVendors = [
    {
      id: '1',
      name: 'Green Acres Farm',
      description: 'Fresh organic vegetables and fruits',
      products: ['1', '2', '3'],
      location: 'Row A'
    },
    // Add more mock vendors as needed
  ];

  return (
    <Layout>
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Farmers Market</h1>
        <p className="text-xl text-gray-600">Supporting local farmers and artisans</p>
      </section>
      <FeaturedVendors vendors={featuredVendors} />
    </Layout>
  );
};

export default HomePage;