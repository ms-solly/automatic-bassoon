"use client";
import Image from "next/image";

interface UserProps {
    username: string;
    avatarUrl: string;
}

const UserCard: React.FC<UserProps> = ({ username, avatarUrl }) => {
    return (
        <div className="bg-background shadow-lg p-4 rounded-xl dark:bg-gray-800 transition-all duration-300 hover:shadow-neon-green hover:bg-gray-100 dark:hover:bg-gray-700">
            <div className="flex items-center space-x-4">
                <Image src={avatarUrl} alt={username} width={48} height={48} className="w-12 h-12 rounded-full border-4 border-neon-green shadow-md" />
                <div>
                    <h4 className="text-lg font-semibold text-foreground dark:text-white">{username}</h4>
                </div>
            </div>
        </div>
    );
};

export default UserCard;
