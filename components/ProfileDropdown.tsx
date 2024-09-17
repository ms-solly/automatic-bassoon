"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { createClient } from "@/utils/supabase/client";

const ProfileDropdown = ({ userId, onSignOut }: { userId: string; onSignOut: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [profile, setProfile] = useState<{ full_name: string } | null>(null);

  useEffect(() => {
    const supabase = createClient();

    const fetchProfile = async () => {
      const { data, error } = await supabase
        .from("profiles")
        .select("full_name")
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

 
  const defaultImageUrl = "/profile.jpg"; // Default avatar

  return (
    <div className="relative">

      <div
        className="flex items-center space-x-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => setIsOpen(false)} 
      >
        <div className="relative">
          {/* Default Profile Image */}
          <Image
            src={defaultImageUrl}
            alt="Profile Picture"
            width={40} 
            height={40}
            className="rounded-full object-cover" 
          />
        </div>
        <div>
          <span className="font-semibold">{profile?.full_name || "Loading..."}</span>
        </div>
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
