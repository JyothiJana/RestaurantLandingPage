// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCPow5OYzalJA_P70xuMVCrXriz03ZkpbE',
  authDomain: 'restaurantlandingpage-b73a9.firebaseapp.com',
  projectId: 'restaurantlandingpage-b73a9',
  storageBucket: 'restaurantlandingpage-b73a9.firebasestorage.app',
  messagingSenderId: '721115128135',
  appId: '1:721115128135:web:0c9bc9ee452cfd67c2ac62',
  measurementId: 'G-8WEJ9HF5G6',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
