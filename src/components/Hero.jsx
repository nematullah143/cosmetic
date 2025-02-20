
import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const images = [
  "https://marscosmetics.in/cdn/shop/products/01KATHAKKWEEN-02SwatchW.jpg?v=1667821827&width=2000",
  "https://marscosmetics.in/cdn/shop/products/01KATHAKKWEEN-02SwatchW.jpg?v=1667821827&width=2000",
  "https://marscosmetics.in/cdn/shop/files/WEBSITEcopy_76e66aad-2caa-4305-a34b-8466f60e1277.jpg?v=1704279099&width=2000",
  "https://marscosmetics.in/cdn/shop/products/01KATHAKKWEEN-02SwatchW.jpg?v=1667821827&width=2000",
  "https://marscosmetics.in/cdn/shop/files/WEBSITEcopy_76e66aad-2caa-4305-a34b-8466f60e1277.jpg?v=1704279099&width=2000"
//   "https://source.unsplash.com/800x400/?skincare,products"
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full h-[400px] flex items-center justify-center bg-gray-200 overflow-hidden">
      <img
        src={images[currentIndex]}
        alt="Hero"
        className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
      />
      
      <button
        onClick={handlePrev}
        className="absolute left-5 text-white bg-black/50 p-3 rounded-full hover:bg-black"
      >
        <FaArrowLeft size={20} />
      </button>
      
      <button
        onClick={handleNext}
        className="absolute right-5 text-white bg-black/50 p-3 rounded-full hover:bg-black"
      >
        <FaArrowRight size={20} />
      </button>
      
      <div className="absolute bottom-5 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Hero;
