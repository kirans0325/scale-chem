import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow">
      <h1 className="text-2xl font-bold">
        ScaleChem <span className="text-yellow-600">Engineering</span>
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-gray-700">
        <li><a href="#hero" className="hover:text-yellow-600">Home</a></li>
        <li><a href="#services" className="hover:text-yellow-600">Services</a></li>
        <li><a href="#about" className="hover:text-yellow-600">About</a></li>
        <li><a href="#skills" className="hover:text-yellow-600">Skills</a></li>
        <li><a href="#contact" className="hover:text-yellow-600">Contact</a></li>
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4 md:hidden">
          <li><a href="#hero" className="hover:text-yellow-600" onClick={toggleMenu}>Home</a></li>
          <li><a href="#services" className="hover:text-yellow-600" onClick={toggleMenu}>Services</a></li>
          <li><a href="#about" className="hover:text-yellow-600" onClick={toggleMenu}>About</a></li>
          <li><a href="#skills" className="hover:text-yellow-600" onClick={toggleMenu}>Skills</a></li>
          <li><a href="#contact" className="hover:text-yellow-600" onClick={toggleMenu}>Contact</a></li>
        </ul>
      )}
    </nav>
  )
}
