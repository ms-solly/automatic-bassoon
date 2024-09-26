import React, { useState } from 'react';

interface CreateCommunityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateCommunityModal: React.FC<CreateCommunityModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [category, setCategory] = useState<string>('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-gray-900 p-8 rounded-lg neon-border w-96">
        <h2 className="text-xl font-bold mb-4 neon-text">Create a Community</h2>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="text"
            className="w-full p-2 neon-input rounded"
            placeholder="Community Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea 
            className="w-full p-2 neon-input rounded"
            placeholder="Community Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <select 
            className="w-full p-2 neon-input rounded"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            title='search'
          >
            <option value="">Select Category</option>
            <option value="Recipes">Recipes</option>
            <option value="Animal Rights">Animal Rights</option>
            <option value="Health">Health</option>
          </select>
          <div className="flex justify-end space-x-2">
            <button 
              type="button" 
              className="px-4 py-2 neon-button rounded" 
              onClick={onClose}
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="px-4 py-2 neon-button rounded"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCommunityModal;
