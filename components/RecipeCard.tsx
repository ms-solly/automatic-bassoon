"use client";
import Image from "next/image";
import { useState } from "react";

interface RecipeProps {
    title: string;
    description: string;
    imageUrl: string;
}

const RecipeCard: React.FC<RecipeProps> = ({ title, description, imageUrl }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="bg-background shadow-lg p-6 rounded-xl dark:bg-gray-800 transition-all duration-300 hover:shadow-neon-green hover:bg-gray-100 dark:hover:bg-gray-700">
            <div className="flex items-center space-x-4">
                <Image src={imageUrl} alt={title} width={72} height={72} className="w-16 h-16 rounded-lg border-4 border-neon-blue shadow-md" />
                <div>
                    <h4 className="text-lg font-semibold text-foreground dark:text-white">{title}</h4>
                    <p className="text-sm text-muted-foreground dark:text-gray-400">{description}</p>
                </div>
            </div>
            <div className="mt-4 flex justify-between items-center">
                <div className="flex space-x-3">
                    <button className="text-neon-green hover:scale-110 transition-transform">🍃 Leaf</button>
                    <button className="text-neon-yellow hover:scale-110 transition-transform">💾 Save</button>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;
