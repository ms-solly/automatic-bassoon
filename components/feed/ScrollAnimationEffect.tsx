"use client"

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ScrollAnimationEffects: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="space-y-4">
      <div data-aos="fade-up" className="bg-white rounded-lg shadow-md p-4 mb-4 border-l-4 border-purple-500 hover:shadow-lg hover:border-purple-600">
        <h2 className="text-xl font-bold mb-2">Animated Post</h2>
        <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div data-aos="fade-up" className="bg-white rounded-lg shadow-md p-4 mb-4 border-l-4 border-purple-500 hover:shadow-lg hover:border-purple-600">
        <h2 className="text-xl font-bold mb-2">Another Animated Post</h2>
        <p className="text-gray-700">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>
  );
};

export default ScrollAnimationEffects;
