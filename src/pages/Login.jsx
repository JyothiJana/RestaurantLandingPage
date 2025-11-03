import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../components/InputField'; // ✅ import reusable component

const Login = () => {
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleNext = (e) => {
    e.preventDefault();
    if (phone.length < 10) {
      alert('Enter valid phone number');
      return;
    }
    localStorage.setItem('phone', phone);
    navigate('/otp');
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
        <h2 className='text-3xl font-bold text-white mb-6'>Welcome Back!</h2>

        {/* ✅ Use reusable InputField here */}
        <InputField
          type='phone'
          value={phone}
          onChange={setPhone}
          placeholder='Enter phone number'
        />

        <button
          onClick={handleNext}
          className='mt-4 w-full py-3 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold hover:opacity-90 transition cursor-pointer'
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Login;
