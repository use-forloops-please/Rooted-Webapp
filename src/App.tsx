import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages';
import CartPage from './pages/cart';
import ProductsPage from './pages/products';
import LoginPage from './pages/login';
import UserPage from './pages/user';
import CheckoutPage from './pages/checkout';
import MessagesPage from './pages/messages';
import Vendors from './pages/vendors';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/vendors" element={<Vendors />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/messages" element={<MessagesPage />} />
      </Routes>
    </Router>
  );
};

export default App;