// src/App.js
import React from 'react';
import SpotifyLogin from './components/SpotifyLogin';
import Header from './Header/header.js'; // Import Header
import './App.css'; // Đảm bảo import file CSS

function App() {
  return (
    <div>
      <Header /> {/* Hiển thị Header với logo */}
      <div className="background-image" id="backgroundImage" />
      <SpotifyLogin />
    </div>
  );
}

export default App;
