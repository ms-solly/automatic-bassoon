'use client';

import { useState } from 'react';
import Avatar from './avatar'; // Ensure this is correctly imported
import { createClient } from '@/utils/supabase/client';

interface User {
  id: string;
  fullname: string;
  username: string;
  avatar_url: string;
  website: string;
}

export default function AccountForm({ user }: { user: User }) {
  const supabase = createClient();

  const [avatarUrl, setAvatarUrl] = useState(user?.avatar_url || '');
  const [fullname, setFullname] = useState(user?.fullname || '');
  const [username, setUsername] = useState(user?.username || '');
  const [website, setWebsite] = useState(user?.website || '');

  const updateProfile = async (profileData: { fullname: string; username: string; website: string; avatar_url: string }) => {
    const { fullname, username, website, avatar_url } = profileData;

    const profileUpdate = {
      full_name: fullname || user.fullname,
      username: username || user.username,
      website: website || user.website,
      avatar_url: avatar_url || user.avatar_url,
    };

    try {
      const { error } = await supabase
        .from('profiles')
        .update(profileUpdate)
        .eq('id', user.id);

      if (error) {
        console.error('Error updating profile:', error.message);
        throw error;
      }

      alert('Profile updated successfully!');
    } catch (error) {
      alert('Error updating the profile!');
      console.error('Error during profile update:', error);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    updateProfile({ fullname, username, website, avatar_url: avatarUrl });
  };

  return (
    <form onSubmit={handleSubmit} className="form-widget">
      <Avatar
        uid={user?.id ?? null}
        url={avatarUrl}
        size={150}
        onUpload={(url: string) => {
          setAvatarUrl(url);
          updateProfile({ fullname, username, website, avatar_url: url });
        }}
      />

      <div className="mb-4">
        <label htmlFor="fullname" className="block text-sm font-medium">
          Full Name
        </label>
        <input
          id="fullname"
          type="text"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring focus:ring-indigo-200 focus:border-indigo-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="username" className="block text-sm font-medium">
          Username
        </label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring focus:ring-indigo-200 focus:border-indigo-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="website" className="block text-sm font-medium">
          Website
        </label>
        <input
          id="website"
          type="text"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring focus:ring-indigo-200 focus:border-indigo-500"
        />
      </div>

      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
      >
        Save Changes
      </button>
    </form>
  );
}
