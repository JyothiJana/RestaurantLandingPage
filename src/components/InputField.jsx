// src/components/InputField.jsx
import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const InputField = ({ type, value, onChange, placeholder }) => {
  if (type === 'phone') {
    return (
      <PhoneInput
        country={'in'}
        value={value}
        onChange={onChange}
        inputStyle={{
          width: '100%',
          background: 'rgba(255, 255, 255, 0.2)',
          border: 'none',
          color: 'white',
          borderRadius: '8px',
          height: '48px',
        }}
        buttonStyle={{
          background: 'rgba(255, 255, 255, 0.3)',
          border: 'none',
        }}
        dropdownStyle={{
          color: 'black',
        }}
      />
    );
  }

  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className='w-full p-3 mb-4 rounded-lg bg-white/20 text-white placeholder-gray-200 outline-none'
    />
  );
};

export default InputField;
