"use client"; // Add this line to make the component a Client Component

import React, { useState } from 'react';

const testimonials = [
  {
    text: "Analysts used Mode’s advanced analytics capabilities to build parameterized reports and visualizations with live data. The customer success team then used the intuitive drag interface to delve.",
    author: "John Butler",
    title: "Developer",
  },
  {
    text: "This tool has significantly streamlined our workflow and improved our productivity. I can't recommend it enough!",
    author: "Jane Smith",
    title: "Project Manager",
  },
  {
    text: "Sassly AI has transformed the way we interact with our customers. It’s been a game changer for our business.",
    author: "Mark Johnson",
    title: "CEO",
  },
];

const Section4 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="relative flex items-center justify-center py-16 bg-gray-50">
      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute p-4 text-gray-500 transition transform -translate-y-1/2 left-8 top-1/2 hover:text-gray-700"
      >
        &lt;
      </button>

      <div className="w-full max-w-2xl px-8 text-center">
        {/* Quote Icon */}
        <div className="mb-6 text-5xl text-gray-400">“</div>
        {/* Testimonial Text */}
        <blockquote className="text-2xl italic font-light text-gray-700">
          "{testimonials[currentIndex].text}"
        </blockquote>
        {/* Author Details */}
        <footer className="mt-6">
          <p className="text-xl font-semibold text-gray-900">{testimonials[currentIndex].author}</p>
          <p className="text-gray-500 text-md">{testimonials[currentIndex].title}</p>
        </footer>
      </div>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute p-4 text-gray-500 transition transform -translate-y-1/2 right-8 top-1/2 hover:text-gray-700"
      >
        &gt;
      </button>
    </div>
  );
};

export default Section4;
