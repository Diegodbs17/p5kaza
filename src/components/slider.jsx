import React, { useState } from "react";

const Slider = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (!pictures || pictures.length === 0) {
    return <div>Aucune image disponible</div>;
  }

  return (
    <div className="slider">
      <div className="slider-container">
        <img
          src={pictures[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          className="slider-image"
        />
        <p className="slider-counter">
          {currentIndex + 1} / {pictures.length}
        </p>
      </div>
      {pictures.length > 1 && (
        <>
          <button className="slider-btn prev" onClick={prevImage}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button className="slider-btn next" onClick={nextImage}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </>
      )}
    </div>
  );
};

export default Slider;
