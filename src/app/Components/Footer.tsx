import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div>
      <div className='w-full h-[555px] bg-[#FFFFFF]'>
        <div className='flex flex-col sm:flex-row sm:space-x-16 px-4 sm:px-0'>
          {/* Links Section */}
          <div className='w-full sm:w-[68px] pt-24 h-[312px] sm:ml-[500px]'>
            <h2 className='w-10 h-6 font-medium text-base text-[#9F9F9F] mb-12'>
              Links
            </h2>
            <ul className='w-[66px] h-[233px]'>
              <li className='w-12 h-6 text-base font-medium mb-12'>
                <Link href='#home' className='text-base hover:underline font-medium'>
                  Home
                </Link>
              </li>
              <li className='w-12 h-6 text-base font-medium mb-12'>
                <Link href='#shop' className='hover:underline text-base font-medium'>
                  Shop
                </Link>
              </li>
              <li className='w-12 h-6 text-base font-medium mb-12'>
                <Link href='#about' className='hover:underline text-base font-medium'>
                  About
                </Link>
              </li>
              <li className='w-12 h-6 text-base font-medium'>
                <Link href='#contact' className='hover:underline text-base font-medium'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Help Section */}
          <div className='w-full sm:w-[140px] pt-24 h-[242px]'>
            <h2 className='w-10 h-6 font-medium text-base text-[#9F9F9F] mb-12'>
              Help
            </h2>
            <ul className='w-[66px] h-[233px]'>
              <li className='w-[140px] h-6 text-base font-medium mb-12'>
                <Link href='#home' className='text-base hover:underline font-medium'>
                  Payment Options
                </Link>
              </li>
              <li className='w-12 h-6 text-base font-medium mb-12'>
                <Link href='#shop' className='hover:underline text-base font-medium'>
                  Return
                </Link>
              </li>
              <li className='w-[124px] h-6 text-base font-medium mb-12'>
                <Link href='#about' className='hover:underline text-base font-medium'>
                  Privacy Policies
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className='w-full sm:w-[140px] pt-24 h-[242px]'>
            <h2 className='w-10 h-6 font-medium text-base text-[#9F9F9F] mb-12'>
              Newsletter
            </h2>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full sm:w-[300px] p-2 border border-gray-300 rounded text-base mb-4"
            />
            <button className="w-full sm:w-[300px] py-2 bg-gray-800 text-white rounded text-base hover:bg-gray-700">
              Subscribe
            </button>
          </div>
        </div>

        {/* Address Section */}
        <div className='w-full sm:w-[1131px] h-[112px] mt-4 sm:mt-0'>
          <h2 className='text-base font-normal text-[#9F9F9F] text-center sm:text-left'>
            400 University Drive Suite 200 Coral Gables, <br />
            FL 33134 USA
          </h2>
        </div>

        {/* Horizontal Line after Content */}
        <hr className='border-t h-[1px] border-gray-300 my-8' />
        
        {/* Copyright Text - Aligned Left */}
        <div className='w-full text-center sm:text-left text-xl font-normal text-black mt-[-25px]'>
          <p>2022 Meubel House. All rights reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
