"use client";
import React, { useState, useEffect } from "react";

// Vegan-specific categories
const categories = ["Cooking", "Health", "Lifestyle", "Fitness", "Sustainability"];

const Search: React.FC = () => {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null); // Allow 'null'
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [filteredCategories, setFilteredCategories] = useState(categories);

  useEffect(() => {
    if (query) {
      const filtered = categories.filter((category) =>
        category.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredCategories(filtered);
    } else {
      setFilteredCategories(categories);
    }
  }, [query]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", query, "in category:", selectedCategory || "All Categories");
    // Implement search logic here
  };

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false); // Close dropdown
  };

  return (
    <div className="w-full max-w-2xl mx-auto mb-6 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
      <form onSubmit={handleSearch} className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search communities..."
          className="w-full p-3 pr-16 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neon-blue bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200"
        />
        <button
          type="submit"
          className="absolute right-0 top-0 h-full px-4 text-white bg-neon-blue rounded-md hover:bg-neon-pink transition-colors"
        >
          Search
        </button>
      </form>

      {/* Category Filter Dropdown */}
      <div className="mt-4 flex items-center justify-between">
        <p className="text-gray-700 dark:text-gray-300">Filter by Category:</p>
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="inline-flex items-center justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none"
          >
            {selectedCategory ? selectedCategory : "Select Category"}
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {isDropdownOpen && (
            <ul className="absolute z-10 mt-2 w-56 bg-white dark:bg-gray-800 border border-gray-300 rounded-md shadow-lg">
              <li
                onClick={() => handleCategoryChange(null)}
                className={`px-4 py-2 cursor-pointer hover:bg-neon-pink dark:hover:bg-neon-green ${
                  !selectedCategory ? "font-semibold" : ""
                }`}
              >
                All Categories
              </li>
              {filteredCategories.length > 0 ? (
                filteredCategories.map((category) => (
                  <li
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`px-4 py-2 cursor-pointer hover:bg-neon-pink dark:hover:bg-neon-green ${
                      selectedCategory === category ? "font-semibold" : ""
                    }`}
                  >
                    {category}
                  </li>
                ))
              ) : (
                <li className="px-4 py-2 text-gray-500">No categories found</li>
              )}
            </ul>
          )}
        </div>
      </div>

      {selectedCategory && (
        <div className="mt-3 text-sm text-neon-blue">
          <span>Filtered by: </span>
          <span className="font-semibold">{selectedCategory}</span>
        </div>
      )}
    </div>
  );
};

export default Search;
