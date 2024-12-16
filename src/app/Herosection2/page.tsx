import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Herosection2 = () => {
  return (
    <div>
      {/* Hero section with background color */}
      <div className='w-full h-[672px] bg-[#F4F4F4]'>
        {/* Hero section with images and text */}
        <div className='flex flex-col sm:flex-row justify-center gap-8 mt-8 px-4 sm:px-10'>
          
          {/* First Image and Text */}
          <div className='flex flex-col items-center'>
            <div className='w-[350px] sm:w-[505px] h-[402px]'>
              <Image className='pt-12' src="/table1.png" alt='table 1' height={500} width={500} />
            </div>
            <div className='w-[182px] text-center mt-4'>
              <h1 className='text-3xl sm:text-4xl font-medium text-black'>Side Table</h1>
              <button className='text-lg sm:text-2xl font-medium hover:underline text-black mt-2'>
                View More
              </button>
            </div>
          </div>
          
          {/* Second Image and Text */}
          <div className='flex flex-col items-center'>
            <div className='w-[350px] sm:w-[505px] h-[402px]'>
              <Image className='pt-12' src="/sofa.png" alt='sofa' height={500} width={500} />
            </div>
            <div className='w-[182px] text-center mt-4'>
              <h1 className='text-3xl sm:text-4xl font-medium text-black'>Sofa</h1>
              <button className='text-lg sm:text-2xl font-medium hover:underline text-black mt-2'>
                View More
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Third Hero Section */}
      <div className='w-full h-[377px] flex justify-center items-center px-4 sm:px-10'>
        <div className='text-center'>
          <h1 className='font-medium text-3xl sm:text-4xl'>
            Top Picks For You
          </h1>
          <h2 className='text-base sm:text-lg font-medium mt-4'>
            Find a bright idea to suit your taste with our great selection of suspension, floor, and table lights.
          </h2>
        </div>
      </div>

      {/* Products Section */}
      <div className='flex flex-col sm:flex-row justify-center gap-8 pt-8 px-4 sm:px-10'>
        {/* Product 1 */}
        <div className='w-[287px] h-[472px]'>
          <Image className='mx-auto' src="/white-chair.png" alt='white chair' height={287} width={287} />
          <div className='text-center'>
            <h1 className='font-normal text-base mt-4'>
              Trenton Modular Sofa_3
            </h1>
            <h2 className='text-2xl font-medium'>
              Rs. 25,000.00
            </h2>
          </div>
        </div>

        {/* Product 2 */}
        <div className='w-[287px] h-[372px]'>
          <Image className='mx-auto' src="/white-chair-2.png" alt='white chair' height={287} width={287} />
          <div className='text-center'>
            <h1 className='font-normal text-base mt-4'>
              Granite Dining Table with Dining Chair
            </h1>
            <h2 className='text-2xl font-medium'>
              Rs. 25,000.00
            </h2>
          </div>
        </div>

        {/* Product 3 */}
        <div className='w-[287px] h-[372px]'>
          <Image className='mx-auto' src="/white-chair-3.png" alt='white chair' height={287} width={287} />
          <div className='text-center'>
            <h1 className='font-normal text-base mt-4'>
              Outdoor Bar Table and Stool
            </h1>
            <h2 className='text-2xl font-medium'>
              Rs. 25,000.00
            </h2>
          </div>
        </div>

        {/* Product 4 */}
        <div className='w-[287px] h-[372px]'>
          <Image className='mx-auto' src="/white-chair-4.png" alt='white chair' height={287} width={287} />
          <div className='text-center'>
            <h1 className='font-normal text-base mt-4'>
              Plain Console with Teak Mirror
            </h1>
            <h2 className='text-2xl font-medium'>
              Rs. 25,000.00
            </h2>
          </div>
        </div>
      </div>

      {/* View More Button */}
      <div className='flex justify-center'>
        <Link href="/Shop" className='w-[104px] h-[30px] font-medium text-xl hover:underline mt-6'>
          View More
        </Link>
      </div>
    </div>
  )
}

export default Herosection2
