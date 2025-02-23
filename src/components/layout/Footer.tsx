import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-auto">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-2">Market Hours</h3>
            <p>Saturday: 8am - 2pm</p>
            <p>Sunday: 9am - 1pm</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Contact</h3>
            <p>Email: market@example.com</p>
            <p>Phone: (555) 123-4567</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Location</h3>
            <p>123 Market Street</p>
            <p>Farmtown, ST 12345</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;