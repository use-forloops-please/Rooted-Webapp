import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/layout';
import { CreditCard, Truck, CheckCircle2 } from 'lucide-react';

const CheckoutPage: React.FC = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const navigate = useNavigate();

  // Mock cart data - in a real app, this would come from your cart state/context
  const cartItems = [
    {
      id: '1',
      name: 'Fresh Tomatoes',
      price: 3.99,
      quantity: 2,
      vendor: 'Green Acres Farm',
    },
    {
      id: '2',
      name: 'Organic Apples',
      price: 4.50,
      quantity: 1,
      vendor: 'Mountain Orchard',
    },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.07; // 7% tax
  const total = subtotal + tax;

  const handleSubmitDeliveryInfo = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
    window.scrollTo(0, 0);
  };

  const handleSubmitPayment = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3);
    window.scrollTo(0, 0);
  };

  const handleFinishOrder = () => {
    // In a real app, you would submit the order to your backend here
    navigate('/user?tab=orders');
  };

  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Checkout</h1>

        {/* Progress Steps */}
        <div className="flex mb-8">
          <div className="flex-1">
            <div className={`flex items-center ${step >= 1 ? 'text-green-600' : 'text-gray-400'}`}>
              <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                step >= 1 ? 'bg-green-100' : 'bg-gray-100'
              } mr-2`}>
                <span className="font-bold">1</span>
              </div>
              <span className="font-medium">Delivery</span>
            </div>
          </div>
          <div className="w-20 h-0.5 mt-4 bg-gray-200 mx-4"></div>
          <div className="flex-1">
            <div className={`flex items-center ${step >= 2 ? 'text-green-600' : 'text-gray-400'}`}>
              <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                step >= 2 ? 'bg-green-100' : 'bg-gray-100'
              } mr-2`}>
                <span className="font-bold">2</span>
              </div>
              <span className="font-medium">Payment</span>
            </div>
          </div>
          <div className="w-20 h-0.5 mt-4 bg-gray-200 mx-4"></div>
          <div className="flex-1">
            <div className={`flex items-center ${step >= 3 ? 'text-green-600' : 'text-gray-400'}`}>
              <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                step >= 3 ? 'bg-green-100' : 'bg-gray-100'
              } mr-2`}>
                <span className="font-bold">3</span>
              </div>
              <span className="font-medium">Confirmation</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Column - Forms */}
          <div className="md:w-2/3">
            {step === 1 && (
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-bold mb-6 flex items-center">
                  <Truck className="w-5 h-5 mr-2" />
                  Delivery Information
                </h2>
                <form onSubmit={handleSubmitDeliveryInfo}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-gray-700 mb-2">First Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-lg"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">Last Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-lg"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-2 border rounded-lg"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">Phone</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-2 border rounded-lg"
                        required
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-gray-700 mb-2">Address</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-lg"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">City</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-lg"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">ZIP Code</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-lg"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex items-center mb-6">
                    <input type="checkbox" id="saveAddress" className="mr-2" />
                    <label htmlFor="saveAddress">Save this address for future orders</label>
                  </div>
                  <button
                    type="submit"
                    className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700"
                  >
                    Proceed to Payment
                  </button>
                </form>
              </div>
            )}

            {step === 2 && (
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-bold mb-6 flex items-center">
                  <CreditCard className="w-5 h-5 mr-2" />
                  Payment Method
                </h2>
                <form onSubmit={handleSubmitPayment}>
                  <div className="mb-6">
                    <div className="flex items-center mb-4">
                      <input
                        type="radio"
                        id="creditCard"
                        name="paymentMethod"
                        className="mr-2"
                        defaultChecked
                      />
                      <label htmlFor="creditCard" className="flex items-center">
                        <span className="mr-2">Credit Card</span>
                        <img src="/api/placeholder/60/30" alt="Credit Cards" className="h-6" />
                      </label>
                    </div>
                    <div className="border-t pt-4">
                      <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Card Number</label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border rounded-lg"
                          placeholder="1234 5678 9012 3456"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <label className="block text-gray-700 mb-2">Expiration Date</label>
                          <input
                            type="text"
                            className="w-full px-4 py-2 border rounded-lg"
                            placeholder="MM/YY"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 mb-2">CVV</label>
                          <input
                            type="text"
                            className="w-full px-4 py-2 border rounded-lg"
                            placeholder="123"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="border border-gray-300 text-gray-700 py-2 px-6 rounded-lg hover:bg-gray-50"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700"
                    >
                      Complete Order
                    </button>
                  </div>
                </form>
              </div>
            )}

            {step === 3 && (
              <div className="bg-white rounded-lg shadow p-6 text-center">
                <div className="flex justify-center mb-4">
                  <CheckCircle2 className="w-16 h-16 text-green-500" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Order Confirmed!</h2>
                <p className="text-gray-600 mb-6">
                  Thank you for your order. We've sent a confirmation email to your inbox.
                </p>
                <p className="font-medium mb-8">Order #12345</p>
                <div className="flex justify-center space-x-4">
                  <button
                    onClick={handleFinishOrder}
                    className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700"
                  >
                    View Order Status
                  </button>
                  <button
                    onClick={() => navigate('/')}
                    className="border border-gray-300 text-gray-700 py-2 px-6 rounded-lg hover:bg-gray-50"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Order Summary */}
          <div className="md:w-1/3">
            <div className="bg-white rounded-lg shadow p-6 sticky top-6">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>
              
              {/* Cart Items */}
              <div className="mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between mb-4">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-600">
                        {item.quantity} x ${item.price.toFixed(2)}
                      </p>
                      <p className="text-xs text-gray-500">{item.vendor}</p>
                    </div>
                    <p className="font-medium">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="border-t pt-4">
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-lg mt-4">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CheckoutPage;