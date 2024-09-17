import React from 'react';

interface FilterProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Filter: React.FC<FilterProps> = ({ value, onChange }) => {
    return (
        <div className="ml-2">
            <select
            title='filter'
                value={value}
                onChange={onChange}
                className="bg-gray-900 dark:bg-gray-800 text-white px-2 py-1 rounded border-none focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300"
            >
                <option value="all">All</option>
                <option value="user">User</option>
                <option value="post">Post</option>
                <option value="recipe">Recipe</option>
            </select>
        </div>
    );
};

export default Filter;