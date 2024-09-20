"use client"
import React, { useState } from 'react';
import { FaPaperclip, FaSmile } from 'react-icons/fa';

interface MessageInputProps {
  onSendMessage: (message: string) => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage(''); // Clear the input after sending
    }
  };

  return (
    <div className="mt-6 flex items-center bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
      <FaPaperclip className="text-xl text-gray-500 dark:text-gray-300 cursor-pointer mr-4" />
      <input
        type="text"
        className="flex-1 p-3 rounded-lg bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white border-none focus:outline-none"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
      />
      <FaSmile className="text-xl text-gray-500 dark:text-gray-300 cursor-pointer ml-4" />
    </div>
  );
};

export default MessageInput;
