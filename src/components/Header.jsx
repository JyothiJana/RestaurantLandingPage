// src/components/Header.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove authentication and go back to login
    localStorage.removeItem('isAuthenticated');
    navigate('/');
  };

  return (
    <header className='flex justify-between items-center p-4 mb-8 bg-black/30 backdrop-blur-md border border-white/20 rounded-xl text-white shadow-lg'>
      <h1
        className='text-2xl font-bold cursor-pointer hover:text-orange-400 transition'
        onClick={() => navigate('/restaurants')}
      >
        🍽️ My Restaurant App
      </h1>
      <button
        onClick={handleLogout}
        className='bg-gradient-to-r from-red-500 to-orange-500 px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition cursor-pointer'
      >
        Logout
      </button>
    </header>
  );
};

export default Header;
