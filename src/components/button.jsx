 //src/components/button.jsx
 import React from 'react';
 import './button.css'; // Nhập file CSS cho nút
 
 const Button = ({ isPlaying, onClick }) => {
   return (
     <button className="play-pause-button" onClick={onClick}>
       {isPlaying ? 'Pause' : 'Play'}
     </button>
   );
 };
 
 export default Button;