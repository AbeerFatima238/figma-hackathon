import React from 'react';
import Image from 'next/image';
import { Calendar, Clock5 } from 'lucide-react';

const Herosection4 = () => {
  return (
    <div>
      {/* Blog Section */}
      <div className='h-auto w-full top-[3108px] px-4'>
        <div className='h-[54px] w-[174px] flex justify-center items-center mx-auto'>
          <h2 className='text-4xl pt-14 font-medium'>Our Blogs</h2>
        </div>
        <div className='flex justify-center ml-16 pt-12'>
          <h2 className='text-base h-6 w-full max-w-[479px] font-medium text-center md:text-left'>
            Find a bright ideal to suit your taste with our great selection
          </h2>
        </div>
        <div className='flex flex-wrap justify-center gap-8'>
          {/* Blog Item 1 */}
          <div className='w-full sm:w-[393px] h-[555px] pt-16'>
            <Image src="/keyboard.png" alt='blogs image' height={293} width={293} />
            <div className='h-[129px] w-full pt-6'>
              <h2 className='w-full text-xl font-normal'>Going all-in with millennial design</h2>
              <h2 className='text-2xl font-medium pt-8 hover:underline'>Read More</h2>
              <div className='flex gap-10 pt-8'>
                <h2 className='flex gap-2 text-base font-light'>
                  <Clock5 /> 5 min
                </h2>
                <h2 className='flex gap-2 text-base font-light'>
                  <Calendar /> 12 Oct 2022
                </h2>
              </div>
            </div>
          </div>

          {/* Blog Item 2 */}
          <div className='w-full sm:w-[393px] h-[555px] pt-16'>
            <Image src="/keyboard-2.png" alt='blogs image' height={293} width={293} />
            <div className='h-[129px] w-full pt-6'>
              <h2 className='w-full text-xl font-normal'>Going all-in with millennial design</h2>
              <h2 className='text-2xl font-medium pt-8 hover:underline'>Read More</h2>
              <div className='flex gap-10 pt-8'>
                <h2 className='flex gap-2 text-base font-light'>
                  <Clock5 /> 5 min
                </h2>
                <h2 className='flex gap-2 text-base font-light'>
                  <Calendar /> 12 Oct 2022
                </h2>
              </div>
            </div>
          </div>

          {/* Blog Item 3 */}
          <div className='w-full sm:w-[393px] h-[555px] pt-16'>
            <Image src="/keyboard-3.png" alt='blogs image' height={293} width={293} />
            <div className='h-[129px] w-full pt-6'>
              <h2 className='w-full text-xl font-normal'>Going all-in with millennial design</h2>
              <h2 className='text-2xl font-medium pt-8 hover:underline'>Read More</h2>
              <div className='flex gap-10 pt-8'>
                <h2 className='flex gap-2 text-base font-light'>
                  <Clock5 /> 5 min
                </h2>
                <h2 className='flex gap-2 text-base font-light'>
                  <Calendar /> 12 Oct 2022
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className='w-auto h-[30px] flex justify-center items-center'>
          <h2 className='text-xl pt-16 mr-8 hover:underline font-medium text-center'>
            View All Post
          </h2>
        </div>
      </div>

      {/* Instagram Section */}
      <div className='w-full h-[450px] relative'>
        <Image src="/instagram-bg.png" alt='bg' height={450} width={1440} />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4'>
          <h1 className='text-6xl font-bold'>Our Instagram</h1>
          <h2 className='pt-10 text-xl font-normal max-w-[297px] mx-auto'>
            Follow our store on Instagram
          </h2>
          <div className='pt-14'>
            <button className='text-xl font-normal hover:bg-black hover:underline hover:text-white w-[255px] h-16 bg-[#F4F4F4] rounded-full shadow-lg'>
              Follow Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection4;
