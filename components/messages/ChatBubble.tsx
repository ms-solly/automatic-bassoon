import React from 'react';

interface ChatBubbleProps {
  message: string;
  sent: boolean; // true for sent messages, false for received
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ message, sent }) => {
  return (
    <div
      className={`flex ${sent ? 'justify-end' : 'justify-start'} mb-2`}
    >
      <div
        className={`p-3 rounded-lg shadow-neon ${sent ? 'bg-pink-200' : 'bg-blue-200'} 
        text-gray-800 dark:text-gray-100 dark:bg-gray-800 border border-transparent 
        transition duration-300 ease-in-out hover:shadow-neon-blue`}
      >
        {message}
      </div>
    </div>
  );
};

export default ChatBubble;