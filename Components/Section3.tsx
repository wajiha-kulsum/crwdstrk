import React from 'react';

export default function Section3() {
  return (
    <div className="w-full px-1 py-16 bg-gray-50 lg:px-24">
      <div className="grid items-center w-full grid-cols-1 gap-8 lg:grid-cols-2">
        
        {/* Left Section: Text Content */}
        <div className="flex flex-col justify-center w-full h-full p-12 bg-gray-100 rounded-xl">
          <h1 className="mb-6 text-5xl font-bold leading-snug text-gray-900 lg:text-6xl">
            Help you instantly with <br /> an AI-driven chatbot
          </h1>
          <p className="mb-8 text-lg text-gray-600">
            Sassly AI-driven chatbot in the past allows you to focus more on your business or simply leave pen-and-paper behind.
          </p>
          {/* Smaller Button with margin from the page corners */}
          <button className="px-6 py-2 mx-2 font-semibold text-white transition duration-300 bg-gray-900 rounded-full shadow-md text-md hover:bg-gray-800">
            START CHATTING
          </button>
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
            No credit card required
          </p>
        </div>

        {/* Right Section: Images and Stats */}
        <div className="grid w-full h-full grid-rows-2 gap-6">
          
          {/* Robot Image */}
          <div className="relative">
            <div className="w-full p-8 bg-white rounded-xl">
              <img
                src="/robot-image.png"
                alt="AI-driven Sassly"
                className="object-cover w-full h-64 rounded-lg"
              />
            </div>
          </div>
          
          {/* Rating Section */}
          <div className="flex flex-col items-center justify-center w-full h-full p-8 bg-green-50 rounded-xl">
            <h3 className="mb-2 text-lg font-bold text-gray-800">Sassly is highly rated</h3>
            <p className="mb-4 text-center text-gray-600">
              Sassly is highly rated AI-Chatbot by millions of users.
            </p>
            <div className="text-4xl font-bold text-green-600">
              4.9<span className="text-2xl">★</span>
            </div>
            <p className="text-gray-600">2350+ reviews on Capterra</p>
          </div>
        </div>

      </div>
    </div>
  );
}
