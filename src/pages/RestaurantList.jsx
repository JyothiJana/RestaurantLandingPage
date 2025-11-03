// src/pages/RestaurantList.jsx
import React from 'react';
import { mockRestaurants } from '../api/mockData';
import RestaurantCard from '../components/RestaurantCard';
import Header from '../components/Header'; // ✅ Import Header

const RestaurantList = () => {
  return (
    <div
      className='min-h-screen bg-cover bg-center p-10'
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dd6dkllbq/image/upload/v1762190954/4385652_rq08uj.jpg')",
      }}
    >
      {/* ✅ Header with Logout Button */}
      <Header />

      <h1 className='text-4xl font-bold text-white mb-6 text-center'>
        🍴 Explore Restaurants
      </h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {mockRestaurants.map((res) => (
          <RestaurantCard key={res.id} {...res} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;
