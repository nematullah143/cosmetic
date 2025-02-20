import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "SKINN Noura Iris Eau De Parfum For Her",
    price: 3295,
    offerPrice: 2995,
    image: "https://marscosmetics.in/cdn/shop/products/01KATHAKKWEEN-02SwatchW.jpg?v=1667821827&width=2000"
  },
  {
    id: 2,
    name: "Skinn by Titan Steele 100 ML Perfume",
    price: 2795,
    offerPrice: 2495,
    image: "https://marscosmetics.in/cdn/shop/products/01KATHAKKWEEN-02SwatchW.jpg?v=1667821827&width=2000"
  },
  {
    id: 3,
    name: "SKINN Nox Pour Femme Eau De Parfum",
    price: 3995,
    offerPrice: 3695,
    image: "https://marscosmetics.in/cdn/shop/products/01KATHAKKWEEN-02SwatchW.jpg?v=1667821827&width=2000"
  },
  {
    id: 4,
    name: "Skinn by Titan Raw 100 ML Perfume",
    price: 2795,
    offerPrice: 2495,
    image: "https://m.media-amazon.com/images/I/61H3WdnqIhL._SX522_.jpg"
  },
  {
    id: 5,
    name: "Skinn by Titan Sheer Perfume",
    price: 2995,
    offerPrice: 2695,
    image: "https://marscosmetics.in/cdn/shop/products/01KATHAKKWEEN-02SwatchW.jpg?v=1667821827&width=2000"
  },
  {
    id: 6,
    name: "Skinn by Titan Celeste Perfume",
    price: 3095,
    offerPrice: 2795,
    image: "https://m.media-amazon.com/images/I/71kffhbjAHL._SX522_.jpg"
  },
  {
    id: 7,
    name: "Skinn by Titan Amalfi Bleu Perfume",
    price: 3195,
    offerPrice: 2895,
    image: "https://marscosmetics.in/cdn/shop/products/01KATHAKKWEEN-02SwatchW.jpg?v=1667821827&width=2000"
  },
  {
    id: 8,
    name: "Skinn by Titan Pristine Perfume",
    price: 2895,
    offerPrice: 2595,
    image: "https://marscosmetics.in/cdn/shop/products/01KATHAKKWEEN-02SwatchW.jpg?v=1667821827&width=2000"
  },
  {
    id: 9,
    name: "Skinn by Titan Verge Perfume",
    price: 2795,
    offerPrice: 2495,
    image: "https://m.media-amazon.com/images/I/71CPOVrGBzL._SX522_.jpg"
  },
  {
    id: 10,
    name: "Skinn by Titan Extreme Perfume",
    price: 3595,
    offerPrice: 3295,
    image: "https://marscosmetics.in/cdn/shop/products/01KATHAKKWEEN-02SwatchW.jpg?v=1667821827&width=2000"
  }
];

const ShoppingCarousel = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % (products.length - 5));
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + (products.length - 5)) % (products.length - 5));
  };

  useEffect(() => {
    const autoSlide = setInterval(nextSlide, 3000);
    return () => clearInterval(autoSlide);
  }, []);

  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 py-10 px-4 text-center">
      <h2 className="text-2xl font-bold text-white mb-6 inline-block bg-black px-6 py-2 rounded-lg">
        Top Sellers
      </h2>
      <div className="relative flex items-center overflow-hidden w-full max-w-6xl mx-auto">
        <button onClick={prevSlide} className="absolute left-0 p-2 bg-gray-200 rounded-full shadow-md z-10">
          <FaArrowLeft className="text-gray-700 text-lg" />
        </button>
        <div className="flex w-full overflow-hidden px-10 py-4 justify-center">
          {products.slice(index, index + 6).map((product) => (
            <div
              key={product.id}
              className="w-60 bg-white rounded-lg shadow-md flex-shrink-0 mx-2 transition-transform duration-500 ease-in-out hover:scale-105 cursor-pointer hover:-translate-y-2"
            >
              <img
                className="w-full h-64 object-cover transition-transform duration-300 rounded-t-lg"
                src={product.image}
                alt={product.name}
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                <div className="flex justify-center items-center gap-2">
                  <span className="text-lg font-bold text-red-600">₹{product.offerPrice}</span>
                  <span className="text-sm text-gray-500 line-through">₹{product.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button onClick={nextSlide} className="absolute right-0 p-2 bg-gray-200 rounded-full shadow-md z-10">
          <FaArrowRight className="text-gray-700 text-lg" />
        </button>
      </div>
    </div>
  );
};

export default ShoppingCarousel;


// import React, { useEffect, useState } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// const products = [
//   {
//     id: 1,
//     name: "SKINN Noura Iris Eau De Parfum For Her",
//     price: 3295,
//     image: "https://m.media-amazon.com/images/I/71yFi2zTzJL._SX522_.jpg"
//   },
//   {
//     id: 2,
//     name: "Skinn by Titan Steele 100 ML Perfume",
//     price: 2795,
//     image: "https://m.media-amazon.com/images/I/61epzD-cNYL._SX522_.jpg"
//   },
//   {
//     id: 3,
//     name: "SKINN Nox Pour Femme Eau De Parfum",
//     price: 3995,
//     image: "https://m.media-amazon.com/images/I/71X9F+zTRXL._SX522_.jpg"
//   },
//   {
//     id: 4,
//     name: "Skinn by Titan Raw 100 ML Perfume",
//     price: 2795,
//     image: "https://m.media-amazon.com/images/I/61H3WdnqIhL._SX522_.jpg"
//   },
//   {
//     id: 5,
//     name: "Skinn by Titan Sheer Perfume",
//     price: 2995,
//     image: "https://m.media-amazon.com/images/I/71eizng06sL._SX522_.jpg"
//   },
//   {
//     id: 6,
//     name: "Skinn by Titan Celeste Perfume",
//     price: 3095,
//     image: "https://m.media-amazon.com/images/I/71kffhbjAHL._SX522_.jpg"
//   },
//   {
//     id: 7,
//     name: "Skinn by Titan Amalfi Bleu Perfume",
//     price: 3195,
//     image: "https://m.media-amazon.com/images/I/71Xjz0+aFGL._SX522_.jpg"
//   },
//   {
//     id: 8,
//     name: "Skinn by Titan Pristine Perfume",
//     price: 2895,
//     image: "https://m.media-amazon.com/images/I/71Dtz6LwHHL._SX522_.jpg"
//   },
//   {
//     id: 9,
//     name: "Skinn by Titan Verge Perfume",
//     price: 2795,
//     image: "https://m.media-amazon.com/images/I/71CPOVrGBzL._SX522_.jpg"
//   },
//   {
//     id: 10,
//     name: "Skinn by Titan Extreme Perfume",
//     price: 3595,
//     image: "https://m.media-amazon.com/images/I/71A+xflmtzL._SX522_.jpg"
//   }
// ];


// const ShoppingCarousel = () => {
//   const [index, setIndex] = useState(0);

//   const nextSlide = () => {
//     setIndex((prevIndex) => (prevIndex + 1) % (products.length - 5));
//   };

//   const prevSlide = () => {
//     setIndex((prevIndex) => (prevIndex - 1 + (products.length - 5)) % (products.length - 5));
//   };

//   useEffect(() => {
//     const autoSlide = setInterval(nextSlide, 3000);
//     return () => clearInterval(autoSlide);
//   }, []);

//   return (
//     <div className="bg-white py-10 px-4 text-center">
//       <h2 className="text-2xl font-bold text-gray-800 mb-6 inline-block bg-gray-600 text-white px-6 py-2 rounded-lg">
//         Top Sellers
//       </h2>
//       <div className="relative flex items-center overflow-hidden">
//         <button onClick={prevSlide} className="absolute left-0 p-2 bg-gray-200 rounded-full shadow-md z-10">
//           <FaArrowLeft className="text-gray-700 text-lg" />
//         </button>
//         <div className="flex w-full overflow-hidden px-10 py-4">
//           {products.slice(index, index + 6).map((product) => (
//             <div
//               key={product.id}
//               className="w-60 bg-white rounded-lg shadow-md flex-shrink-0 mx-2 transition-transform duration-500 ease-in-out hover:scale-105 cursor-pointer"
//             >
//               <img
//                 className="w-full h-56 object-cover transition-transform duration-300 hover:scale-110"
//                 src={product.image}
//                 alt={product.name}
//               />
//               <div className="p-4 text-center">
//                 <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
//                 <span className="text-lg font-bold text-gray-900">₹{product.price}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//         <button onClick={nextSlide} className="absolute right-0 p-2 bg-gray-200 rounded-full shadow-md z-10">
//           <FaArrowRight className="text-gray-700 text-lg" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ShoppingCarousel;


// import React, { useEffect, useState } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// const products = [
//   {
//     id: 1,
//     name: "SKINN Noura Iris Eau De Parfum For Her",
//     price: 3295,
//     image: "https://m.media-amazon.com/images/I/71yFi2zTzJL._SX522_.jpg"
//   },
//   {
//     id: 2,
//     name: "Skinn by Titan Steele 100 ML Perfume",
//     price: 2795,
//     image: "https://m.media-amazon.com/images/I/61epzD-cNYL._SX522_.jpg"
//   },
//   {
//     id: 3,
//     name: "SKINN Nox Pour Femme Eau De Parfum",
//     price: 3995,
//     image: "https://m.media-amazon.com/images/I/71X9F+zTRXL._SX522_.jpg"
//   },
//   {
//     id: 4,
//     name: "Skinn by Titan Raw 100 ML Perfume",
//     price: 2795,
//     image: "https://m.media-amazon.com/images/I/61H3WdnqIhL._SX522_.jpg"
//   },
//   {
//     id: 5,
//     name: "Skinn by Titan Sheer Perfume",
//     price: 2995,
//     image: "https://m.media-amazon.com/images/I/71eizng06sL._SX522_.jpg"
//   },
//   {
//     id: 6,
//     name: "Skinn by Titan Celeste Perfume",
//     price: 3095,
//     image: "https://m.media-amazon.com/images/I/71kffhbjAHL._SX522_.jpg"
//   },
//   {
//     id: 7,
//     name: "Skinn by Titan Amalfi Bleu Perfume",
//     price: 3195,
//     image: "https://m.media-amazon.com/images/I/71Xjz0+aFGL._SX522_.jpg"
//   },
//   {
//     id: 8,
//     name: "Skinn by Titan Pristine Perfume",
//     price: 2895,
//     image: "https://m.media-amazon.com/images/I/71Dtz6LwHHL._SX522_.jpg"
//   },
//   {
//     id: 9,
//     name: "Skinn by Titan Verge Perfume",
//     price: 2795,
//     image: "https://m.media-amazon.com/images/I/71CPOVrGBzL._SX522_.jpg"
//   },
//   {
//     id: 10,
//     name: "Skinn by Titan Extreme Perfume",
//     price: 3595,
//     image: "https://m.media-amazon.com/images/I/71A+xflmtzL._SX522_.jpg"
//   }
// ];

// const ShoppingCarousel = () => {
//   const [index, setIndex] = useState(0);

//   const nextSlide = () => {
//     setIndex((prevIndex) => (prevIndex + 1) % (products.length - 5));
//   };

//   const prevSlide = () => {
//     setIndex((prevIndex) => (prevIndex - 1 + (products.length - 5)) % (products.length - 5));
//   };

//   useEffect(() => {
//     const autoSlide = setInterval(nextSlide, 3000);
//     return () => clearInterval(autoSlide);
//   }, []);

//   return (
//     <div className="bg-white py-10 px-4">
//       <h2 className="text-2xl font-bold text-gray-800 mb-4 px-4 inline-block bg-blue-600 text-white">Top Sellers</h2>
//       <div className="relative flex items-center overflow-hidden">
//         <button onClick={prevSlide} className="absolute left-0 p-2 bg-gray-200 rounded-full shadow-md">
//           <FaArrowLeft className="text-gray-700 text-lg" />
//         </button>
//         <div className="flex w-full overflow-hidden px-10 py-4">
//           {products.slice(index, index + 6).map((product) => (
//             <div
//               key={product.id}
//               className="w-60 bg-white rounded-lg shadow-md flex-shrink-0 mx-2 transition-transform duration-500 ease-in-out"
//             >
//               <img className="w-full h-56 object-cover" src={product.image} alt={product.name} />
//               <div className="p-4 text-center">
//                 <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
//                 <span className="text-lg font-bold text-gray-900">₹{product.price}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//         <button onClick={nextSlide} className="absolute right-0 p-2 bg-gray-200 rounded-full shadow-md">
//           <FaArrowRight className="text-gray-700 text-lg" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ShoppingCarousel;
