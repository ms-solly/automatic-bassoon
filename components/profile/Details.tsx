// components/profile/Details.tsx
interface DetailsProps {
  bio: string;
  location: string;
  website: string;
  isDarkMode: boolean;
}

const Details: React.FC<DetailsProps> = ({ bio, location, website, isDarkMode }) => {
  return (
    <div className={`mt-6 p-6 rounded-xl shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} transition-all duration-300`}>
      <h2 className={`text-2xl font-bold text-center ${isDarkMode ? 'text-white' : 'text-black'} mb-2 border-b-2 border-neon-blue`}>
        About Me
      </h2>
      <p className={`mt-2 text-lg ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>{bio}</p>
      <p className={`mt-2 text-lg ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
        <strong>Location:</strong> {location}
      </p>
      <a 
        href={website} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`text-neon-blue hover:text-neon-pink text-lg transition duration-300`} 
        aria-label={`Visit ${website}`} // Accessibility improvement
      >
        {website}
      </a>
    </div>
  );
};

export default Details;
