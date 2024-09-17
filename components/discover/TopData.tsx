"use client"
import { useState } from "react";

const topUsers = ['@veganchef', '@plantpower', '@ecolover', '@greenliving'];
const topPosts = ['Vegan Tacos Recipe', 'Sustainable Living Tips', 'Plant-Based Fitness'];
export default function TopData(){
    const [searchTerm, setSearchTerm] = useState('');
    const [isFocused, setIsFocused] = useState(false);


    const filteredUsers = topUsers.filter(user =>
        user.toLowerCase().includes(searchTerm.toLowerCase())
      );
      const filteredPosts = topPosts.filter(post =>
        post.toLowerCase().includes(searchTerm.toLowerCase())
      );

   

    return(
        <>
           <div className={`mt-4 p-4  rounded-lg shadow-lg z-30 
          transition-opacity duration-300 ${isFocused ? 'opacity-100' : 'opacity-0'}`}>
          <h3 className="text-xl font-bold mb-2">Top Users</h3>
          <ul className="space-y-2">
            {(searchTerm ? filteredUsers : topUsers).map((user, index) => (
              <li key={index} className="text-neon-blue hover:text-neon-yellow cursor-pointer transition-colors">
                {user}
              </li>
            ))}
          </ul>

          <h3 className="text-xl font-bold mt-4">Top Posts</h3>
          <ul className="space-y-2">
            {(searchTerm ? filteredPosts : topPosts).map((post, index) => (
              <li key={index} className="text-neon-pink hover:text-neon-green cursor-pointer transition-colors">
                {post}
              </li>
            ))}
          </ul>
        </div>
        </>
    )
}