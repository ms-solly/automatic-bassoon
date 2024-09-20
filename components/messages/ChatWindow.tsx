"use client"
import React, { useState } from 'react';
import { FaUserCircle, FaPhone, FaSearch, FaEllipsisV } from 'react-icons/fa';
import CallModal from './modals/Call';
import SearchModal from './modals/Search';

interface ChatWindowProps {
  chat: { id: number; name: string; lastMessage: string };
  onDeleteChat: (chatId: number) => void; // New prop for deleting a chat
}

const ChatWindow: React.FC<ChatWindowProps> = ({ chat, onDeleteChat }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isCallModalOpen, setIsCallModalOpen] = useState(false); // State for Call Modal
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false); // State for Search Modal

  const handleDeleteChat = () => {
    onDeleteChat(chat.id);
    setMenuOpen(false);
  };

  const handleExportChat = () => {
    console.log('Export chat');
    setMenuOpen(false);
  };

  const handleBlockUser = () => {
    console.log('Block user');
    setMenuOpen(false);
  };

  const handleViewProfile = () => {
    console.log('View profile');
    setMenuOpen(false);
  };

  return (
    <div className="flex-1 bg-gray-50 dark:bg-gray-900 p-6 flex flex-col justify-between">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <FaUserCircle className="text-3xl text-gray-500 dark:text-gray-300 mr-3" />
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">{chat.name}</h2>
        </div>

        {/* Icons for call, search, and menu */}
        <div className="flex items-center space-x-4">
          <FaPhone
            className="text-xl text-gray-600 dark:text-gray-300 cursor-pointer"
            onClick={() => setIsCallModalOpen(true)}
          />
          <FaSearch
            className="text-xl text-gray-600 dark:text-gray-300 cursor-pointer"
            onClick={() => setIsSearchModalOpen(true)}
          />
          <div className="relative">
            <FaEllipsisV
              className="text-xl text-gray-600 dark:text-gray-300 cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            />
            
            {/* Dropdown Menu */}
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 rounded-lg shadow-lg p-2">
                <ul className="text-gray-700 dark:text-gray-300">
                  <li
                    className="py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer"
                    onClick={handleDeleteChat}
                  >
                    Delete Chat
                  </li>
                  <li
                    className="py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer"
                    onClick={handleExportChat}
                  >
                    Export Chat
                  </li>
                  <li
                    className="py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer"
                    onClick={handleBlockUser}
                  >
                    Block User
                  </li>
                  <li
                    className="py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer"
                    onClick={handleViewProfile}
                  >
                    View Profile
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mock chat messages */}
      <div className="mt-4 space-y-4">
        <div className="flex items-start mb-4">
          <FaUserCircle className="text-3xl text-gray-500 dark:text-gray-300 mr-3" />
          <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg w-3/4">
            <p className="text-gray-900 dark:text-white">Hey, how are you?</p>
            <span className="text-xs text-gray-500 dark:text-gray-400">10:30 AM</span>
          </div>
        </div>
      </div>

      {/* Call and Search Modals */}
      <CallModal isOpen={isCallModalOpen} onClose={() => setIsCallModalOpen(false)} />
      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        chatMessages={[
          { id: 1, text: 'Hey, how are you?' },
          { id: 2, text: 'Did you check that file?' },
        ]}
      />
    </div>
  );
};

export default ChatWindow;
