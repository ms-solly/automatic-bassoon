import React, { useState } from 'react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  chatMessages: { id: number; text: string }[]; // Mock messages to search from
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, chatMessages }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMessages = chatMessages.filter((message) =>
    message.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-80">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Search Messages</h2>
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg mb-4"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="space-y-3">
          {filteredMessages.length > 0 ? (
            filteredMessages.map((message) => (
              <div key={message.id} className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <p className="text-gray-900 dark:text-white">{message.text}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500 dark:text-gray-400">No messages found.</p>
          )}
        </div>
        <button
          onClick={onClose}
          className="mt-4 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SearchModal;
