// src/components/RestaurantCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const RestaurantCard = ({ id, name, rating, address, imageURL }) => {
  const navigate = useNavigate();

  return (
    <div
      className='bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl shadow-lg hover:scale-105 transition cursor-pointer'
      onClick={() => navigate(`/restaurant/${id}`)}
    >
      <img
        src={imageURL}
        alt={name}
        className='rounded-lg w-full h-40 object-cover mb-3'
      />
      <h3 className='text-lg font-semibold text-white'>{name}</h3>
      <p className='text-gray-300 text-sm'>{address}</p>
      <p className='text-yellow-300 font-medium'>⭐ {rating}</p>
    </div>
  );
};

export default RestaurantCard;
