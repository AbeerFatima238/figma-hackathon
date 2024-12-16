import React from "react";

const Product2: React.FC = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto bg-white border border-gray-300 rounded-md p-8">
      {/* Tabs Header */}
      <div className="flex flex-wrap justify-center border-b mb-6">
        <div className="text-lg font-medium pb-2 mr-8 text-gray-900 border-b-2 border-black w-full sm:w-auto">
          Description
        </div>
        <div className="text-lg font-medium pb-2 mr-8 text-gray-500 w-full sm:w-auto">
          Additional Information
        </div>
        <div className="text-lg font-medium pb-2 text-gray-500 w-full sm:w-auto">
          Reviews (5)
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col sm:flex-row sm:gap-8 justify-center items-center">
        {/* Left Section - Text */}
        <div className="w-full sm:w-1/2 text-gray-600 leading-relaxed mb-8 sm:mb-0">
          <p className="mb-4">
            Embracing the modern spirit of sleek and classic design, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.
          </p>
          <p>
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage-styled engineering. Setting the bar as one of the loudest
            speakers in its class, it has a well-balanced audio performance,
            with clear midranges and extended highs for an unforgettable sound.
          </p>
        </div>

        {/* Right Section - Images (Horizontally after text) */}
        <div className="w-full sm:w-1/2 flex flex-col sm:flex-row gap-8 justify-center">
          <div className="w-full sm:w-1/2 bg-gray-100 p-4 rounded-md shadow-md">
            <img
              src="/white-sofa.png"
              alt="Left Sofa"
              height={348}
              width={605}
              className="w-full h-auto rounded-md"
            />
          </div>
          <div className="w-full sm:w-1/2 bg-gray-100 p-4 rounded-md shadow-md">
            <img
              src="/white-sofa.png"
              alt="Right Sofa"
              height={348}
              width={605}
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product2;
