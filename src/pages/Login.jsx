// src/pages/Login.jsx
import React, { useState } from 'react';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const setupRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      auth,
      'recaptcha-container',
      {
        size: 'invisible',
      }
    );
  };

  const handleNext = async (e) => {
    e.preventDefault();
    if (phone.length < 10) return alert('Enter valid phone number');

    setupRecaptcha();
    const appVerifier = window.recaptchaVerifier;

    try {
      const confirmationResult = await signInWithPhoneNumber(
        auth,
        `+91${phone}`,
        appVerifier
      );
      window.confirmationResult = confirmationResult;
      localStorage.setItem('phone', phone);
      navigate('/otp');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div
      className='min-h-screen flex flex-col items-center justify-center bg-cover bg-center'
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dd6dkllbq/image/upload/v1762190954/4385652_rq08uj.jpg')",
      }}
    >
      <div id='recaptcha-container'></div>
      <div className='bg-white/10 backdrop-blur-md border border-white/20 p-10 rounded-2xl shadow-2xl w-96 text-center'>
        <h2 className='text-3xl font-bold text-white mb-6'>Login with Phone</h2>
        <input
          type='text'
          placeholder='Enter phone number'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className='w-full p-3 mb-4 rounded-lg bg-white/20 text-white placeholder-gray-200 outline-none'
        />
        <button
          onClick={handleNext}
          className='w-full py-3 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold hover:opacity-90 transition cursor-pointer'
        >
          Send OTP
        </button>
      </div>
    </div>
  );
};

export default Login;
