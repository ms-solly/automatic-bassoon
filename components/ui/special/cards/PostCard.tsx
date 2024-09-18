"use client";
import Image from "next/image";
import { useState } from "react";
import { Button } from "../../button";
import LeafButton from "../buttons/LeafBtn";
import CommentButton from "../buttons/CommentBtn";
import ShareButton from "../buttons/ShareBtn";

interface PostProps {
  author: string;
  content: string;
  imageUrl?: string;
}

const PostCard: React.FC<PostProps> = ({ author, content, imageUrl }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [comment, setComment] = useState("");

  const handleCommentSubmit = () => {
    console.log("Comment submitted:", comment);
    setComment("");
    setShowCommentInput(false);
  };

  return (
    <div className="bg-background shadow-lg p-6 rounded-xl dark:bg-gray-800 transition-all duration-300 hover:shadow-neon-green hover:bg-gray-100 dark:hover:bg-gray-700">
      <div className="flex items-center space-x-4">
        <Image
          src="/profile.jpg"
          height={12}
          width={12}
          alt="User"
          className="w-12 h-12 rounded-full border-4 border-neon-green shadow-md"
        />
        <div>
          <h3 className="text-lg font-semibold text-foreground dark:text-white">
            Vegan Recipe
          </h3>
          <p className="text-sm text-muted-foreground dark:text-gray-400">
            by VeganChef
          </p>
        </div>
      </div>
      <p className="mt-4 text-foreground dark:text-gray-300">
        {isExpanded
          ? "Here’s the full recipe to make a delicious vegan pizza..."
          : "Here’s the secret to making a great vegan pizza..."}
      </p>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-neon-blue mt-2 text-sm hover:text-neon-pink dark:hover:text-neon-pink"
      >
        {isExpanded ? "Read Less" : "Read More"}
      </button>

      {/* Action Buttons */}
      <div className="mt-4 flex justify-between items-center">
        <div className="flex space-x-3">
          <LeafButton />
          <CommentButton onClick={() => setShowCommentInput(!showCommentInput)} />
          <ShareButton url="https://automatic-bassoon-rho.vercel.app/" />
        </div>
        <div className="text-muted text-sm dark:text-gray-400">2 mins ago</div>
      </div>

      {/* Comment Section */}
      {showCommentInput && (
        <div className="mt-4">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full p-2 border border-neon-yellow rounded-md bg-gray-100 dark:bg-gray-700 text-foreground dark:text-white focus:outline-none focus:ring-2 focus:ring-neon-yellow"
            placeholder="Write your comment..."
            rows={3}
          ></textarea>
          <div className="mt-2 flex justify-end space-x-3">
            <Button
              className="bg-neon-yellow text-black px-4 py-2 rounded-md"
              onClick={handleCommentSubmit}
            >
              Submit
            </Button>
            <Button
              className="bg-gray-500 text-white px-4 py-2 rounded-md"
              onClick={() => setShowCommentInput(false)}
            >
              Cancel
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostCard;
