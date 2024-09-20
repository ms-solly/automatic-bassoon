import { IoCall } from 'react-icons/io5';
import { FaSearch } from 'react-icons/fa';
import { PiDotsThreeCircleVertical } from 'react-icons/pi';
import Avatar from '../ui/Avatar';
import { Button } from '../ui/button';


interface ChatHeaderProps {
  activeChat: string;
  onDropdownToggle: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ activeChat, onDropdownToggle }) => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-800 transition-all">
      <div className="flex items-center">
        <Avatar src="/avatar.png" alt={activeChat} size={48} />
        <h2 className="ml-4 text-lg font-medium text-black dark:text-white">{activeChat}</h2>
      </div>
      <div className="flex space-x-4 items-center">
        <Button><IoCall /></Button>
        <Button><FaSearch /></Button>
        <Button onClick={onDropdownToggle}><PiDotsThreeCircleVertical /></Button>
      </div>
    </div>
  );
};

export default ChatHeader;
