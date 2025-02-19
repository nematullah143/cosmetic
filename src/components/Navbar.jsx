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
    <nav className=" text-white bg-gray-900 shadow-lg pt-6 fixed w-full z-50 top-0 ">
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
                placeholder="Search..." 
                className="mr-10 px-2 py-1 rounded-md border border-white focus:outline-none focus:ring-2 focus:ring-white bg-transparent text-white placeholder-pink-500 min-w-96"
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
      <div className="h-12 mt-4 p-3  bg-gray-500">
        <ul className="container mx-auto flex justify-center items-center gap-20 px-4">
          {list.map((item, index) => (
            <li key={index}>
              <a href={item.href} className="text-black hover:text-pink-500 hover:underline">
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
