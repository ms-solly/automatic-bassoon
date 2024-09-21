import PostCard from "../ui/special/cards/PostCard";

interface PostsProps {
  posts: { title: string; content: string; date: string; author: string; imageUrl?: string }[];
  isDarkMode: boolean;
}

const Posts: React.FC<PostsProps> = ({ posts, isDarkMode }) => {
  return (
    <div className={`mt-6 p-6 rounded-xl shadow-lg ${isDarkMode ? 'bg-transparent' : 'bg-transparent'} transition-all duration-300`}>
      <h2 className={`text-xl font-bold text-center ${isDarkMode ? 'text-white' : 'text-black'} mb-2 border-b-2 border-neon-blue`}>
        Posts
      </h2>
      <div className="mt-4">
        {posts.map((post, index) => (
          <PostCard
            key={index}
            author={post.author}
            content={post.content}
            imageUrl={post.imageUrl} // Pass the imageUrl if available
          />
        ))}
      </div>
    </div>
  );
};

export default Posts;
