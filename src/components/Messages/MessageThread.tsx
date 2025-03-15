import React, { useState, useRef, useEffect } from 'react';
import { Conversation, Message } from '@/types';
import { Send, Paperclip, Image } from 'lucide-react';
import { formatTime } from '@/utils/dateUtils';

interface MessageThreadProps {
  conversation: Conversation;
  onSendMessage: (message: string) => void;
}

const MessageThread: React.FC<MessageThreadProps> = ({ conversation, onSendMessage }) => {
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // In a real app, you would fetch these from your API based on the conversation ID
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      senderId: 'farmer-1',
      senderName: conversation.participantName,
      content: 'Hello! How can I help you today?',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 26), // 26 hours ago
    },
    {
      id: '2',
      senderId: 'user-1',
      senderName: 'You',
      content: 'Hi! I was wondering if you will have fresh strawberries at the market this weekend?',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 25), // 25 hours ago
    },
    {
      id: '3',
      senderId: 'farmer-1',
      senderName: conversation.participantName,
      content: 'Yes, we will have fresh strawberries this weekend!',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 24 hours ago
    },
  ]);

  // Auto scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;
    
    // Add message to local state
    const newMsg: Message = {
      id: `temp-${Date.now()}`,
      senderId: 'user-1',
      senderName: 'You',
      content: newMessage,
      timestamp: new Date(),
    };
    
    setMessages([...messages, newMsg]);
    onSendMessage(newMessage);
    setNewMessage('');
  };

  // Group messages by date
  const groupedMessages: { [key: string]: Message[] } = {};
  messages.forEach(message => {
    const date = new Date(message.timestamp).toLocaleDateString();
    if (!groupedMessages[date]) {
      groupedMessages[date] = [];
    }
    groupedMessages[date].push(message);
  });

  return (
    <>
      {/* Header */}
      <div className="p-4 border-b flex items-center">
        <img
          src={conversation.participantImage}
          alt={conversation.participantName}
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <h3 className="font-semibold">{conversation.participantName}</h3>
          <p className="text-xs text-green-600">Online</p>
        </div>
      </div>
      
      {/* Messages */}
      <div className="flex-grow overflow-y-auto p-4">
        {Object.entries(groupedMessages).map(([date, dayMessages]) => (
          <div key={date}>
            <div className="flex justify-center mb-4">
              <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                {new Date(date).toLocaleDateString(undefined, { 
                  weekday: 'long', 
                  month: 'short', 
                  day: 'numeric' 
                })}
              </span>
            </div>
            
            {dayMessages.map((message) => (
              <div
                key={message.id}
                className={`mb-4 flex ${
                  message.senderId === 'user-1' ? 'justify-end' : 'justify-start'
                }`}
              >
                {message.senderId !== 'user-1' && (
                  <img
                    src={conversation.participantImage}
                    alt={message.senderName}
                    className="w-8 h-8 rounded-full mr-2 self-end"
                  />
                )}
                <div
                  className={`max-w-[70%] rounded-lg p-3 ${
                    message.senderId === 'user-1'
                      ? 'bg-green-500 text-white rounded-br-none'
                      : 'bg-gray-100 rounded-bl-none'
                  }`}
                >
                  <p>{message.content}</p>
                  <div
                    className={`text-xs mt-1 ${
                      message.senderId === 'user-1' ? 'text-green-200' : 'text-gray-500'
                    }`}
                  >
                    {formatTime(message.timestamp)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      {/* Message Input */}
      <div className="border-t p-3">
        <form onSubmit={handleSubmit} className="flex items-center">
          <button
            type="button"
            className="p-2 rounded-full text-gray-500 hover:bg-gray-100 mr-2"
            title="Attach file"
          >
            <Paperclip className="w-5 h-5" />
          </button>
          <button
            type="button"
            className="p-2 rounded-full text-gray-500 hover:bg-gray-100 mr-2"
            title="Send image"
          >
            <Image className="w-5 h-5" />
          </button>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-grow border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Type a message..."
          />
          <button
            type="submit"
            className={`ml-2 p-2 rounded-full ${
              newMessage.trim() !== ''
                ? 'bg-green-500 text-white hover:bg-green-600'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
            disabled={newMessage.trim() === ''}
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </>
  );
};

export default MessageThread;