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
      <div className={`w-[1440px] h-[150px] ${isHomePage ? 'bg-[#FBEBB5]' : 'bg-white'} shadow-lg`}>
        {/* Add shadow-lg class for a large shadow */}
        <div className='w-[430px] h-2 top-[38px] left-[505px] mx-96'>
          <div className='w-12 h-2 top-[38px] pt-8 left-[505]'>
            <ul className='flex text-center pt-8 gap-10'>
              <li><Link href="/" className='text-xl font-medium font-Poppins hover:underline'>Home</Link></li>
              <li><Link href="/Shop" className='text-xl font-medium font-Poppins hover:underline'>Shop</Link></li>
              <li><Link href="/Blog" className='text-xl font-medium font-Poppins hover:underline'>About</Link></li>
              <li><Link href="/Contact" className='text-xl font-medium font-Poppins hover:underline'>Contact</Link></li>
            </ul>
            <ul className="flex items-center ml-[600px] mt-[-28px] gap-14">
              <Link href="/Account"><li><User /></li></Link>
              <li><Search /></li>
              <li><Heart /></li>
              <li><ShoppingCart /></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
