import Image from "next/image";

interface Community {
  name: string;
  imageUrl: string;
  latestPost: string;
}

interface CommunitiesProps {
  communities: Community[];
  isDarkMode: boolean;
}

const Communities: React.FC<CommunitiesProps> = ({ communities, isDarkMode }) => {
  return (
    <div className={`mt-6 p-6 rounded-xl shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} transition-all duration-300`}>
      <h2 className={`text-xl font-bold text-center ${isDarkMode ? 'text-white' : 'text-black'} mb-2 border-b-2 border-neon-blue`}>
        My Communities
      </h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        {communities.map((community, index) => (
          <div key={index} className="relative bg-background shadow-lg p-4 rounded-xl transition-all duration-300 hover:shadow-neon-green hover:bg-gray-100 dark:hover:bg-gray-700">
            <Image
              src={community.imageUrl}
              height={100}
              width={100}
              alt={community.name}
              className="w-full h-24 object-cover rounded-lg mb-2"
            />
            <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>{community.name}</h3>
            <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{community.latestPost}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Communities;
