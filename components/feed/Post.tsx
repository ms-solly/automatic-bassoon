"use client"
import Image from "next/image";
import { useState } from "react";

interface PostProps {
  author: string;
  content: string;
  imageUrl?: string;
}

const PostCard: React.FC<PostProps> = ({ author, content, imageUrl }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-background shadow-lg p-6 rounded-xl dark:bg-gray-800 transition-all duration-300 hover:shadow-neon-green hover:bg-gray-100 dark:hover:bg-gray-700">
      <div className="flex items-center space-x-4">
        <Image src="/profile.jpg" height={12} width={12} alt="User" className="w-12 h-12 rounded-full border-4 border-neon-green shadow-md" />
        <div>
          <h3 className="text-lg font-semibold text-foreground dark:text-white">Vegan Recipe</h3>
          <p className="text-sm text-muted-foreground dark:text-gray-400">by VeganChef</p>
        </div>
      </div>
      <p className="mt-4 text-foreground dark:text-gray-300">
        {isExpanded ? 'Here’s the full recipe to make a delicious vegan pizza...' : 'Here’s the secret to making a great vegan pizza...'}
      </p>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-neon-blue mt-2 text-sm hover:text-neon-pink dark:hover:text-neon-pink"
      >
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
      <div className="mt-4 flex justify-between items-center">
        <div className="flex space-x-3">
          <button className="text-neon-green hover:scale-110 transition-transform">🍃 leaf</button>
          <button className="text-neon-yellow hover:scale-110 transition-transform">💬 Comment</button>
          <button className="text-neon-pink hover:scale-110 transition-transform">🔗 Share</button>
        </div>
        <div className="text-muted text-sm dark:text-gray-400">2 mins ago</div>
      </div>
    </div>
  );
};

export default PostCard;
