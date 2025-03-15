import React, { useState } from 'react';
import Layout from '@/components/layout/layout';
import { Search, Send } from 'lucide-react';
import { Conversation } from '@/types';
import ConversationList from '@/components/Messages/ConnversationList';
import MessageThread from '@/components/Messages/MessageThread';

const MessagesPage: React.FC = () => {
  // In a real app, you would fetch these from your API
  const [conversations, setConversations] = useState<Conversation[]>([
    {
      id: '1',
      participantName: 'Green Acres Farm',
      participantImage: '/api/placeholder/40/40',
      lastMessage: 'Yes, we will have fresh strawberries this weekend!',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // Yesterday
      unread: true,
    },
    {
      id: '2',
      participantName: 'Mountain Dairy',
      participantImage: '/api/placeholder/40/40',
      lastMessage: 'Thank you for your order! We look forward to seeing you again.',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3), // 3 days ago
      unread: false,
    },
    {
      id: '3',
      participantName: 'Sunny Apiaries',
      participantImage: '/api/placeholder/40/40',
      lastMessage: 'Our wildflower honey just arrived! Would you like us to save some for you?',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5), // 5 days ago
      unread: false,
    },
  ]);

  const [selectedConversation, setSelectedConversation] = useState<string | null>(
    conversations.length > 0 ? conversations[0].id : null
  );
  
  const [searchQuery, setSearchQuery] = useState('');

  const filteredConversations = conversations.filter((convo) =>
    convo.participantName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Mark conversation as read when selected
  const handleSelectConversation = (conversationId: string) => {
    setSelectedConversation(conversationId);
    setConversations(conversations.map(convo => 
      convo.id === conversationId 
        ? { ...convo, unread: false }
        : convo
    ));
  };

  const active = conversations.find(c => c.id === selectedConversation);

  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Messages</h1>
        
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="flex h-[calc(80vh-120px)]">
            {/* Conversations List */}
            <div className="w-1/3 border-r">
              <div className="p-3 border-b">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search conversations..."
                    className="w-full pl-10 pr-4 py-2 border rounded-lg"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Search className="absolute left-3 top-2.5 text-gray-500 w-5 h-5" />
                </div>
              </div>
              <ConversationList 
                conversations={filteredConversations}
                selectedId={selectedConversation}
                onSelect={handleSelectConversation}
              />
            </div>
            
            {/* Message Thread */}
            <div className="w-2/3 flex flex-col">
              {selectedConversation ? (
                <MessageThread 
                  conversation={active!}
                  onSendMessage={(message) => {
                    // In a real app, you would send this to your API
                    console.log('Sending message:', message);
                    // Update the conversation with the new message for demo purposes
                    setConversations(
                      conversations.map(c => 
                        c.id === selectedConversation
                          ? { ...c, lastMessage: message, timestamp: new Date() }
                          : c
                      )
                    );
                  }}
                />
              ) : (
                <div className="flex-grow flex items-center justify-center text-gray-500">
                  Select a conversation to start messaging
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MessagesPage;