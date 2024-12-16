import React from 'react'
import Image from 'next/image'

const Herosection = () => {
  return (
    <div>
    <div className='w-[1440px] h-[750px] top-[100px] bg-[#FBEBB5] flex'>
      <div className='w-[600px] ml-32 h-56 top-[428px] left-[202px]'>
        <div className='pt-32'>
          <h1 className='text-[64px] text-black font-medium font-Poppins ml-32 leading-[96px]'>
            Rocket single seater
          </h1>
          <button className='text-2xl underline font-medium font-Poppins ml-32 pt-6'>
            Shop now
          </button>
          <div>
          <div>
          <Image 
  className='ml-[600px] mt-[-450px]'  // Increased the negative margin to move the image further up
  src='/seater.png'
  alt='seater'
  height={1000}
  width={853}
/>
         </div>
          </div>
        </div>
      
      
      </div>
    
    </div>
    </div>
  )

}

export default Herosection
