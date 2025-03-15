import React from 'react';
import { Conversation } from '@/types';
import { formatDistanceToNow } from '@/utils/dateUtils';

interface ConversationListProps {
  conversations: Conversation[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}

const ConversationList: React.FC<ConversationListProps> = ({
  conversations,
  selectedId,
  onSelect,
}) => {
  if (conversations.length === 0) {
    return (
      <div className="p-6 text-center text-gray-500">
        No conversations found
      </div>
    );
  }

  return (
    <div className="overflow-y-auto h-full">
      {conversations.map((conversation) => (
        <div
          key={conversation.id}
          className={`p-4 border-b cursor-pointer hover:bg-gray-50 transition-colors ${
            selectedId === conversation.id ? 'bg-green-50' : ''
          }`}
          onClick={() => onSelect(conversation.id)}
        >
          <div className="flex items-start">
            <img
              src={conversation.participantImage}
              alt={conversation.participantName}
              className="w-10 h-10 rounded-full mr-3"
            />
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-baseline">
                <h3 className="font-semibold truncate">
                  {conversation.participantName}
                </h3>
                <span className="text-xs text-gray-500 whitespace-nowrap ml-2">
                  {formatDistanceToNow(conversation.timestamp)}
                </span>
              </div>
              <p className={`text-sm truncate ${conversation.unread ? 'font-semibold' : 'text-gray-600'}`}>
                {conversation.lastMessage}
              </p>
            </div>
            {conversation.unread && (
              <div className="ml-2 w-3 h-3 bg-green-500 rounded-full flex-shrink-0"></div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ConversationList;