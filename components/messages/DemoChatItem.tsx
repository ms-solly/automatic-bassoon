import React from 'react';

interface DemoChatItemProps {
  chat: {
    id: string;
    name: string;
    lastMessage: string;
    time: string;
  };
  setActiveChat: (id: string) => void;
}

const DemoChatItem: React.FC<DemoChatItemProps> = ({ chat, setActiveChat }) => {
  return (
    <div 
      className="flex items-center justify-between p-3 mb-3 bg-gray-800 rounded-lg hover:bg-gray-700 cursor-pointer transition-all neon-border"
      onClick={() => setActiveChat(chat.id)}
    >
      <div>
        <h3 className="text-lg font-semibold">{chat.name}</h3>
        <p className="text-sm text-gray-400">{chat.lastMessage}</p>
      </div>
      <span className="text-sm text-gray-400">{chat.time}</span>
    </div>
  );
};

export default DemoChatItem;
