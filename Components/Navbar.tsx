import React from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link"; // Import Link for navigation

const Navbar: React.FC = () => {
  return (
    <div className="fixed z-10 w-full shadow-md bg-gray-200/90 backdrop-blur-md">
      <div className="container flex items-center justify-between py-4 mx-auto">
        {/* Logo Section */}
        <Link href="/" className="flex items-center space-x-2 text-2xl font-bold text-gray-800">
          <svg
            className="w-8 h-8 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-500">
            MindSpace
          </span>
        </Link>

        {/* Navigation Menu */}
        <nav>
          <ul className="flex space-x-1">
            {/* Home */}
            <li key="Home" className="relative group">
              <Link
                href="/"
                className="relative px-4 py-2 text-gray-900 transition-all duration-300 ease-in-out rounded-lg hover:text-gray-50 hover:bg-gray-600"
              >
                <span className="relative z-10">Home</span>
                <span className="absolute inset-0 w-full h-full transition-opacity duration-300 ease-in-out bg-gray-400 rounded-lg opacity-0 group-hover:opacity-100"></span>
              </Link>
            </li>

            {/* Dashboard */}
            <li key="Dashboard" className="relative group">
              <Link
                href="/dashboard"
                className="relative px-4 py-2 text-gray-900 transition-all duration-300 ease-in-out rounded-lg hover:text-gray-50 hover:bg-gray-600"
              >
                <span className="relative z-10">Dashboard</span>
                <span className="absolute inset-0 w-full h-full transition-opacity duration-300 ease-in-out bg-gray-400 rounded-lg opacity-0 group-hover:opacity-100"></span>
              </Link>
              <ChevronDown className="inline-block w-4 h-4 ml-1 transition-transform group-hover:rotate-180" />
            </li>

            {/* Journal */}
            <li key="Journal" className="relative group">
              <Link
                href="/journel"
                className="relative px-4 py-2 text-gray-900 transition-all duration-300 ease-in-out rounded-lg hover:text-gray-50 hover:bg-gray-600"
              >
                <span className="relative z-10">Journal</span>
                <span className="absolute inset-0 w-full h-full transition-opacity duration-300 ease-in-out bg-gray-400 rounded-lg opacity-0 group-hover:opacity-100"></span>
              </Link>
              <ChevronDown className="inline-block w-4 h-4 ml-1 transition-transform group-hover:rotate-180" />
            </li>

            {/* Chatbot */}
            <li key="Chatbot" className="relative group">
              <Link
                href="/Articles"
                className="relative px-4 py-2 text-gray-900 transition-all duration-300 ease-in-out rounded-lg hover:text-gray-50 hover:bg-gray-600"
              >
                <span className="relative z-10">Articles</span>
                <span className="absolute inset-0 w-full h-full transition-opacity duration-300 ease-in-out bg-gray-400 rounded-lg opacity-0 group-hover:opacity-100"></span>
              </Link>
            </li>

            {/* Contact Us */}
            <li key="Contact Us" className="relative group">
              <Link
                href="#"
                className="relative px-4 py-2 text-gray-900 transition-all duration-300 ease-in-out rounded-lg hover:text-gray-50 hover:bg-gray-600"
              >
                <span className="relative z-10">Contact Us</span>
                <span className="absolute inset-0 w-full h-full transition-opacity duration-300 ease-in-out bg-gray-400 rounded-lg opacity-0 group-hover:opacity-100"></span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Login/Register and CatchUp Buttons */}
        <div className="flex space-x-4">
          <Link
            href="/login" // Updated login route
            className="relative inline-block px-6 py-2 overflow-hidden text-sm font-medium text-gray-600 transition-all duration-300 ease-in-out border-2 border-gray-600 rounded-full hover:text-white group"
          >
            <span className="relative z-10">Login</span>
            <span className="absolute inset-0 w-full h-full transition-opacity duration-300 ease-in-out bg-gray-600 opacity-0 group-hover:opacity-100"></span>
          </Link>
          <Link
            href="/signup" // Updated register route
            className="relative inline-block px-6 py-2 text-sm font-medium text-white transition-all duration-300 ease-in-out bg-gradient-to-r from-gray-500 to-gray-700 rounded-full hover:from-gray-600 hover:to-gray-800 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
