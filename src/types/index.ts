export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  vendor: string;
  description: string;
  inStock: boolean;
}

export interface Vendor {
  id: string;
  name: string;
  description: string;
  products: string[]; 
  location: string;
}

export interface Conversation {
  id: string;
  participantName: string;
  participantImage: string;
  lastMessage: string;
  timestamp: Date;
  unread: boolean;
}

export interface Message {
  id: string;
  senderId: string;
  senderName: string;
  content: string;
  timestamp: Date;
}