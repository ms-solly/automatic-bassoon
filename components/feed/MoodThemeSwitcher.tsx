import React, { useState } from 'react';

const MoodBasedThemeSwitcher: React.FC = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="fixed top-4 right-4">
      <button
        className={`p-2 rounded-full transition ${
          theme === 'light' ? 'bg-yellow-400' : 'bg-gray-800'
        } hover:shadow-neon-blue dark:hover:shadow-neon-pink`}
        onClick={toggleTheme}
      >
        {theme === 'light' ? '🌞' : '🌜'}
      </button>
    </div>
  );
};

export default MoodBasedThemeSwitcher;
