import React from 'react'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

const Account = () => {
  return (
    <div>
      <div className='w-full h-[316px] top-[100px]'>
        {/* Background Image */}
        <Image src="/shop-bg.png" alt='bg' height={316} width={1440} className='object-cover w-full' />

        {/* Logo and Breadcrumb positioned at the center of the container */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <Image src="/logo.png" alt="logo" height={77} width={77} />
          <h2 className='text-5xl font-medium mt-4'>Account</h2>
          <div className='flex justify-center pt-4'>
            <h2 className='text-base font-medium'>Home</h2>
            <ChevronRight />
            <h2 className='text-base font-medium'>Account</h2>
          </div>
        </div>
      </div>

      <div className='w-full h-[760px] flex justify-center px-4'>
        {/* Container for both login sections side by side */}
        <div className='flex flex-col sm:flex-row sm:gap-16 gap-8 pt-16'>
          {/* First Login Section */}
          <div className='w-full sm:w-[400px]'>
            <h1 className='text-4xl font-[Poppins]'>
              Login
            </h1>

            {/* Username or Email Section */}
            <div className='mt-8 mb-6'>
              <h2 className='text-xl font-semibold mb-2'>
                Username or Email
              </h2>
              <input
                type="text"
                placeholder="Enter your username or email"
                className="w-full sm:w-[400px] h-[40px] border border-gray-300 rounded-lg px-4"
              />
            </div>

            {/* Password Section */}
            <div className='mb-6'>
              <h2 className='text-xl font-semibold mb-2'>
                Password
              </h2>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full sm:w-[400px] h-[40px] border border-gray-300 rounded-lg px-4"
              />
            </div>

            {/* Remember Me Section */}
            <div className='flex items-center mb-6'>
              <input type="checkbox" id="rememberMe" className="w-4 pt-8 h-4 mr-2" />
              <label htmlFor="rememberMe" className='text-base'>
                Remember Me
              </label>
            </div>

            {/* Login Button Section */}
            <div className='mb-6 pt-5'>
              <button className='w-full sm:w-[400px] h-[40px] border-black shadow-lg bg-white text-black hover:bg-black hover:text-white rounded-lg'>
                Login
              </button>
            </div>

            {/* Forget Your Password Section */}
            <div>
              <Link href="/reset-password" className='text-blue-500 text-base hover:underline'>
                Forget your password?
              </Link>
            </div>
          </div>

          {/* Second Login Section (Register) */}
          <div className='w-full sm:w-[400px]'>
            <h1 className='text-4xl font-[Poppins]'>
              Register
            </h1>

            {/* Username or Email Section */}
            <div className='mt-8 mb-6'>
              <h2 className='text-xl font-semibold mb-2'>
                Email address
              </h2>
              <input
                type="text"
                placeholder="Enter your username or email"
                className="w-full sm:w-[400px] h-[40px] border border-gray-300 rounded-lg px-4"
              />
            </div>

            <p className='text-sm'>
              A link to set a new password will be sent to your email address.
            </p>
            <p className='text-sm mt-2'>
              Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
            </p>

            {/* Register Button Section */}
            <div className='mb-6 pt-5'>
              <button className='w-full sm:w-[400px] h-[40px] bg-white text-black hover:bg-black hover:text-white shadow-lg rounded-lg'>
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account
