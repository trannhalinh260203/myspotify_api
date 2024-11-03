// src/components/img.jsx
import React from 'react';
import './img.css'; // Nhập file CSS mới tạo

const Img = ({ src, alt }) => {
  return (
    <div className="image-container">
      <img src={src} alt={alt} className="album-image" />
    </div>
  );
};

export default Img;
