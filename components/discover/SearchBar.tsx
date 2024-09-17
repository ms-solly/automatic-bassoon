"use client";
import React, { useState } from 'react';
import Filter from '../functions/Filter';
import { SearchResult } from '@/types/Search';

const topPosts = [
    { id: 1, title: "Delicious Vegan Tacos", description: "A delightful recipe for vegan tacos." },
    { id: 2, title: "Healthy Smoothie Bowls", description: "Packed with nutrients for a fresh start." },
    { id: 3, title: "Vegan Pasta Salad", description: "A fresh, vibrant pasta salad with tangy dressing." }
];

const topUsers = [
    { id: 1, username: "VeganChef123", avatarUrl: "/avatar.png" },
    { id: 2, username: "GreenGuru", avatarUrl: "/avatar.png" },
    { id: 3, username: "PlantBasedPro", avatarUrl: "/avatar.png" }
];

const topRecipes = [
    { id: 1, title: "Vegan Pasta Salad", description: "A fresh, vibrant pasta salad with tangy dressing.", imageUrl: "/food.jpg" },
    { id: 2, title: "Healthy Smoothie Bowls", description: "Packed with nutrients for a fresh start.", imageUrl: "/food.jpg" },
    { id: 3, title: "Delicious Vegan Tacos", description: "A delightful recipe for vegan tacos.", imageUrl: "/food.jpg" }
];

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState<'all' | 'user' | 'post' | 'recipe'>('all');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value);
    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => setFilter(e.target.value as 'all' | 'user' | 'post' | 'recipe');

    const filteredPosts = topPosts.filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()));
    const filteredUsers = topUsers.filter(user => user.username.toLowerCase().includes(searchTerm.toLowerCase()));
    const filteredRecipes = topRecipes.filter(recipe => recipe.title.toLowerCase().includes(searchTerm.toLowerCase()));

    const combinedResults: SearchResult[] = (filter === 'all') ? [
        ...filteredUsers.map(user => ({ type: 'user', ...user } as SearchResult)),
        ...filteredPosts.map(post => ({ type: 'post', ...post } as SearchResult)),
        ...filteredRecipes.map(recipe => ({ type: 'recipe', ...recipe } as SearchResult)),
    ] : [];

    let results;
    if (searchTerm === '') {
        results = <p className="text-white text-center">Please enter a search term to see results.</p>;
    } else {
        if (filter === 'all') {
            results = combinedResults.length > 0 ? (
                <div>
                    {combinedResults.map((item, index) => {
                        switch (item.type) {
                            case 'user':
                                return (
                                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-800 dark:bg-gray-700 rounded-lg mb-2">
                                        <img src={item.avatarUrl} alt={item.username} className="w-12 h-12 rounded-full border-4 border-neon-green shadow-md" />
                                        <span className="text-white">{item.username}</span>
                                    </div>
                                );
                            case 'post':
                                return (
                                    <div key={index} className="p-3 bg-gray-800 dark:bg-gray-700 rounded-lg mb-2">
                                        <strong className="text-white">{item.title}</strong>: {item.description}
                                    </div>
                                );
                            case 'recipe':
                                return (
                                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-800 dark:bg-gray-700 rounded-lg mb-2">
                                        <img src={item.imageUrl} alt={item.title} className="w-16 h-16 rounded-lg border-4 border-neon-blue shadow-md" />
                                        <div>
                                            <h4 className="text-lg text-white">{item.title}</h4>
                                            <p className="text-sm text-gray-400">{item.description}</p>
                                        </div>
                                    </div>
                                );
                            default:
                                return null;
                        }
                    })}
                </div>
            ) : (
                <p className="text-white text-center">No results found</p>
            );
        } else {
            switch (filter) {
                case 'user':
                    results = filteredUsers.length > 0 ? (
                        <ul className="flex flex-col space-y-2">
                            {filteredUsers.map(user => (
                                <li key={user.id} className="flex items-center space-x-3 p-3 bg-gray-800 dark:bg-gray-700 rounded-lg">
                                    <img src={user.avatarUrl} alt={user.username} className="w-12 h-12 rounded-full border-4 border-neon-green shadow-md" />
                                    <span className="text-white">{user.username}</span>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-white text-center">No users found</p>
                    );
                    break;
                case 'post':
                    results = filteredPosts.length > 0 ? (
                        <ul className="space-y-2">
                            {filteredPosts.map(post => (
                                <li key={post.id} className="p-3 bg-gray-800 dark:bg-gray-700 rounded-lg">
                                    <strong className="text-white">{post.title}</strong>: {post.description}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-white text-center">No posts found</p>
                    );
                    break;
                case 'recipe':
                    results = filteredRecipes.length > 0 ? (
                        <ul className="space-y-2">
                            {filteredRecipes.map(recipe => (
                                <li key={recipe.id} className="flex items-center space-x-3 p-3 bg-gray-800 dark:bg-gray-700 rounded-lg">
                                    <img src={recipe.imageUrl} alt={recipe.title} className="w-16 h-16 rounded-lg border-4 border-neon-blue shadow-md" />
                                    <div>
                                        <h4 className="text-lg text-white">{recipe.title}</h4>
                                        <p className="text-sm text-gray-400">{recipe.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-white text-center">No recipes found</p>
                    );
                    break;
                default:
                    results = <p className="text-white text-center">Please select a filter</p>;
                    break;
            }
        }
    }

    return (
        <div className="relative flex flex-col items-center w-full max-w-xl mx-auto my-8">
            <div className="flex items-center w-full">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleChange}
                    placeholder="Search for users, posts, recipes..."
                    className="w-full px-4 py-2 text-white bg-gray-900 dark:bg-gray-800 rounded-full border-none focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300"
                    style={{ boxShadow: `0 0 15px rgba(255, 105, 180, 0.7)` }}
                />
                <Filter value={filter} onChange={handleFilterChange} />
            </div>

            <div className="w-full mt-6">
                {results}
            </div>
        </div>
    );
};

export default SearchBar;
