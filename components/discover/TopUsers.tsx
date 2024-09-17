"use client";
import UserCard from "../UserCard";

interface User {
    id: number;
    username: string;
    avatarUrl: string;
}

const topUsers: User[] = [
    { id: 1, username: "VeganChef123", avatarUrl: "/avatar.png" },
    { id: 2, username: "GreenGuru", avatarUrl: "/avatar.png" },
    { id: 3, username: "PlantBasedPro", avatarUrl: "/avatar.png" }
];

const TopUsers: React.FC = () => {
    return (
        <div>
            <h3 className="text-lg font-semibold text-pink-500 mt-4 mb-2">Top Users</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {topUsers.map(user => (
                    <UserCard
                        key={user.id}
                        username={user.username}
                        avatarUrl={user.avatarUrl}
                    />
                ))}
            </div>
        </div>
    );
};

export default TopUsers;
