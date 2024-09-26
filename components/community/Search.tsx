"use client"
import React, { useState } from 'react';

const SearchFilterBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  return (
    <div className="flex items-center mb-6">
      <input 
        type="text" 
        className="w-full p-3 neon-input rounded-lg" 
        placeholder="Search Communities" 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="ml-3 px-4 py-2 neon-button rounded-lg">
        Filter
      </button>
    </div>
  );
};

export default SearchFilterBar;
