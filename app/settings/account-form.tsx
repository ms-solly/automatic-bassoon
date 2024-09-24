'use client';

import { useState } from 'react';
import styled from 'styled-components';
import { createClient } from '@/utils/supabase/client';
import { Button } from '@/components/ui/button';

interface User {
  id: string;
  fullname: string;
  username: string;
  avatar_url: string;
  website: string;
}

const AccountForm = ({ user }: { user: User }) => {
  const supabase = createClient();

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(user?.avatar_url || null);
  const [fullName, setFullName] = useState(user?.fullname || '');
  const [username, setUsername] = useState(user?.username || '');
  const [website, setWebsite] = useState(user?.website || '');
  const [websiteError, setWebsiteError] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const updateProfile = async (profileData: { fullname: string; username: string; website: string; avatar_url: string | null }) => {
    const profileUpdate = {
      full_name: profileData.fullname,
      username: profileData.username,
      website: profileData.website,
      avatar_url: profileData.avatar_url,
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate website URL
    const websitePattern = /^(https?:\/\/)?([a-zA-Z0-9\-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/.*)?$/;
    if (website && !websitePattern.test(website)) {
      setWebsiteError('Please enter a valid website URL (e.g., https://example.com)');
      return;
    } else {
      setWebsiteError('');
    }

    // Call the function to update the profile
    await updateProfile({ fullname: fullName, username, website, avatar_url: selectedFile ? imagePreview : user.avatar_url });
  };

  return (
    <StyledWrapper>
      <form className="file-upload-form m-3 mx-5" onSubmit={handleSubmit}>
        <label htmlFor="file" className="file-upload-label">
          <div className="file-upload-design">
            {imagePreview ? (
              <img src={imagePreview} alt="Uploaded" className="image-preview" />
            ) : (
              <>
                <svg viewBox="0 0 640 512" height="1em">
                  <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z" />
                </svg>
                <p>Drag and Drop</p>
              </>
            )}
            <p>or</p>
            <span className="browse-button">Browse file</span>
          </div>
          <input id="file" type="file" onChange={handleFileChange} />
        </label>
        {imagePreview && (
          <p className="change-text">Drop and Paste to change the image</p>
        )}

        <div className="relative z-0 w-full mb-6 group lg:w-2/3">
          <input
            type="text"
            name="fullname"
            id="fullname"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-neon-green peer"
            placeholder=" "
          />
          <label
            htmlFor="fullname"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-neon-green peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Full Name
          </label>
        </div>

        <div className="relative z-0 w-full mb-6 group lg:w-2/3">
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-neon-green peer"
            placeholder=" "
          />
          <label
            htmlFor="username"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-neon-green peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Username
          </label>
        </div>

        <div className="relative z-0 w-full mb-6 group lg:w-2/3">
          <input
            type="url"
            name="website"
            id="website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-neon-green peer"
            placeholder=" "
          />
          <label
            htmlFor="website"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-neon-green peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Website
          </label>
          {websiteError && <p className="text-red-500 text-sm mt-1">{websiteError}</p>}
          <p className="text-gray-400 text-sm mt-1">e.g., https://example.com</p>
        </div>

        <Button
          type="submit"
          className="px-6 py-2 bg-neon-green text-white rounded-md hover:bg-neon-green focus:outline-none focus:ring focus:ring-neon-green"
        >
          Save Changes
        </Button>
      </form>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .file-upload-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  .file-upload-label input {
    display: none;
  }

  .file-upload-label svg {
    fill: gray;
  }

  .file-upload-design {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 2px dashed #d1d5db; /* Light gray border */
    border-radius: 8px;
    padding: 20px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .file-upload-design:hover {
    background-color: rgba(0, 0, 0, 0.1); /* Slight darkening on hover */
  }

  .image-preview {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 10px;
  }

  .change-text {
    color: #4a5568; /* Gray text */
  }
`;

export default AccountForm;
