import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { text: 'Brand', href: '#' },
    { text: 'Offers', href: '#' },
    { text: 'Top Shelfs', href: '#' },
    { text: 'Contact', href: '#' }
  ]

  const list = [
    {text: "What's New", href: '#'},
    {text: 'MakeUp', href: '#'},
    {text: 'Skincare', href: '#'},
    {text: 'Men', href: '#'},
    {text: 'Fragrances', href: '#'},
    {text: 'Bath & Body', href: '#'},
    {text: 'Hair Care', href: '#'},
]

  return (
    <nav className=" text-black bg-navcolor shadow-lg pt-6 fixed w-full z-50 top-0 ">
      <div className=''>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold">Logo</h1>
            </div>
            {/* Desktop Menu */}
            <div className="hidden flex md:flex items-center">
              <input 
                type="text" 
                placeholder="Search for pruduct" 
                className="mr-10 px-2 py-1 rounded-md border border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 bg-transparent 
                text-black placeholder-pink-500 min-w-96"
              />
              <ul className="flex space-x-8">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <a 
                      href={item.href}
                      className="text-white-600 hover:text-pink-500 text-bold transition-colors"
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
              <i><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </i>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <ul className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                    >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="h-12 mt-4 p-3  bg-[#d6ccc2]">
        <ul className="container mx-auto flex justify-center items-center gap-20 px-4">
          {list.map((item, index) => (
            <li key={index}> 
              <a href={item.href} 
              className="text-black relative cursor-pointer hover:unerdline before:content-[''] before:absolute before:w-full 
              before:h-[2px] before:bg-pink-500 before:bottom-0 before:left-0 before:scale-x-0 hover:before:scale-x-100 
              before:transition-transform before:duration-300">
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

// import { Menu, X } from 'lucide-react'
// import { useState } from 'react'

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)

//   const menuItems = [
//     { text: 'Brand', href: '#' },
//     { text: 'Offers', href: '#' },
//     { text: 'Top Shelfs', href: '#' },
//     { text: 'Contact', href: '#' }
//   ]

//   const list = [
//     {text: "What's New", href: '#'},
//     {text: 'MakeUp', href: '#'},
//     {text: 'Skincare', href: '#'},
//     {text: 'Men', href: '#'},
//     {text: 'Fragrances', href: '#'},
//     {text: 'Bath & Body', href: '#'},
//     {text: 'Hair Care', href: '#'},
// ]

//   return (
//     <nav className=" text-white bg-gray-900 shadow-lg pt-6 fixed w-full z-50 top-0 ">
//       <div className=''>
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex justify-between h-16">
//             <div className="flex items-center">
//               <h1 className="text-xl font-bold">Logo</h1>
//             </div>
//             {/* Desktop Menu */}
//             <div className="hidden flex md:flex items-center">
//               <input 
//                 type="text" 
//                 placeholder="Search..." 
//                 className="mr-10 px-2 py-1 rounded-md border border-white focus:outline-none focus:ring-2 focus:ring-white bg-transparent text-white placeholder-pink-500 min-w-96"
//               />
//               <ul className="flex space-x-8">
//                 {menuItems.map((item, index) => (
//                   <li key={index}>
//                     <a 
//                       href={item.href}
//                       className="text-white-600 hover:text-pink-500 text-bold transition-colors"
//                     >
//                       {item.text}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Mobile Menu Button */}
//             <div className="md:hidden flex items-center">
//               <button
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className="text-gray-600 hover:text-gray-900"
//               >
//                 {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden">
//             <ul className="px-2 pt-2 pb-3 space-y-1">
//               {menuItems.map((item, index) => (
//                 <li key={index}>
//                   <a
//                     href={item.href}
//                     className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
//                     >
//                     {item.text}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//       <div className="h-12 mt-4 p-3  bg-gray-500">
//         <ul className="container mx-auto flex justify-center items-center gap-20 px-4">
//           {list.map((item, index) => (
//             <li key={index}>
//               <a href={item.href} className="text-black hover:text-pink-500 hover:underline">
//                 {item.text}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   )
// }

// export default Navbar
