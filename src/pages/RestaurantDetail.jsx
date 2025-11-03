import React, { useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mockRestaurants } from '../api/mockData';

const RestaurantDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const canvasRef = useRef(null);

  // Find the selected restaurant from mock data
  const restaurant = mockRestaurants.find((r) => r.id === id);

  useEffect(() => {
    if (!restaurant) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const restaurantImg = new Image();
    const logoImg = new Image();

    restaurantImg.crossOrigin = 'Anonymous';
    restaurantImg.src = restaurant.imageURL;
    logoImg.src = '/fastor-logo.png';

    restaurantImg.onload = () => {
      ctx.drawImage(restaurantImg, 0, 0, canvas.width, canvas.height);
      logoImg.onload = () => {
        const logoSize = 100;
        const x = canvas.width / 2 - logoSize / 2;
        const y = canvas.height / 2 - logoSize / 2;
        ctx.drawImage(logoImg, x, y, logoSize, logoSize);
      };
    };
  }, [restaurant]);

  const handleShare = async () => {
    if (!navigator.share) {
      alert('Web Share API is not supported in this browser.');
      return;
    }

    const canvas = canvasRef.current;
    const blob = await new Promise((resolve) =>
      canvas.toBlob(resolve, 'image/png')
    );
    const file = new File([blob], `${restaurant.name}-Fastor.png`, {
      type: 'image/png',
    });

    try {
      await navigator.share({
        files: [file],
        title: restaurant.name,
        text: `Check out ${restaurant.name} via Fastor!`,
      });
    } catch (err) {
      console.error('Sharing failed:', err);
    }
  };

  if (!restaurant) {
    return (
      <div className='text-center mt-20 text-white text-2xl'>
        Restaurant not found 😕
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-orange-500 to-red-700 text-white p-10'>
      <button
        onClick={() => navigate(-1)}
        className='mb-6 bg-white/20 px-4 py-2 rounded-lg hover:bg-white/30 transition cursor:pointer'
      >
        ← Back
      </button>

      <div className='max-w-3xl mx-auto bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-xl'>
        <h1 className='text-4xl font-bold mb-3'>{restaurant.name}</h1>
        <p className='text-lg text-gray-200 mb-2'>⭐ {restaurant.rating}</p>
        <p className='text-gray-300 mb-6'>{restaurant.address}</p>

        <div className='flex justify-center mb-6'>
          <canvas
            ref={canvasRef}
            width={600}
            height={400}
            className='rounded-lg border border-white/20 shadow-lg'
          />
        </div>

        <p className='text-gray-100 text-center mb-6'>
          Enjoy the best dishes at {restaurant.name}! Known for authentic
          flavors and a cozy ambiance perfect for your next meal.
        </p>

        <div className='text-center'>
          <button
            onClick={handleShare}
            className='px-6 py-3 bg-gradient-to-r from-green-500 to-lime-500 rounded-lg font-semibold hover:opacity-90 transition cursor-pointer'
          >
            Share This Restaurant 📤
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetail;
