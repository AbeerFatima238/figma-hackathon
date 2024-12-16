import React from 'react';
import Image from 'next/image';

const Herosection3 = () => {
  return (
    <div>
      <div className='flex flex-col md:flex-row h-auto w-full bg-[#FFF9E5] px-4 md:px-0'>
        
        {/* Image Section */}
        <div className='w-full md:w-[50%] flex justify-center'>
          <Image className='ml-0 md:ml-10' src="/asgaard.png" alt='asgaard sofa' height={759} width={883} />
        </div>

        {/* Text Section */}
        <div className='w-full md:w-[50%] flex flex-col justify-center md:ml-36 items-center md:items-start text-center md:text-left pt-12 md:pt-20'>
          <h2 className='text-2xl font-medium pt-6'>
            New Arrivals
          </h2>
          <h1 className='text-3xl md:text-5xl font-bold pt-4'>
            Asgaard Sofa
          </h1>
          <div className='pt-6 md:pt-10'>
            <button className='h-16 w-[255px] bg-transparent border border-black hover:underline hover:text-white hover:bg-black'>
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection3;
