import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { ChevronRight, SlidersHorizontal, LayoutGrid, Barcode } from 'lucide-react';

const Shop = () => {
  return (
    <div>
      <div className='w-[1440px] h-[516px] top-[100px]'>
        {/* Background Image */}
        <Image src="/shop-bg.png" alt='bg' height={316} width={1440} className='object-cover' />

        {/* Logo and Breadcrumb positioned at the center of the container */}
        <div className="absolute top-1/2 ml-[680px] mt-[-100px]">
          <Image src="/logo.png" alt="logo" height={77} width={77} />
          <h2 className='text-5xl font-medium ml-[-18px] pt-[-20px]'>Shop</h2>
          <div className='flex pt-4 ml-[-18px]'>
            <h2 className='text-base font-medium'>Home</h2>
            <ChevronRight />
            <h2 className='text-base font-medium'>Shop</h2>
          </div>
        </div>
      </div>

      {/* Add a margin to create the gap between divs */}
      <div className='w-[1440px] h-[100px] mt-[-170px] bg-[#FAF4F4]'>
        <div className='flex items-center ml-28 pt-8'>
          <SlidersHorizontal />
          <h2 className='text-xl font-normal ml-8'>Filter</h2>
          <p className='ml-8'><LayoutGrid /></p>
          <p className='ml-8'><Barcode /></p>

          {/* Vertical line after Barcode icon */}
          <div className='ml-8 h-8 border-r-2 border-black'></div>
          <h2 className='ml-8 h-6 w-[203px] text-base font-normal'>
            Showing 1-16 of 32 results
          </h2>

          {/* 'Show' and input field on the same line */}
          <div className="flex items-center ml-64 ">
            <h2 className='text-xl font-normal'>
              Show
            </h2>
            <input
              type="number"
              defaultValue="16"
              className='ml-2 w-[60px] h-[40px] text-center border border-gray-300 rounded text-gray-400' 
              style={{ color: 'gray' }}
            />
          </div>

          {/* 'Sort By' and the input field on the same line with added gap */}
          <div className="flex items-center ml-8"> 
            <h2 className='text-xl font-normal'>
              Sort By
            </h2>
            <input
              type="text"
              placeholder="Default Value"
              className="ml-2 p-2 border border-gray-300 rounded"
            />
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className='flex flex-wrap justify-start gap-8 pt-8 px-4'>
  {/* Product 1 */}
  <Link href="/Product" className='w-full sm:w-[287px] h-auto'>
    <Image className='ml-4' src="/white-chair.png" alt='white chair' height={287} width={287} />
    <div className='ml-4'>
      <h1 className='font-normal text-base'>Trenton modular sofa_3</h1>
      <h2 className='text-2xl font-medium'>Rs. 25,000.00</h2>
    </div>
  </Link>

  {/* Product 2 */}
  <Link href="/Product" className='w-full sm:w-[287px] h-auto'>
    <Image className='ml-4' src="/white-chair-2.png" alt='white chair' height={287} width={287} />
    <div className='ml-4'>
      <h1 className='font-normal text-base'>Granite dining table with dining chair</h1>
      <h2 className='text-2xl font-medium'>Rs. 25,000.00</h2>
    </div>
  </Link>

  {/* Product 3 */}
  <Link href="/Product" className='w-full sm:w-[287px] h-auto'>
    <Image className='ml-4' src="/white-chair-3.png" alt='white chair' height={287} width={287} />
    <div className='ml-4'>
      <h1 className='font-normal text-base'>Outdoor bar table and stool</h1>
      <h2 className='text-2xl font-medium'>Rs. 25,000.00</h2>
    </div>
  </Link>

  {/* Product 4 */}
  <Link href="/Product" className='w-full sm:w-[287px] h-auto'>
    <Image className='ml-4' src="/white-chair-4.png" alt='white chair' height={287} width={287} />
    <div className='ml-4'>
      <h1 className='font-normal text-base'>Plain console with teak mirror</h1>
      <h2 className='text-2xl font-medium'>Rs. 25,000.00</h2>
    </div>
  </Link>

  {/* Product 5 */}
  <Link href="/Product" className='w-full sm:w-[287px] h-auto pt-12'>
    <Image className='ml-4' src="/white-chair-5.png" alt='white chair' height={287} width={287} />
    <div className='ml-4 pt-8'>
      <h1 className='font-normal text-base'>Grain coffee table</h1>
      <h2 className='text-2xl font-medium'>Rs. 15,000.00</h2>
    </div>
  </Link>

  {/* Product 6 */}
  <Link href="/Product" className='w-full sm:w-[287px] h-auto'>
    <Image className='ml-4' src="/white-chair-6.png" alt='white chair' height={287} width={287} />
    <div className='ml-4 mt-[-15px]'>
      <h1 className='font-normal text-base'>Kent coffee table</h1>
      <h2 className='text-2xl font-medium'>Rs. 225,000.00</h2>
    </div>
  </Link>

  {/* Product 7 */}
  <Link href="/Product" className='w-full sm:w-[287px] h-auto'>
    <Image className='ml-4' src="/white-chair-7.png" alt='white chair' height={287} width={287} />
    <div className='ml-4'>
      <h1 className='font-normal text-base'>Round coffee table_color 2</h1>
      <h2 className='text-2xl font-medium'>Rs. 251,000.00</h2>
    </div>
  </Link>

  {/* Product 8 */}
  <Link href="/Product" className='w-full sm:w-[287px] h-auto'>
    <Image className='ml-4 pt-8' src="/white-chair-8.png" alt='white chair' height={287} width={287} />
    <div className='ml-4 mt-[-45px]'>
      <h1 className='font-normal text-base'>Reclaimed teak coffee table</h1>
      <h2 className='text-2xl font-medium'>Rs. 25,200.00</h2>
    </div>
  </Link>

  {/* Product 9 */}
  <Link href="/Product" className='w-full sm:w-[287px] h-auto'>
    <Image className='ml-4' src="/white-chair-9.png" alt='white chair' height={287} width={287} />
    <div className='ml-4 pt-4'>
      <h1 className='font-normal text-base'>Plain console_</h1>
      <h2 className='text-2xl font-medium'>Rs. 258,200.00</h2>
    </div>
  </Link>

  {/* Product 10 */}
  <Link href="/Product" className='w-full sm:w-[287px] h-auto pt-[60px]'>
    <Image className='ml-4' src="/white-chair-12.png" alt='white chair' height={187} width={187} />
    <div className='ml-4 pt-2'>
      <h1 className='font-normal text-base'>Reclaimed teak Sideboard</h1>
      <h2 className='text-2xl font-medium'>Rs. 20,000.00</h2>
    </div>
  </Link>

  {/* Product 11 */}
  <Link href="/Product" className='w-full sm:w-[287px] h-auto'>
    <Image className='ml-4' src="/white-chair-11.png" alt='white chair' height={287} width={287} />
    <div className='ml-4 mt-[-30px]'>
      <h1 className='font-normal text-base'>SJP_0825</h1>
      <h2 className='text-2xl font-medium'>Rs. 200,000.00</h2>
    </div>
  </Link>

  {/* Product 12 */}
  <Link href="/Product" className='w-full sm:w-[287px] h-auto pt-8'>
    <Image className='ml-4' src="/white-chair-10.png" alt='white chair' height={287} width={287} />
    <div className='ml-4'>
      <h1 className='font-normal mt-[-10px] text-base'>Bella chair and table</h1>
      <h2 className='text-2xl font-medium'>Rs. 100,000.00</h2>
    </div>
  </Link>

  {/* Product 13 */}
  <Link href="/Product" className='w-full sm:w-[287px] h-auto pt-8'>
    <Image className='ml-[-50px]' src="/table1.png" alt='white chair' height={287} width={287} />
    <div className='ml-4 mt-[-25px]'>
      <h1 className='font-normal text-base'>Granite square side table</h1>
      <h2 className='text-2xl font-medium'>Rs. 258,800.00</h2>
    </div>
  </Link>

  {/* Product 14 */}
  <Link href="/Product" className='w-full sm:w-[287px] h-auto pt-8'>
    <Image className='ml-[-60px]' src="/sofa.png" alt='white chair' height={287} width={287} />
    <div className='ml-4 mt-[-25px]'>
      <h1 className='font-normal text-base'>Asgaard sofa</h1>
      <h2 className='text-2xl font-medium'>Rs. 250,000.00</h2>
    </div>
  </Link>

  {/* Product 15 */}
  <Link href="/Product" className='w-full sm:w-[287px] h-auto pt-8'>
    <Image className='ml-4' src="/asgaard.png" alt='white chair' height={287} width={287} />
    <div className='ml-4'>
      <h1 className='font-normal text-base'>Maya sofa three seater</h1>
      <h2 className='text-2xl font-medium'>Rs. 115,000.00</h2>
    </div>
  </Link>

  {/* Product 16 */}
  <Link href="/Product" className='w-full sm:w-[287px] h-auto mt-[-40px]'>
    <Image className='ml-4' src="/white-chair-13.png" alt='white chair' height={287} width={287} />
    <div className='ml-4 pt-7'>
      <h1 className='font-normal text-base'>Outdoor sofa set</h1>
      <h2 className='text-2xl font-medium'>Rs. 244,000.00</h2>
    </div>
  </Link>
</div>

      <div className="flex justify-center gap-4 mt-40">
  <button className="w-16 h-12 bg-[#FBEBB5] text-black rounded-lg flex items-center justify-center font-semibold">
    1
  </button>
  <button className="w-16 h-12 bg-[#FFF9E5] text-black rounded-lg flex items-center justify-center font-semibold">
    2
  </button>
  <button className="w-16 h-12 bg-[#FFF9E5] text-black rounded-lg flex items-center justify-center font-semibold">
    3
  </button>
  <button className="w-20 h-12 bg-[#FFF9E5] text-black rounded-lg flex items-center justify-center font-semibold">
    Next
  </button>
</div>

<div className='w-[1440px] h-[300px] mt-10 flex bg-[#F4F4F4]'>
  <div className='pt-4'>
  <h2 className='font-medium ml-32 pt-16 text-[32px] w-[205px] h-12'>
  Free Delivery
  </h2>
  <h2 className='font-normal text-xl ml-32 pt-14 w-[376px] h-[60px]'>
  For all oders over $50, consectetur 
  <br />adipim scing elit.
  </h2>
  </div>
  <div className='pt-4'>
  <h2 className='font-medium  pt-16 text-[32px] w-[244px] h-12'>
  90 Days Return
  </h2>
  <h2 className='font-normal text-xl pt-14 w-[376px] h-[60px]'>
  If goods have problems, consectetur <br />
  adipim scing elit.
  </h2>
  </div>
  <div className='pt-4'>
  <h2 className='font-medium ml-32 pt-16 text-[32px] w-[265px] h-12'>
  Secure Payment
  </h2>
  <h2 className='font-normal text-xl ml-32 pt-14 w-[376px] h-[60px]'>
  100% secure payment, consectetur
  <br /> adipim scing elit.
  </h2>
  </div>
</div>

   
    </div>
  );
}

export default Shop;
