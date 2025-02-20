import React from "react";

const products = [
  {
    id: 1,
    name: "Lipstick",
    description: "A long-lasting, vibrant lipstick shade.",
    price: 1699,
    offerPrice: 1299,
    image: "https://marscosmetics.in/cdn/shop/files/WEBSITEcopy_76e66aad-2caa-4305-a34b-8466f60e1277.jpg?v=1704279099&width=2000"
  },
  {
    id: 2,
    name: "Foundation",
    description: "Smooth and flawless foundation for all skin types.",
    price: 2499,
    offerPrice: 1999,
    image: "https://marscosmetics.in/cdn/shop/products/01KATHAKKWEEN-02SwatchW.jpg?v=1667821827&width=2000"
  },
  {
    id: 3,
    name: "Eyeliner",
    description: "Waterproof and long-lasting black eyeliner.",
    price: 999,
    offerPrice: 799,
    image: "https://marscosmetics.in/cdn/shop/products/01KATHAKKWEEN-02SwatchW.jpg?v=1667821827&width=2000"
  },
  {
    id: 1,
    name: "Lipstick",
    description: "A long-lasting, vibrant lipstick shade.",
    price: 1699,
    offerPrice: 1299,
    image: "https://marscosmetics.in/cdn/shop/files/WEBSITEcopy_76e66aad-2caa-4305-a34b-8466f60e1277.jpg?v=1704279099&width=2000"
  },
  {
    id: 2,
    name: "Foundation",
    description: "Smooth and flawless foundation for all skin types.",
    price: 2499,
    offerPrice: 1999,
    image: "https://marscosmetics.in/cdn/shop/products/01KATHAKKWEEN-02SwatchW.jpg?v=1667821827&width=2000"
  },
  {
    id: 3,
    name: "Eyeliner",
    description: "Waterproof and long-lasting black eyeliner.",
    price: 999,
    offerPrice: 799,
    image: "https://marscosmetics.in/cdn/shop/products/01KATHAKKWEEN-02SwatchW.jpg?v=1667821827&width=2000"
  },
  {
    id: 1,
    name: "Lipstick",
    description: "A long-lasting, vibrant lipstick shade.",
    price: 1699,
    offerPrice: 1299,
    image: "https://marscosmetics.in/cdn/shop/files/WEBSITEcopy_76e66aad-2caa-4305-a34b-8466f60e1277.jpg?v=1704279099&width=2000"
  },
  {
    id: 2,
    name: "Foundation",
    description: "Smooth and flawless foundation for all skin types.",
    price: 2499,
    offerPrice: 1999,
    image: "https://marscosmetics.in/cdn/shop/products/01KATHAKKWEEN-02SwatchW.jpg?v=1667821827&width=2000"
  },
  {
    id: 3,
    name: "Eyeliner",
    description: "Waterproof and long-lasting black eyeliner.",
    price: 999,
    offerPrice: 799,
    image: "https://marscosmetics.in/cdn/shop/products/01KATHAKKWEEN-02SwatchW.jpg?v=1667821827&width=2000"
  }
];

const ShoppingCard = () => {
  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500flex items-center justify-center min-h-screen p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.slice(0, 8).map((product) => (
          <div key={product.id} className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <img className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110" src={product.image} alt={product.name} />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
              <p className="text-gray-600 text-sm mt-2">{product.description}</p>
              <div className="flex justify-between items-center mt-4">
                <div>
                  <span className="text-lg font-bold text-gray-900">₹{product.offerPrice}</span>
                  <span className="text-sm text-gray-500 line-through ml-2">₹{product.price}</span>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingCard;



// import React from "react";

// const products = [
//   {
//     id: 1,
//     name: "Lipstick",
//     description: "A long-lasting, vibrant lipstick shade.",
//     price: 1699,
//     offerPrice: 1299,
//     image: "https://source.unsplash.com/300x200/?lipstick"
//   },
//   {
//     id: 2,
//     name: "Foundation",
//     description: "Smooth and flawless foundation for all skin types.",
//     price: 2499,
//     offerPrice: 1999,
//     image: "https://source.unsplash.com/300x200/?foundation,makeup"
//   },
//   {
//     id: 3,
//     name: "Eyeliner",
//     description: "Waterproof and long-lasting black eyeliner.",
//     price: 999,
//     offerPrice: 799,
//     image: "https://marscosmetics.in/cdn/shop/products/01KATHAKKWEEN-02SwatchW.jpg?v=1667821827&width=2000"
//   }
// ];

// const ShoppingCard = () => {
//   return (
//     <div className="bg-gray-100 flex items-center justify-center min-h-screen p-4">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {products.map((product) => (
//           <div key={product.id} className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
//             <img className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110" src={product.image} alt={product.name} />
//             <div className="p-4">
//               <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
//               <p className="text-gray-600 text-sm mt-2">{product.description}</p>
//               <div className="flex justify-between items-center mt-4">
//                 <div>
//                   <span className="text-lg font-bold text-gray-900">₹{product.offerPrice}</span>
//                   <span className="text-sm text-gray-500 line-through ml-2">₹{product.price}</span>
//                 </div>
//                 <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ShoppingCard;
