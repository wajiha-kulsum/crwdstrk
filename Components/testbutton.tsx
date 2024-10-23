import React from 'react';
import Link from 'next/link'; // Import Link from Next.js

const TestButton = () => {
  return (
    <div className="relative bg-black text-white py-16 px-6 md:px-8 lg:px-12 grid place-items-center h-[80vh] overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-[300px] h-[300px] bg-gradient-to-r from-indigo-600 to-purple-700 opacity-40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[200px] h-[200px] bg-gradient-to-r from-indigo-600 to-purple-700 opacity-30 rounded-full blur-2xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl space-y-6 text-center">
        <h1 className="text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
          Take Assessment Here
        </h1>
        <p className="text-base text-gray-400 md:text-lg">
          Get your health evaluated and improve them step by step with our expert-driven assessments.
        </p>
        <div className="flex justify-center">
          {/* Wrap the button in Link for routing */}
          <Link href="/assessment" passHref>
            <button className="px-8 py-3 text-white transition-all duration-300 transform rounded-full shadow-lg bg-gradient-to-r from-indigo-500 to-purple-600 hover:shadow-xl hover:from-indigo-600 hover:to-purple-700 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TestButton;
