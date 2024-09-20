// components/ChatList.tsx
import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

interface ChatListProps {
  chats: { id: number; name: string; lastMessage: string }[];
  activeChatId: number;
  setActiveChat: (chat: { id: number; name: string; lastMessage: string }) => void;
}

const ChatList: React.FC<ChatListProps> = ({ chats, activeChatId, setActiveChat }) => {
  return (
    <div className="w-1/4 bg-gray-100 dark:bg-gray-800 p-4 border-r border-gray-300 dark:border-gray-700">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Recent Chats</h2>
      <ul className="space-y-4">
        {chats.length > 0 ? (
          chats.map(chat => (
            <li
              key={chat.id}
              onClick={() => setActiveChat(chat)}
              className={`p-3 flex items-center rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 
                ${chat.id === activeChatId ? 'bg-gray-300 dark:bg-gray-700' : ''}`}
            >
              <FaUserCircle className="text-3xl text-gray-500 dark:text-gray-300 mr-3" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">{chat.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{chat.lastMessage}</p>
              </div>
            </li>
          ))
        ) : (
          <p className="text-gray-500 dark:text-gray-300">No recent chats</p>
        )}
      </ul>
    </div>
  );
};

export default ChatList;
