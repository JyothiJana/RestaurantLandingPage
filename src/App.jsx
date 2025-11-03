// src/App.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Otp from './pages/Otp';
import RestaurantList from './pages/RestaurantList';
import RestaurantDetail from './pages/RestaurantDetail';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  return (
    <Routes>
      {/* ✅ Redirect to /restaurants if already logged in */}
      <Route
        path='/'
        element={
          isAuthenticated ? <Navigate to='/restaurants' replace /> : <Login />
        }
      />
      <Route
        path='/otp'
        element={
          isAuthenticated ? <Navigate to='/restaurants' replace /> : <Otp />
        }
      />

      {/* ✅ Protected Pages */}
      <Route
        path='/restaurants'
        element={
          <ProtectedRoute>
            <RestaurantList />
          </ProtectedRoute>
        }
      />
      <Route
        path='/restaurant/:id'
        element={
          <ProtectedRoute>
            <RestaurantDetail />
          </ProtectedRoute>
        }
      />

      {/* ✅ Catch-all route for unknown URLs */}
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  );
}

export default App;
