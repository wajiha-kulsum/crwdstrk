"use client"; // Add this line to make the component a Client Component

import React, { useState } from 'react';

const motivationalQuotes = [
  {
    text: "Your mental health is a priority. Your happiness is an essential. Your self-care is a necessity.",
    author: "Unknown",
    title: "Mental Wellness Advocate",
  },
  {
    text: "Mental health…is not a destination, but a process. It's about how you drive, not where you're going.",
    author: "Noam Shpancer",
    title: "Psychologist",
  },
  {
    text: "You, yourself, as much as anybody in the entire universe, deserve your love and affection.",
    author: "Buddha",
    title: "Spiritual Teacher",
  },
  {
    text: "Healing takes time, and asking for help is a courageous step.",
    author: "Mariska Hargitay",
    title: "Actress & Advocate",
  },
  {
    text: "What mental health needs is more sunlight, more candor, and more unashamed conversation.",
    author: "Glenn Close",
    title: "Actress & Advocate",
  },
];

const Section4 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % motivationalQuotes.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + motivationalQuotes.length) % motivationalQuotes.length
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
        {/* Quote Text */}
        <blockquote className="text-2xl italic font-light text-gray-700">
          "{motivationalQuotes[currentIndex].text}"
        </blockquote>
        {/* Author Details */}
        <footer className="mt-6">
          <p className="text-xl font-semibold text-gray-900">{motivationalQuotes[currentIndex].author}</p>
          <p className="text-gray-500 text-md">{motivationalQuotes[currentIndex].title}</p>
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
