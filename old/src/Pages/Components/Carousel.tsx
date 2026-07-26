import React, { useState } from 'react';
import '../../Styles/Carousel.css';

interface CarouselProps {
  children: React.ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = React.Children.count(children);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel-wrapper"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => (
          <div className="carousel-slide" key={index}>
            {child}
          </div>
        ))}
      </div>
      <button onClick={prevSlide} className="carousel-button prev">
        &lt;
      </button>
      <button onClick={nextSlide} className="carousel-button next">
        &gt;
      </button>
    </div>
  );
};

export default Carousel;

