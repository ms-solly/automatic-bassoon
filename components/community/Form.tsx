import React, { useState } from 'react';
import { Input } from '../ui/input';

const CreateCommunityForm: React.FC = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for creating a community
    alert(`Community "${name}" created!`);
    setName('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-900 p-6 rounded-lg shadow-neon-green">
      <h2 className="text-2xl font-bold text-neon-green mb-4">Create Your Community</h2>
      <div className="mb-4">
        <label className="block text-neon-blue mb-2">Community Name</label>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 rounded bg-gray-800 text-neon-green"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-neon-blue mb-2">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 rounded bg-gray-800 text-neon-green"
          required
          title='textarea'
        />
      </div>
      <button type="submit" className="text-neon-pink hover:text-neon-pink-active">Create Community</button>
    </form>
  );
};

export default CreateCommunityForm;