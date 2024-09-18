"use client";
import PostCard from "../ui/special/cards/PostCard";
const topPostsData = [
    {
        author: "VeganChef123",
        content: "Here's the secret to making a great vegan pizza...",
        imageUrl: "/food.jpg"
    },
    {
        author: "GreenGuru",
        content: "A delightful recipe for vegan tacos.",
        imageUrl: "/food.jpg"
    },
    {
        author: "PlantBasedPro",
        content: "Packed with nutrients for a fresh start.",
        imageUrl: "/food.jpg"
    }
];

const TopPosts: React.FC = () => {
    return (
        <div className="">
            <h3 className="text-lg font-semibold text-pink-500 mt-4 mb-2">Top Posts</h3>
            <div className="space-y-4 mt-4">
                {topPostsData.map((post, index) => (
                    <PostCard
                        key={index}
                        author={post.author}
                        content={post.content}
                        imageUrl={post.imageUrl}
                    />
                ))}
            </div>
        </div>
    );
};

export default TopPosts;
