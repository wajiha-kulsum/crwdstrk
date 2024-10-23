import React from 'react';
import Link from 'next/link'; // Import Link for routing

export default function Section3() {
  return (
    <div className="w-full px-1 py-16 bg-gray-50 lg:px-24">
      <div className="grid items-center w-full grid-cols-1 gap-8 lg:grid-cols-2">
        
        {/* Left Section: Text Content */}
        <div className="flex flex-col justify-center w-full h-full p-12 bg-blue-50 rounded-xl">
          <h1 className="mb-6 text-5xl font-bold leading-snug text-gray-900 lg:text-6xl">
            Support your mental well-being <br /> with our AI-driven insights
          </h1>
          <p className="mb-8 text-lg text-gray-600">
            Our AI-powered tool offers personalized mental health insights, helping you understand your emotions and take steps towards better mental wellness.
          </p>
          
          {/* Link Button */}
          <Link href="/chatbot">
            <button className="px-6 py-2 mx-2 font-semibold text-white transition duration-300 bg-gray-900 rounded-full shadow-md text-md hover:bg-gray-800">
              START NOW
            </button>
          </Link>
          
          <p className="flex items-center mt-4 text-gray-600">
            <svg
              className="w-5 h-5 mr-2 text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            No personal details required
          </p>
        </div>

        {/* Right Section: Images and Stats */}
        <div className="grid w-full h-full grid-rows-2 gap-6">
          
          {/* Robot Image */}
          <div className="relative">
            <div className="w-full p-8 bg-white rounded-xl">
              {/* Image Section */}
              <img
                src="\images\pic2.jpeg" // Corrected relative image path
                alt="AI-driven Support"
                className="object-cover w-full h-64 rounded-lg"
              />
            </div>
          </div>
          
          {/* Rating Section */}
          <div className="flex flex-col items-center justify-center w-full h-full p-8 bg-green-50 rounded-xl">
            <h3 className="mb-2 text-lg font-bold text-gray-800">Trusted by users worldwide</h3>
            <p className="mb-4 text-center text-gray-600">
              Our AI insights are highly rated for providing compassionate, reliable mental health support.
            </p>
            <div className="text-4xl font-bold text-green-600">
              4.9<span className="text-2xl">★</span>
            </div>
            <p className="text-gray-600">2350+ reviews from users seeking mental well-being</p>
          </div>
        </div>

      </div>
    </div>
  );
}
    