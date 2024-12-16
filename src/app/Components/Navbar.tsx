"use client"
import React from 'react'
import Link from 'next/link';
import { User, Search, ShoppingCart, Heart } from 'lucide-react';
import { usePathname } from 'next/navigation'; // Import usePathname

const Navbar = () => {
  const pathname = usePathname(); // Get the current pathname
  const isHomePage = pathname === '/'; // Check if the current page is the homepage

  return (
    <div>
      {/* Apply the dynamic background color based on whether it's the homepage */}
      <div className={`w-full h-[150px] ${isHomePage ? 'bg-[#FBEBB5]' : 'bg-white'} shadow-lg`}>
        {/* Navbar Container with slight left shift */}
        <div className="w-full h-full flex items-center justify-between px-8 lg:px-16 ">
          {/* Left Navigation Items */}
          <ul className="hidden lg:flex gap-10 text-center ml-64">
            <li><Link href="/" className="text-xl font-medium font-Poppins hover:underline">Home</Link></li>
            <li><Link href="/Shop" className="text-xl font-medium font-Poppins hover:underline">Shop</Link></li>
            <li><Link href="/Blog" className="text-xl font-medium font-Poppins hover:underline">About</Link></li>
            <li><Link href="/Contact" className="text-xl font-medium font-Poppins hover:underline">Contact</Link></li>
          </ul>

          {/* Right Icon Section */}
          <ul className="hidden lg:flex gap-14 items-center">
            <Link href="/Account">
              <li><User className="text-xl" /></li>
            </Link>
            <li><Search className="text-xl" /></li>
            <li><Heart className="text-xl" /></li>
            <li><ShoppingCart className="text-xl" /></li>
          </ul>

          {/* Mobile Navigation (visible on smaller screens) */}
          <ul className="lg:hidden flex gap-4 items-center">
            <li><Link href="/Account"><User className="text-xl" /></Link></li>
            <li><Search className="text-xl" /></li>
            <li><Heart className="text-xl" /></li>
            <li><ShoppingCart className="text-xl" /></li>
          </ul>

          {/* Mobile Menu Toggle (visible on smaller screens) */}
          <div className="lg:hidden flex items-center">
            <button className="text-2xl text-black">
              {/* Mobile menu icon (can add a hamburger menu here for toggling mobile view) */}
              <span className="material-icons">menu</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
