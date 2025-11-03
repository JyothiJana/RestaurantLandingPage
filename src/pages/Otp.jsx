import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Otp = () => {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();
  const CORRECT_OTP = '123456';

  const handleVerify = (e) => {
    e.preventDefault();
    if (otp === CORRECT_OTP) {
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/restaurants', { replace: true });
    } else {
      alert('Invalid OTP. Try 123456');
    }
  };

  return (
    <div
      className='min-h-screen flex items-center justify-center bg-cover bg-center'
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dd6dkllbq/image/upload/v1762190954/4385652_rq08uj.jpg')",
      }}
    >
      <div className='bg-white/10 backdrop-blur-md border border-white/20 p-10 rounded-2xl shadow-2xl w-96 text-center'>
        <h2 className='text-3xl font-bold text-white mb-6'>Enter OTP</h2>
        <input
          type='text'
          placeholder='Enter 6-digit OTP'
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className='w-full p-3 mb-4 rounded-lg bg-white/20 text-white placeholder-gray-200 outline-none'
        />
        <button
          onClick={handleVerify}
          className='w-full py-3 rounded-lg bg-gradient-to-r from-green-500 to-lime-500 text-white font-semibold hover:opacity-90 transition cursor-pointer'
        >
          Verify OTP
        </button>
      </div>
    </div>
  );
};

export default Otp;
