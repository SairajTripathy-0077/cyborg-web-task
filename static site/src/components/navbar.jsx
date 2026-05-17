import React from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <nav className="flex items-center bg-[#AD7C59] px-10 py-1">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-14 object-contain" />
      </div>

      <ul className="flex space-x-12 ml-auto px-6 text-[13px] font-medium text-black tracking-wider">
        <li><a href="/" className="hover:underline">ABOUT US</a></li>
        <li><a href="/about" className="hover:underline">REACH US</a></li>
        <li><a href="/contact" className="hover:underline">INSPIRATION</a></li>
      </ul>
    </nav>
  )
}

export default Navbar