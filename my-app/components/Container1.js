"use client"; // Marking this component as a client component

import React, { useState, useEffect } from 'react';
import '../stylesheets/container1.css'; // Ensure to import your CSS file

function Container1() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100); // Adjust the timer as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center w-full px-4 lg:px-0"> {/* Added padding for small screens */}
      <div
        className={`bg-blue-50 h-auto border rounded-lg mt-6 transition-all duration-500 ease-in-out ${
          isLoaded ? 'morph-in' : ''
        }`}
        style={{ width: '90%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        {/* Flex container for text and side-by-side images */}
        <div className="flex flex-col lg:flex-row w-full items-center"> {/* Responsive flex direction */}
          <div className="text-content flex-1 p-6 lg:p-10"> {/* Adjust padding for larger screens */}
            <h1
              className={`text-pink-800 text-left font-bold mb-4 font-serif transition-all duration-500 ease-in-out ${
                isLoaded ? 'morph-in' : ''
              } text-3xl sm:text-4xl lg:text-5xl`} // Responsive text sizes
            >
              Private mental health <br /> consultation from a <br /> professional
            </h1>
            <p
              className={`mt-4 sm:mt-6 text-pink-400 text-lg sm:text-xl lg:text-2xl mb-6 transition-opacity duration-500 ease-in-out ${
                isLoaded ? 'fade-in' : ''
              }`}
            >
              Sassly AI-driven chatbot in the past allowing you <br /> to focus more on your business or simply leaving <br /> pen-and-paper
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center">
              <button
                className={`mb-4 sm:mb-0 sm:mr-4 button transition-transform duration-500 ease-in-out ${
                  isLoaded ? 'scale-in' : ''
                }`}
              >
                Start assessment
              </button>
              <button
                className={`bg-blue-400 w-full sm:w-40 h-12 mt-4 sm:mt-0 text-pink-950 font-semibold button transition-transform duration-500 ease-in-out ${
                  isLoaded ? 'scale-in' : ''
                }`}
              >
                Professional help
              </button>
            </div>
          </div>

          {/* Flex container for side-by-side images */}
          <div className="image-content flex-1 p-6 lg:p-10 flex justify-center lg:justify-end"> {/* Responsive padding and alignment */}
            <img
              src="/lib/pic1.jpg"
              alt="Mental health consultation"
              className={`mt-6 w-full sm:w-2/3 lg:w-full h-auto object-cover transition-opacity duration-500 ease-in-out ${
                isLoaded ? 'fade-in' : ''
              }`} // Made image responsive
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* Exporting the component */
export default Container1;
