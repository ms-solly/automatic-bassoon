"use client";
import React, { useState } from 'react';
import ChatList from '@/components/messages/RecentChat';
import ChatWindow from '@/components/messages/ChatWindow';
import MessageInput from '@/components/messages/ChatInput';

// Mock data for recent chats
const recentChats = [
  { id: 1, name: 'John Doe', lastMessage: 'Hey, how are you?' },
  { id: 2, name: 'Jane Smith', lastMessage: 'Did you check that file?' },
  { id: 3, name: 'Alex Johnson', lastMessage: 'Let’s catch up later!' },
];

const Message: React.FC = () => {
  const [activeChat, setActiveChat] = useState(recentChats[0]); // Set initial active chat
  const [chats, setChats] = useState(recentChats); // State for managing chats

  const handleSendMessage = (message: string) => {
    console.log(`Sending message: ${message}`);
  };

  const handleDeleteChat = (chatId: number) => {
    setChats(chats.filter((chat) => chat.id !== chatId));
    if (chatId === activeChat.id) {
      setActiveChat(chats[0] || null); // Set a new active chat or null if no chats left
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Sidebar (Recent Chats) */}
      <ChatList chats={chats} activeChatId={activeChat.id} setActiveChat={setActiveChat} />

      {/* Right Side (Active Chat Window and Input) */}
      <div className="flex-1 flex flex-col">
        {activeChat && (
          <>
            <ChatWindow chat={activeChat} onDeleteChat={handleDeleteChat} />
            <MessageInput onSendMessage={handleSendMessage} />
          </>
        )}
      </div>
    </div>
  );
};

export default Message;