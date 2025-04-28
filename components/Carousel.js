// Carousel Component Placeholder
import { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <img
          src={images[currentIndex]}
          alt="carousel image"
          className="w-full h-64 object-cover"
        />
      </div>
      <button
        onClick={goToPrev}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4 py-2 bg-gray-500 text-white"
      >
        Prev
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 bg-gray-500 text-white"
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
