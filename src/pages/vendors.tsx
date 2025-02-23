import React from 'react';
import { Vendor } from '../types';
import { Layout } from 'lucide-react';

const VendorsPage: React.FC = () => {
  // Mock data - replace with actual data fetching
  const vendors: Vendor[] = [
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
      <h1 className="text-3xl font-bold mb-6">Our Vendors</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vendors.map((vendor) => (
          <div key={vendor.id} className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-3">{vendor.name}</h2>
            <p className="text-gray-600 mb-4">{vendor.description}</p>
            <p className="text-sm text-gray-500">Location: {vendor.location}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default VendorsPage;