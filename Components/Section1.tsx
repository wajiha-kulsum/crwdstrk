import React from 'react';
import { ArrowDown } from 'lucide-react';

// StatBox component with soft hover effect
interface StatBoxProps {
  number: string;
  text: string;
  className?: string;
}

const StatBox: React.FC<StatBoxProps> = ({ number, text, className = '' }) => (
  <div className={`p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:bg-gray-50 ${className}`}>
    <div className={`mb-2 text-4xl font-bold ${className === 'bg-purple-100' ? 'text-purple-800' : 'text-gray-800'}`}>
      {number}
    </div>
    <p className="text-gray-600">{text}</p>
  </div>
);

// Fully integrated Section1 component with soft hover effects
const Section1: React.FC = () => {
  // Stats array defined within the component
  const stats = [
    { number: '30m+', text: 'Sassly used by over 30 million customers worldwide.', className: 'bg-purple-100' }, // Keep purple for this card
    { number: '85%', text: 'Claude reduces brand risk with Constitutional AI.', className: 'bg-gray-100' }, // Added gray for consistency
    { number: '5m+', text: 'Mobile version of Sassly AI-driven chatbot widely used.', className: 'bg-gray-100' }, // Added gray for consistency
    { number: '30m+', text: 'Sassly trusted by millions globally.', className: 'bg-gray-100' } // Added gray for consistency
  ];

  return (
    <div className="min-h-screen py-12 bg-white"> {/* Changed background to white */}
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h1 className="mb-4 text-4xl font-bold text-center text-gray-900 md:text-5xl">
          Meet your new<br />intelligent AI-assistant
        </h1>
        <p className="max-w-3xl mx-auto mb-12 text-center text-gray-600">
          Optimize your impact this holiday season with an AI-driven, multichannel marketing
          strategy. Get all the tips and tricks in our free ebook.
        </p>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left Section */}
          <div className="p-8 transition-all duration-300 bg-white rounded-lg shadow-md hover:shadow-lg hover:bg-gray-50">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Ability to generate content in different languages.
            </h2>
            <p className="mb-6 text-gray-600">
              Identify information in a given text and present
            </p>
            <div className="relative flex justify-center mb-8">
              <img 
                src="/placeholder.svg?height=500&width=250" 
                alt="Sassly mobile app" 
                className="w-64 h-auto transition-all duration-300 shadow-lg rounded-3xl hover:shadow-xl"
              />
              <ArrowDown className="absolute w-8 h-8 text-gray-400 transition-all duration-300 -bottom-12 hover:text-gray-500" />
            </div>
            <div className="flex justify-center mt-16 space-x-4">
              <button className="flex items-center px-6 py-3 space-x-2 text-gray-800 transition-all duration-300 bg-gray-100 rounded-full hover:bg-gray-200 hover:shadow-md">
                <img 
                  src="/placeholder.svg?height=20&width=20" 
                  alt="Google Play icon" 
                  className="w-5 h-5"
                />
                <span>Get it on<br />Google Play</span>
              </button>
              <button className="flex items-center px-6 py-3 space-x-2 text-white transition-all duration-300 bg-gray-900 rounded-full hover:bg-gray-800 hover:shadow-md">
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.707 9.293l-5-5a.999.999 0 10-1.414 1.414L14.586 9H3a1 1 0 100 2h11.586l-3.293 3.293a.999.999 0 101.414 1.414l5-5a.999.999 0 000-1.414z" />
                </svg>
                <span>Download on the<br />App Store</span>
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <StatBox 
                key={index}
                number={stat.number}
                text={stat.text}
                className={stat.className}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
