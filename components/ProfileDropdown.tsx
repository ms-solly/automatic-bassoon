"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { createClient } from "@/utils/supabase/client"; // Client-side Supabase helper

const ProfileDropdown = ({ userId, onSignOut }: { userId: string; onSignOut: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [profile, setProfile] = useState<{ full_name: string; avatar_url: string } | null>(null);

  useEffect(() => {
    const supabase = createClient();

    const fetchProfile = async () => {
      const { data, error } = await supabase
        .from("profiles")
        .select("full_name, avatar_url")
        .eq("id", userId)
        .single();

      if (error) {
        console.error("Error fetching profile:", error);
      } else {
        setProfile(data);
      }
    };

    fetchProfile();
  }, [userId]);

  // Construct the full image URL if the avatar_url is relative
  const imageUrl = profile?.avatar_url
    ? profile.avatar_url.startsWith("http")
      ? profile.avatar_url
      : `https://seddbwbrfsogueadwive.supabase.co/storage/v1/s3${profile.avatar_url}` // Replace with your Supabase storage base URL
    : "/default-avatar.png"; // Default avatar fallback

  return (
    <div className="relative">
      {/* Profile avatar and name */}
      <div
        className="flex items-center space-x-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => setIsOpen(false)} // Closes dropdown on blur
      >
        <Image
          src={imageUrl} // Use the constructed image URL
          alt="Profile Picture"
          width={40}
          height={40}
          className="rounded-full"
        />
        <span className="font-semibold">{profile?.full_name || "Loading..."}</span>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md border border-gray-200 z-10 text-black">
          <ul className="text-left">
            {/* Settings link */}
            <li className="p-3 hover:bg-gray-100 cursor-pointer">
              <a href="/account" className="block w-full">
                Settings
              </a>
            </li>
            {/* Sign Out button */}
            <li className="p-3 hover:bg-gray-100 cursor-pointer" onClick={onSignOut}>
              Sign Out
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
