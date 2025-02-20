import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const images = [
    'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&auto=format&fit=crop&q=60',
    'https://plus.unsplash.com/premium_photo-1677110758260-e04d45879112?w=600&auto=format&fit=crop&q=60',
    'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&auto=format&fit=crop&q=60'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Auto-slide every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex]); // Re-run interval when index changes

  const nextSlide = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsFading(false);
    }, 300); // Match this duration with the CSS transition
  };

  const prevSlide = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      setIsFading(false);
    }, 300);
  };

  return (
    <div className="relative w-[99%] h-[400px] mx-auto mt-[155px] mb-[10px] overflow-hidden rounded-lg shadow-lg">
      {/* Image with opacity transition */}
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className={`w-full h-full object-cover transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'}`}
      />

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75"
      >
        <ChevronLeft />
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75"
      >
        <ChevronRight />
      </button>
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-4 h-4 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}>

            </button>
        ))}
      </div>

    </div>
  );
};

export default Hero;
// import React, { useState, useEffect } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// const images = [
//   "https://marscosmetics.in/cdn/shop/products/01KATHAKKWEEN-02SwatchW.jpg?v=1667821827&width=2000",
//   "https://marscosmetics.in/cdn/shop/products/01KATHAKKWEEN-02SwatchW.jpg?v=1667821827&width=2000",
//   "https://marscosmetics.in/cdn/shop/files/WEBSITEcopy_76e66aad-2caa-4305-a34b-8466f60e1277.jpg?v=1704279099&width=2000",
//   "https://marscosmetics.in/cdn/shop/products/01KATHAKKWEEN-02SwatchW.jpg?v=1667821827&width=2000",
//   "https://marscosmetics.in/cdn/shop/files/WEBSITEcopy_76e66aad-2caa-4305-a34b-8466f60e1277.jpg?v=1704279099&width=2000"
// //   "https://source.unsplash.com/800x400/?skincare,products"
// ];

// const Hero = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   return (
//     <div className="relative w-full h-[400px] flex items-center justify-center bg-gray-200 overflow-hidden">
//       <img
//         src={images[currentIndex]}
//         alt="Hero"
//         className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
//       />
      
//       <button
//         onClick={handlePrev}
//         className="absolute left-5 text-white bg-black/50 p-3 rounded-full hover:bg-black"
//       >
//         <FaArrowLeft size={20} />
//       </button>
      
//       <button
//         onClick={handleNext}
//         className="absolute right-5 text-white bg-black/50 p-3 rounded-full hover:bg-black"
//       >
//         <FaArrowRight size={20} />
//       </button>
      
//       <div className="absolute bottom-5 flex space-x-2">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`w-4 h-4 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
//           ></button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Hero;
