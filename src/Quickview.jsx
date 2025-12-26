import React, { useState } from 'react';
import './styles/Quickview.css';

function Quickview({ product, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product || !product.images || product.images.length === 0) return null;

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="quickview-overlay" onClick={onClose}>
      <div className="quickview-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>

        <div className="quickview-image-gallery">
          {product.images.length > 1 && (
            <>
              <button className="gallery-arrow left" onClick={handlePrevImage}>←</button>
              <button className="gallery-arrow right" onClick={handleNextImage}>→</button>
            </>
          )}
          <img src={product.images[currentImageIndex]} alt={product.name} />
        </div>

        <div className="quickview-details">
          <h2 style={{ fontFamily: 'Custom', fontSize: '1.5rem' }}>{product.name}</h2>
          <p><strong>Price:</strong> ${product.price}</p>
          <p><strong>Size:</strong> {product.size}</p>
        </div>
      </div>
    </div>
  );
}

export default Quickview;
