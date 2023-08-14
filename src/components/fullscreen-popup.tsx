import React, { useState } from 'react';

const FullScreenImageModal = ({ imageUrl, onClose }:any) => {
  return (
    <div className="fullscreen-modal">
      <div className="overlay" onClick={onClose}></div>
      <div className="content">
        <img src={imageUrl} alt="Full Screen" />
      </div>
    </div>
  );
};

export default FullScreenImageModal;
