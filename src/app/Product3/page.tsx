import React from 'react'
import Image from 'next/image'

const Product3 = () => {
  return (
    <div className='h-auto w-full py-8'>
      <h2 className="font-medium text-[40px] sm:text-[54px] text-center mb-8">
        Related Products
      </h2>
      
      {/* Products Grid */}
      <div className='flex flex-wrap justify-center gap-8'>
        {/* Product 1 */}
        <div className='w-full sm:w-[287px] h-[472px] text-center'>
          <Image className='mx-auto' src="/white-chair.png" alt='white chair' height={287} width={287} />
          <div className='mt-4'>
            <h1 className='font-normal text-base'>
              Trenton modular sofa_3
            </h1>
            <h2 className='text-2xl font-medium'>
              Rs. 25,000.00
            </h2>
          </div>
        </div>

        {/* Product 2 */}
        <div className='w-full sm:w-[287px] h-[372px] text-center'>
          <Image className='mx-auto' src="/white-chair-2.png" alt='white chair' height={287} width={287} />
          <div className='mt-4'>
            <h1 className='font-normal text-base'>
              Granite dining table with dining chair
            </h1>
            <h2 className='text-2xl font-medium'>
              Rs. 25,000.00
            </h2>
          </div>
        </div>

        {/* Product 3 */}
        <div className='w-full sm:w-[287px] h-[372px] text-center'>
          <Image className='mx-auto' src="/white-chair-3.png" alt='white chair' height={287} width={287} />
          <div className='mt-4'>
            <h1 className='font-normal text-base'>
              Outdoor bar table and stool
            </h1>
            <h2 className='text-2xl font-medium'>
              Rs. 25,000.00
            </h2>
          </div>
        </div>

        {/* Product 4 */}
        <div className='w-full sm:w-[287px] h-[372px] text-center'>
          <Image className='mx-auto' src="/white-chair-4.png" alt='white chair' height={287} width={287} />
          <div className='mt-4'>
            <h1 className='font-normal text-base'>
              Plain console with teak mirror
            </h1>
            <h2 className='text-2xl font-medium'>
              Rs. 25,000.00
            </h2>
          </div>
        </div>
      </div>

      {/* View More Button */}
      <div className='flex justify-center mt-8'>
        <button className='w-[104px] h-[30px] font-medium text-xl hover:underline'>
          View More
        </button>
      </div>
    </div>
  )
}

export default Product3
