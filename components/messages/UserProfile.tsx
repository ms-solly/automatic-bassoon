import React from 'react';

interface UserProfileProps {
  username: string;
  fullName: string;
  bio: string;
  communityLink: string;
  userImage: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ username, fullName, bio, communityLink, userImage }) => {
  return (
    <div className="p-6 neon-background">
      <div className="flex items-center space-x-4 mb-4">
        <img src={userImage} alt={fullName} className="w-16 h-16 rounded-full" />
        <div>
          <h2 className="text-2xl font-bold neon-text">{fullName}</h2>
          <p className="text-lg text-gray-300">@{username}</p>
        </div>
      </div>
      <p className="mt-4 text-md text-gray-200">{bio}</p>
      <a href={communityLink} className="mt-4 inline-block text-neon-blue underline">
        Visit {fullName}'s Community
      </a>
    </div>
  );
};

export default UserProfile;
