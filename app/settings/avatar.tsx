'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { createClient } from '@/utils/supabase/client';
import { Input } from '@/components/ui/input';

interface AvatarProps {
  uid: string;
  url: string;
  size: number;
  onUpload: (url: string) => void;
}

const Avatar: React.FC<AvatarProps> = ({ uid, url, size, onUpload }) => {
  const [imageUrl, setImageUrl] = useState(url);

  const uploadAvatar = async (file: File) => {
    const supabase = createClient();

    const { error, data } = await supabase.storage
      .from('avatars')
      .upload(`public/${uid}/${file.name}`, file);

    if (error) {
      console.error('Error uploading avatar:', error.message);
    } else if (data) {
      const newUrl = `https://your-supabase-url/storage/v1/object/public/${data.path}`;
      setImageUrl(newUrl);
      onUpload(newUrl);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      uploadAvatar(event.target.files[0]);
    }
  };

  return (
    <div className="relative">
      <Image
        src={imageUrl}
        alt="Avatar"
        width={size}
        height={size}
        className="rounded-full"
      />
      <Input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="absolute bottom-0 right-0 opacity-0 cursor-pointer"
      />
    </div>
  );
};

export default Avatar;
