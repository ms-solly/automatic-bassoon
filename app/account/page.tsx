"use client"
import { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import AccountForm from './account-form';

// Define the User interface
interface User {
  id: string;
  fullname: string;
  username: string;
  avatar_url: string;
  website: string;
}

export default function Account() {
  const [user, setUser] = useState<User | null>(null);  // User state

  useEffect(() => {
    const supabase = createClient();

    async function getUser() {
      const { data, error } = await supabase.auth.getUser();
      
      if (error) {
        console.error('Error fetching user:', error.message);
        return;
      }

      // Use `user_metadata` instead of `raw_user_meta_data`
      const userData = data.user ? {
        id: data.user.id,
        fullname: data.user.user_metadata?.full_name || '',
        username: data.user.user_metadata?.username || '',
        avatar_url: data.user.user_metadata?.avatar_url || '',
        website: data.user.user_metadata?.website || '',
      } : null;

      setUser(userData);
    }

    getUser();
  }, []);

  return user ? <AccountForm user={user} /> : <p>Loading...</p>;
}
