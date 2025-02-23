import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, User } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  const NavLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
    <Link
      to={to}
      className={`relative px-3 py-2 transition-colors duration-200 ${
        isActivePath(to)
          ? 'text-green-400'
          : 'text-gray-100 hover:text-green-300'
      }`}
    >
      {children}
      {isActivePath(to) && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-400 rounded-full"></span>
      )}
    </Link>
  );

  return (
    <header className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              Farmers Market
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/vendors">Vendors</NavLink>
            <NavLink to="/products">Products</NavLink>
            
            <div className="flex items-center space-x-4 ml-6">
              <Link to="/cart" className="relative hover:text-green-400 transition-colors">
                <ShoppingCart className="w-6 h-6" />
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </Link>
              
              <button className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors duration-200">
                <User className="w-5 h-5" />
                <span>Login</span>
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="px-4 py-2 hover:bg-gray-800 rounded-lg">Home</Link>
              <Link to="/vendors" className="px-4 py-2 hover:bg-gray-800 rounded-lg">Vendors</Link>
              <Link to="/products" className="px-4 py-2 hover:bg-gray-800 rounded-lg">Products</Link>
              <Link to="/cart" className="px-4 py-2 hover:bg-gray-800 rounded-lg">Cart</Link>
              <button className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 mt-2">
                <User className="w-5 h-5" />
                <span>Login</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;