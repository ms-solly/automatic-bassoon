import Image from "next/image";

interface HeaderProps {
  avatarUrl: string;
  name: string;
  username: string;
  status: string;
  isDarkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ avatarUrl, name, username, status, isDarkMode }) => {
  return (
    <div className={`relative bg-background shadow-lg p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} transition-all duration-300`}>
      <Image
        src={avatarUrl}
        height={120}
        width={120}
        alt="User"
        className="w-32 h-32 rounded-full border-4 border-neon-green shadow-md mx-auto"
      />
      <h1 className={`mt-4 text-3xl font-bold text-center ${isDarkMode ? 'text-white' : 'text-black'} text-shadow`}>
        {name}
      </h1>
      <p className={`text-center text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} italic`}>
        @{username}
      </p>
      <p className={`text-center mt-2 text-lg font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>{status}</p>
    </div>
  );
};

export default Header;
