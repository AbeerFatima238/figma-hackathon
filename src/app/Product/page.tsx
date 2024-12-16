import React from "react";
import Image from "next/image";
import Product2 from "../Products2/page";
import Product3 from "../Product3/page";
import { ChevronRight } from "lucide-react";

const Product: React.FC = () => {
  return (
    <div>
      {/* Breadcrumb Section */}
      <div className="w-full h-auto py-10">
        <div className="flex items-center ml-4 space-x-4">
          <h2 className="text-xl font-normal text-[#9F9F9F]">Home</h2>
          <ChevronRight />
          <h2 className="text-xl font-normal text-[#9F9F9F]">Shop</h2>
          <ChevronRight />
          <h2 className="text-xl font-normal text-[#9F9F9F]">Asgaard Sofa</h2>
        </div>
      </div>

      {/* Product Section */}
      <div className="w-full h-auto mx-auto flex flex-col sm:flex-row bg-gray-100">

        {/* Left Side Thumbnails */}
        <div className="flex flex-wrap sm:flex-col gap-4 sm:mt-16 sm:ml-4 mb-8 justify-center sm:w-[100px]">
          {[1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className="w-[80px] h-[80px] border rounded-lg cursor-pointer hover:shadow-md"
            >
              <Image
                src="/asgaard.png"
                alt="Thumbnail"
                height={80}
                width={76}
                className="rounded-lg bg-[#FBEBB5]"
              />
            </div>
          ))}
        </div>

        {/* Main Product Section */}
        <div className="sm:flex sm:flex-1 p-4 sm:p-8 flex-col sm:flex-row gap-8 justify-between items-center">
          {/* Product Image */}
          <div className="sm:flex-shrink-0 w-full sm:w-1/2 flex items-center justify-center">
            <Image
              src="/asgaard.png"
              alt="Product"
              height={800}
              width={633}
              className="rounded-lg bg-[#FBEBB5] sm:mt-0 mt-[-120px] shadow-lg"
            />
          </div>

          {/* Product Details */}
          <div className="w-full sm:w-1/2 pl-8 flex flex-col gap-4">
            <h1 className="text-2xl sm:text-3xl font-semibold mb-4">Asgaard Sofa</h1>
            <p className="text-gray-600 mb-4 line-through">Rs. 250,000.00</p>
            <p className="text-gray-800 mb-6">
              Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact, stout-hearted hero with a well-balanced audio
              experience.
            </p>

            {/* Rating */}
            <div className="flex items-center mb-6">
              <span className="text-yellow-400 text-lg">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
              <span className="ml-2 text-gray-500">4.0 (250 reviews)</span>
            </div>

            {/* Color Options */}
            <div className="mb-6">
              <span className="block mb-2 text-gray-700 font-medium">Color:</span>
              <div className="flex gap-4">
                <div className="w-6 h-6 bg-blue-500 rounded-full cursor-pointer"></div>
                <div className="w-6 h-6 bg-black rounded-full cursor-pointer"></div>
                <div className="w-6 h-6 bg-yellow-500 rounded-full cursor-pointer"></div>
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex items-center gap-4 mb-6">
              <input
                type="number"
                defaultValue={1}
                className="w-16 h-10 border rounded-md text-center"
              />
              <button className="bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition">
                Add To Cart
              </button>
            </div>

            {/* Product Meta */}
            <div className="text-gray-600 text-sm">
              <p>SKU: 12345</p>
              <p>Category: Sofa</p>
              <p>Tags: Furniture, Sofa, Home Decor</p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <Product2 />
      <Product3 />
    </div>
  );
};

export default Product;
