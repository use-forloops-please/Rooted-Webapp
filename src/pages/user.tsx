import React, { useState } from 'react';
import Layout from '@/components/layout/layout';
import { Truck, MessageSquare, CreditCard, User, ShoppingBag } from 'lucide-react';

const UserPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'orders' | 'payments' | 'messages'>('profile');

  // Mock user data - in a real app this would come from your backend
  const user = {
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    joined: 'January 2024',
    profileImage: '/api/placeholder/150/150',
  };

  // Mock order data
  const orders = [
    { id: '1', date: 'March 10, 2025', status: 'Delivered', total: 25.99 },
    { id: '2', date: 'February 28, 2025', status: 'Delivered', total: 34.50 },
  ];

  // Mock payment methods
  const paymentMethods = [
    { id: '1', type: 'Credit Card', last4: '4242', expiry: '04/28' },
    { id: '2', type: 'PayPal', email: 'jane.smith@example.com' },
  ];

  // Mock messages
  const messages = [
    { 
      id: '1', 
      from: 'Green Acres Farm', 
      preview: 'Yes, we will have fresh strawberries this weekend!',
      date: 'Yesterday',
      unread: true,
    },
    { 
      id: '2', 
      from: 'Mountain Dairy', 
      preview: 'Thank you for your order! We look forward to seeing you again.',
      date: 'March 12, 2025',
      unread: false,
    },
  ];

  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">My Account</h1>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="w-full md:w-64 bg-white rounded-lg shadow p-6">
            <div className="flex flex-col items-center mb-6">
              <img 
                src={user.profileImage} 
                alt={user.name} 
                className="w-24 h-24 rounded-full mb-3" 
              />
              <h2 className="text-xl font-bold">{user.name}</h2>
              <p className="text-gray-600 text-sm">Member since {user.joined}</p>
            </div>

            <nav>
              <button 
                className={`flex items-center w-full text-left px-4 py-2 rounded-lg mb-2 ${
                  activeTab === 'profile' ? 'bg-green-100 text-green-700' : 'hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab('profile')}
              >
                <User className="w-5 h-5 mr-3" />
                Profile
              </button>
              <button 
                className={`flex items-center w-full text-left px-4 py-2 rounded-lg mb-2 ${
                  activeTab === 'orders' ? 'bg-green-100 text-green-700' : 'hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab('orders')}
              >
                <ShoppingBag className="w-5 h-5 mr-3" />
                Orders
              </button>
              <button 
                className={`flex items-center w-full text-left px-4 py-2 rounded-lg mb-2 ${
                  activeTab === 'payments' ? 'bg-green-100 text-green-700' : 'hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab('payments')}
              >
                <CreditCard className="w-5 h-5 mr-3" />
                Payment Methods
              </button>
              <button 
                className={`flex items-center w-full text-left px-4 py-2 rounded-lg mb-2 ${
                  activeTab === 'messages' ? 'bg-green-100 text-green-700' : 'hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab('messages')}
              >
                <MessageSquare className="w-5 h-5 mr-3" />
                Messages
                <span className="ml-auto bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                  {messages.filter(m => m.unread).length}
                </span>
              </button>
            </nav>

            <div className="mt-6 pt-6 border-t">
              <button className="w-full py-2 text-red-600 hover:text-red-800">
                Sign Out
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 bg-white rounded-lg shadow p-6">
            {activeTab === 'profile' && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-gray-700 mb-2">Full Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 border rounded-lg" 
                        defaultValue={user.name} 
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">Email</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-2 border rounded-lg" 
                        defaultValue={user.email} 
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">Phone</label>
                      <input 
                        type="tel" 
                        className="w-full px-4 py-2 border rounded-lg" 
                        placeholder="Enter your phone number" 
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">Password</label>
                      <input 
                        type="password" 
                        className="w-full px-4 py-2 border rounded-lg" 
                        placeholder="••••••••" 
                      />
                    </div>
                  </div>
                  <button 
                    type="submit"
                    className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700"
                  >
                    Save Changes
                  </button>
                </form>
              </div>
            )}

            {activeTab === 'orders' && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Order History</h2>
                {orders.length > 0 ? (
                  <div className="overflow-x-auto">
                    <table className="min-w-full">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="px-6 py-3 text-left text-gray-700">Order ID</th>
                          <th className="px-6 py-3 text-left text-gray-700">Date</th>
                          <th className="px-6 py-3 text-left text-gray-700">Status</th>
                          <th className="px-6 py-3 text-left text-gray-700">Total</th>
                          <th className="px-6 py-3 text-left text-gray-700">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        {orders.map((order) => (
                          <tr key={order.id}>
                            <td className="px-6 py-4">#{order.id}</td>
                            <td className="px-6 py-4">{order.date}</td>
                            <td className="px-6 py-4">
                              <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                                {order.status}
                              </span>
                            </td>
                            <td className="px-6 py-4">${order.total.toFixed(2)}</td>
                            <td className="px-6 py-4">
                              <button className="text-green-600 hover:underline">View Details</button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <p className="text-gray-600">You haven't placed any orders yet.</p>
                )}
              </div>
            )}

            {activeTab === 'payments' && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Payment Methods</h2>
                <div className="space-y-4 mb-6">
                  {paymentMethods.map((method) => (
                    <div key={method.id} className="border rounded-lg p-4 flex items-center">
                      <div className="bg-gray-100 rounded-full p-3 mr-4">
                        <CreditCard className="w-6 h-6 text-gray-600" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{method.type}</p>
                        {method.last4 && (
                          <p className="text-gray-600 text-sm">ending in {method.last4}</p>
                        )}
                        {method.email && (
                          <p className="text-gray-600 text-sm">{method.email}</p>
                        )}
                      </div>
                      <button className="text-red-600 hover:text-red-800">Remove</button>
                    </div>
                  ))}
                </div>
                <button className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700">
                  Add Payment Method
                </button>
              </div>
            )}

            {activeTab === 'messages' && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Messages</h2>
                {messages.length > 0 ? (
                  <div className="divide-y">
                    {messages.map((message) => (
                      <div key={message.id} className={`py-4 ${message.unread ? 'bg-green-50' : ''}`}>
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-semibold text-lg">{message.from}</h3>
                          <span className="text-sm text-gray-500">{message.date}</span>
                        </div>
                        <p className="text-gray-600">{message.preview}</p>
                        <button className="text-green-600 hover:underline mt-2">
                          Read full conversation
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600">You have no messages yet.</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserPage;