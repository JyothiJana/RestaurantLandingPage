// src/pages/Login.jsx
import React, { useState } from 'react';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';

const Login = () => {
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        'recaptcha-container',
        {
          size: 'invisible',
        }
      );
    }
  };

  const handleNext = async (e) => {
    e.preventDefault();

    // Remove non-numeric characters
    const cleanedPhone = phone.replace(/\D/g, '');

    // Validate phone number
    if (cleanedPhone.length < 10) {
      return alert('Please enter a valid 10-digit phone number');
    }

    setupRecaptcha();
    const appVerifier = window.recaptchaVerifier;
    const formattedPhone = `+${cleanedPhone}`;

    try {
      const confirmationResult = await signInWithPhoneNumber(
        auth,
        formattedPhone,
        appVerifier
      );
      window.confirmationResult = confirmationResult;
      localStorage.setItem('phone', formattedPhone);
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

        <PhoneInput
          country={'in'}
          value={phone}
          onChange={setPhone}
          inputStyle={{
            width: '100%',
            background: 'rgba(255,255,255,0.2)',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            padding: '10px',
          }}
          buttonStyle={{ border: 'none' }}
          dropdownStyle={{ color: 'black' }}
        />

        <button
          onClick={handleNext}
          className='mt-4 w-full py-3 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold hover:opacity-90 transition cursor-pointer'
        >
          Send OTP
        </button>
      </div>
    </div>
  );
};

export default Login;
