// components/profile/Profile.tsx
"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client"; // Adjust the import path for Supabase client
import Header from "./Header";
import Details from "./Details";
import Posts from "./Posts";
import Communities from "./Community";

interface UserData {
  avatarUrl: string;
  name: string;
  username: string;
  status: string;
  bio: string;
  location: string;
  website: string;
  posts: { title: string; content: string; date: string; author: string; imageUrl?: string }[];
  communities: { name: string; imageUrl: string; latestPost: string }[];
}

const ProfilePg: React.FC = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const isDarkMode = true; // Replace with your state management for dark mode

  useEffect(() => {
    const fetchUserData = async () => {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();

      if (user) {
        const { user_metadata } = user;
        const username = user_metadata.email.split("@")[0]; // Use email prefix as username
        const name = user_metadata.full_name || user_metadata.name; // Use full_name or name

        setUserData({
          avatarUrl: "/profile.jpg", // Fetch from user's profile data if available
          name: name,
          username: username,
          status: "Making the world a greener place 🌱", // Update if necessary
          bio: "I love sharing vegan recipes, ideas, and collaborating with others to spread the plant-based lifestyle.", // Update if necessary
          location: "Green Valley, Earth", // Update if necessary
          website: "https://veganguru.com", // Update if necessary
          posts: [
            { title: "Vegan Pancakes", content: "Tried a new vegan pancake recipe today...", date: "September 21, 2024", author: "VeganChef", imageUrl: "/profile.jpg" },
            { title: "Community Meetup", content: "Had a great time meeting like-minded vegans!", date: "September 15, 2024", author: "VeganChef" },
            { title: "Sustainable Living", content: "Steps to adopt a more sustainable lifestyle...", date: "September 1, 2024", author: "VeganChef" },
          ],
          communities: [
            { name: "Vegan Cooking Club", imageUrl: "/community.jpg", latestPost: "Join us for a fun cooking session!" },
            { name: "Plant-Based Lifestyle", imageUrl: "/community.jpg", latestPost: "Share your favorite vegan snacks!" },
            { name: "Green Living Forum", imageUrl: "/community.jpg", latestPost: "Discuss sustainable practices." },
          ],
        });
      }
    };

    fetchUserData();
  }, []);

  if (!userData) {
    return <div>Loading...</div>; // Optional: Loading state while fetching data
  }

  return (
    <div className={`min-h-screen p-8 ${isDarkMode ? 'bg-transparent' : 'bg-transparent'}`}>
      <Header
        avatarUrl={userData.avatarUrl}
        name={userData.name}
        username={userData.username}
        status={userData.status}
        isDarkMode={isDarkMode}
      />
      <Details
        bio={userData.bio}
        location={userData.location}
        website={userData.website}
        isDarkMode={isDarkMode}
      />
      <Posts
        posts={userData.posts}
        isDarkMode={isDarkMode}
      />
      <Communities
        communities={userData.communities}
        isDarkMode={isDarkMode}
      />
    </div>
  );
};

export default ProfilePg;
