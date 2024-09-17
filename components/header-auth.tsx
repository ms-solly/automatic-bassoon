"use client"; // Ensure it's a Client Component
import { useState, useEffect } from "react";
import ProfileDropdown from "./ProfileDropdown";
import { createClient } from "@/utils/supabase/client"; // Client-side Supabase helper
import { Button } from "./ui/button";

export default function AuthButton() {
  const [user, setUser] = useState<any>(null); // Store user data

  useEffect(() => {
    const supabase = createClient();

    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user); // Set the user state
    };

    getUser();
  }, []);

  // Handle sign out logic
  const handleSignOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    setUser(null); // Reset user state after signing out
  };

  // If user is not logged in, show sign-in/sign-up buttons
  if (!user) {
    return (
      <div className="flex gap-2">
        <Button className="btn btn-outline">
          <a href="/sign-in">Sign in</a>
        </Button>
        <Button className="btn btn-primary">
          <a href="/sign-up">Sign up</a>
        </Button>
      </div>
    );
  }

  // Render ProfileDropdown with user data
  return <ProfileDropdown userId={user.id} onSignOut={handleSignOut} />;
}
