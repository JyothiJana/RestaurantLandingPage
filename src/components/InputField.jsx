// src/components/InputField.jsx
import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const InputField = ({ type, value, onChange, placeholder, label }) => {
  return (
    <div className='mb-4 text-left'>
      {label && <label className='block text-white mb-2'>{label}</label>}

      {type === 'phone' ? (
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
            paddingLeft: '48px', // space for flag & code
          }}
          buttonStyle={{
            background: 'transparent',
            border: 'none',
          }}
          containerStyle={{
            width: '100%',
          }}
          dropdownStyle={{
            color: 'black',
          }}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className='w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-200 outline-none'
        />
      )}
    </div>
  );
};

export default InputField;
