import React from 'react';

const Story: React.FC = () => {
  const stories = [
    { id: 1, image: '/story1.jpg', user: 'VeganGuru' },
    { id: 2, image: '/story2.jpg', user: 'PlantLover' },
  ];

  return (
    <div className="flex space-x-4 overflow-x-auto p-4">
      {stories.map((story) => (
        <div key={story.id} className="relative group">
          <div className="rounded-full p-1 bg-gradient-to-r from-neon-pink via-neon-blue to-neon-green group-hover:shadow-neon transition-all duration-300">
            <img
              src={story.image}
              alt={story.user}
              className="w-16 h-16 rounded-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-0 bg-black text-white text-xs px-1 rounded">
            {story.user}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Story;
