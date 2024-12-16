import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, User, Calendar, Palette, Home, Tag, Volleyball, TreeDeciduous } from 'lucide-react'

const Blog = () => {
  return (
    <div className="w-full h-auto">
      <div className="relative w-full h-[400px]"> {/* Reduced the height here */}
        {/* Background Image */}
        <Image
          src="/shop-bg.png"
          alt="bg"
          layout="fill"
          objectFit="cover"
          className="top-0 left-0"
        />

        {/* Logo and Breadcrumb positioned at the center of the container */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <Image src="/logo.png" alt="logo" height={77} width={77} />
          <h2 className="text-4xl sm:text-5xl font-medium pt-2">Blog</h2>
          <div className="flex justify-center pt-4">
            <h2 className="text-sm sm:text-base font-medium">Home</h2>
            <ChevronRight />
            <h2 className="text-sm sm:text-base font-medium">Blogs</h2>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 min-h-screen p-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Main Section - Blog Posts (Left Side) */}
          <div className="col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-3 space-y-8">
            {/* Blog Post 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="w-full h-64 relative">
                <Image
                  src="/laptop.webp" // Replace with your image path
                  alt="Exploring Decorating"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl sm:text-2xl font-semibold mb-2">
                  Exploring new ways of decorating
                </h2>
                <div className="text-sm text-gray-500 mb-4 flex items-center space-x-2">
                  <User size={16} /> <span>Admin</span>
                  <Calendar size={16} /> <span>16 Oct 2022</span>
                  <Volleyball size={16} /> <span>Handmade</span>
                </div>
                <p className="text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Donec nec nulla suscipit.
                </p>
                <Link href="#" className="text-blue-600 hover:underline">
                  Read more
                </Link>
              </div>
            </div>
            {/* Blog Post 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="w-full h-64 relative">
                <Image
                  src="/laptop.webp" // Replace with your image path
                  alt="Exploring Decorating"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl sm:text-2xl font-semibold mb-2">
                  Exploring new ways of decorating
                </h2>
                <div className="text-sm text-gray-500 mb-4 flex items-center space-x-2">
                  <User size={16} /> <span>Admin</span>
                  <Calendar size={16} /> <span>16 Oct 2022</span>
                  <Volleyball size={16} /> <span>Handmade</span>
                </div>
                <p className="text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Donec nec nulla suscipit.
                </p>
                <Link href="#" className="text-blue-600 hover:underline">
                  Read more
                </Link>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="w-full h-64 relative">
                <Image
                  src="/laptop.webp" // Replace with your image path
                  alt="Exploring Decorating"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl sm:text-2xl font-semibold mb-2">
                  Handmade pieces that took time to make
                </h2>
                <div className="text-sm text-gray-500 mb-4 flex items-center space-x-2">
                  <User size={16} /> <span>Admin</span>
                  <Calendar size={16} /> <span>15 Oct 2022</span>
                  <TreeDeciduous size={16} /> <span>Wood</span>
                </div>
                <p className="text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt erat ut mauris vehicula.
                </p>
                <Link href="#" className="text-blue-600 hover:underline">
                  Read more
                </Link>
              </div>
            </div>
          </div>

          {/* Right Section - Categories & Recent Posts */}
          <div className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 space-y-8">
            {/* Categories */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Categories</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center space-x-2">
                  <Tag size={16} /> <span>Code</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Palette size={16} /> <span>Design</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Volleyball size={16} /> <span>Handmade</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Home size={16} /> <span>Interior</span>
                </li>
                <li className="flex items-center space-x-2">
                  <TreeDeciduous size={16} /> <span>Wood</span>
                </li>
              </ul>
            </div>

            {/* Recent Posts */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Recent Posts</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="#" className="flex items-center space-x-4">
                    <div className="w-16 h-16 relative">
                      <Image
                        src="/laptop.webp"
                        alt="Recent Post 1"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <span className="text-gray-700 hover:underline">
                      Going all-in with millennial design
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center space-x-4">
                    <div className="w-16 h-16 relative">
                      <Image
                        src="/laptop.webp"
                        alt="Recent Post 2"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <span className="text-gray-700 hover:underline">
                      Exploring new ways of decorating
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center space-x-4">
                    <div className="w-16 h-16 relative">
                      <Image
                        src="/laptop.webp"
                        alt="Recent Post 3"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <span className="text-gray-700 hover:underline">
                      Handmade pieces that took time to make
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
