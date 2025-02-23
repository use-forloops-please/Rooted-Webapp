import React from 'react';
import { Product } from '../../types';

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
          <p className="text-gray-600 mb-2">{product.description}</p>
          <p className="text-green-600 font-bold">${product.price.toFixed(2)}</p>
          <p className="text-sm text-gray-500 mb-2">Vendor: {product.vendor}</p>
          <button 
            className={`w-full py-2 px-4 rounded ${
              product.inStock 
                ? 'bg-green-600 text-white hover:bg-green-700' 
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
            disabled={!product.inStock}
          >
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;