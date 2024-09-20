import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import { FaPhoneSlash, FaMicrophoneSlash, FaShareSquare } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';

interface CallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CallModal: React.FC<CallModalProps> = ({ isOpen, onClose }) => {
  const [isMuted, setIsMuted] = useState(false);

  if (!isOpen) return null;

  const handleMuteToggle = () => {
    setIsMuted(!isMuted); // Toggle mute state
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 transition-opacity duration-300 ease-in-out">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl p-8 w-[28rem] h-[30rem] flex flex-col justify-between transform transition-transform duration-300 ease-in-out scale-105 animate-pulse-neon">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Calling...
        </h2>

        <div className="flex justify-center space-x-6 mb-12">
          <Button
            onClick={handleMuteToggle}
            className={`${
              isMuted ? 'bg-yellow-500' : 'bg-gray-300 dark:bg-gray-600'
            } hover:bg-gray-400 dark:hover:bg-gray-500 text-gray-900 dark:text-white p-4 rounded-full shadow-neon-gray transition-transform transform hover:scale-110 flex flex-col items-center`}
          >
            <FaMicrophoneSlash className="text-4xl" />
            <p className="text-base font-medium mt-2">
              {isMuted ? 'Unmute' : 'Mute'}
            </p>
          </Button>

          <Button
            className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full neon-glow-blue shadow-neon-blue transition-transform transform hover:scale-110 flex flex-col items-center"
          >
            <FaShareSquare className="text-4xl" />
            <p className="text-base font-medium mt-2">Share Screen</p>
          </Button>
        </div>

        <Button
          onClick={onClose}
          className="bg-red-500 hover:bg-red-600 text-white p-6 rounded-full neon-glow-red shadow-neon-red transition-transform transform hover:scale-110 mx-auto"
        >
          <FaPhoneSlash className="text-4xl" />
          <p className="text-base font-medium mt-2">End Call</p>
        </Button>

        <Button
          onClick={onClose}
          className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-800 text-white rounded-lg neon-glow-close shadow-neon-close transition-all transform hover:scale-110 focus:ring focus:ring-gray-300 dark:focus:ring-gray-700"
        >
          <RxCross2 className='inline-block' />
        </Button>
      </div>
    </div>
  );
};

export default CallModal;
