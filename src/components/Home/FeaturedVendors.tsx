import React from 'react';
import { Vendor } from '../../types';

interface FeaturedVendorsProps {
  vendors: Vendor[];
}

const FeaturedVendors: React.FC<FeaturedVendorsProps> = ({ vendors }) => {
  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold mb-4">Featured Vendors</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {vendors.map((vendor) => (
          <div key={vendor.id} className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-2">{vendor.name}</h3>
            <p className="text-gray-600 mb-4">{vendor.description}</p>
            <p className="text-sm text-gray-500">Location: {vendor.location}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedVendors;
