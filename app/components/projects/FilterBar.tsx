'use client';

import React, { useState } from 'react';

const categories = ['All', 'Webapps', 'E-commerce', 'Services', 'AI '];

export default function FilterBar() {
  const [activeFilter, setActiveFilter] = useState('All');

  return (
    <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveFilter(category)}
          className={`px-4 py-2 rounded-full font-semibold transition-colors duration-300 ${
            activeFilter === category
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}