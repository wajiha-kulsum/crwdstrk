import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-10 border-t border-gray-200 bg-gray-50">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo and Description */}
          <div>
            <h2 className="mb-4 text-3xl font-bold text-gray-900">Mindspace</h2>
            <p className="text-gray-900">
              Mindspace is dedicated to providing mental health resources and support. Our platform aims to empower individuals on their journey to better mental well-being.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-4 text-xl font-semibold text-gray-900">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-900">About Us</a></li>
              <li><a href="#" className="text-gray-900">Careers</a></li>
              <li><a href="#" className="text-gray-900">Resources</a></li>
              <li><a href="#" className="text-gray-900">Contact Us</a></li>
              <li><a href="#" className="text-gray-900">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="mb-4 text-xl font-semibold text-gray-900">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-900">Help Center</a></li>
              <li><a href="#" className="text-gray-900">FAQs</a></li>
              <li><a href="#" className="text-gray-900">Community Forum</a></li>
              <li><a href="#" className="text-gray-900">Feedback</a></li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="mb-4 text-xl font-semibold text-gray-900">Stay Connected</h3>
            <form className="flex flex-col">
              <div className="relative flex-grow mb-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:border-primary"
                />
                <button
                  type="submit"
                  className="absolute p-2 text-white rounded-full right-2 bottom-1 bg-primary"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.94 6.06a.75.75 0 011.06 0L10 12.06l5.94-6a.75.75 0 111.06 1.06l-6.5 6.5a.75.75 0 01-1.06 0l-6.5-6.5a.75.75 0 010-1.06z" />
                  </svg>
                </button>
              </div>
              <label className="flex items-center text-sm text-gray-900">
                <input type="checkbox" className="mr-2 rounded focus:ring-primary" />
                <span>
                  I agree with the <a href="#" className="underline text-primary">privacy policy</a>
                </span>
              </label>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex items-center justify-between pt-4 mt-8 border-t border-gray-200">
          <div className="text-sm text-gray-900">© 2022 Mindspace. All rights reserved.</div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-900"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-gray-900"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-gray-900"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-gray-900"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
