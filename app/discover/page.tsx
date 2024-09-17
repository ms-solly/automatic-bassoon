"use client"
import React, { useState } from 'react';
import SearchBar from '@/components/discover/SearchBar';
import TopUsers from '@/components/discover/TopUsers';
import TopPosts from '@/components/discover/TopPosts';
import EngagingFooter from '@/components/feed/Footer';
import FloatingActionButton from '@/components/feed/FloatingActionBtn';
import TopRecipes from '@/components/discover/TopRecipes';

const Discover: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
  
    // Demo data for top users and posts
    const topUsers = ['VeganChef123', 'HealthyEats', 'PlantPower'];
    const topPosts = ['Delicious Vegan Pizza Recipe', 'How to Make Smoothie Bowls', 'Top 5 Vegan Desserts'];
  
    return (
      <div className="min-h-screen ">
        <SearchBar 
        />
        <TopUsers/>
        <TopRecipes/>
        <TopPosts/>
      <FloatingActionButton />
      <EngagingFooter />
    </div>
  );
};

export default Discover;
