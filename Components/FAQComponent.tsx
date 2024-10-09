import React from 'react';

export default function Footer() {
  return (
    <footer className="py-10 border-t border-gray-200 bg-gray-50">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo and Description */}
          <div>
            <h2 className="mb-4 text-3xl font-bold text-primary">Sassly</h2>
            <p className="text-gray-700">
              Sassly is a real early-stage software looking for an analytics platform that scales with you. Check out our stage program.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-4 text-xl font-semibold text-primary">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 transition duration-300 hover:text-primary">About</a></li>
              <li><a href="#" className="text-gray-600 transition duration-300 hover:text-primary">Careers</a></li>
              <li><a href="#" className="text-gray-600 transition duration-300 hover:text-primary">Press</a></li>
              <li><a href="#" className="text-gray-600 transition duration-300 hover:text-primary">Contact Us</a></li>
              <li><a href="#" className="text-gray-600 transition duration-300 hover:text-primary">System Status</a></li>
            </ul>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="mb-4 text-xl font-semibold text-primary">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 transition duration-300 hover:text-primary">Live Chat</a></li>
              <li><a href="#" className="text-gray-600 transition duration-300 hover:text-primary">Jirogram</a></li>
              <li><a href="#" className="text-gray-600 transition duration-300 hover:text-primary">Datasético</a></li>
              <li><a href="#" className="text-gray-600 transition duration-300 hover:text-primary">Underline</a></li>
              <li><a href="#" className="text-gray-600 transition duration-300 hover:text-primary">Keyword</a></li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="mb-4 text-xl font-semibold text-primary">Newsletter</h3>
            <form className="flex flex-col">
              <div className="relative flex-grow mb-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 transition duration-300 border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:border-primary hover:shadow-xl"
                />
                <button
                  type="submit"
                  className="absolute p-2 text-white transition duration-300 rounded-full shadow-lg right-2 bottom-1 bg-primary hover:shadow-xl"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.94 6.06a.75.75 0 011.06 0L10 12.06l5.94-6a.75.75 0 111.06 1.06l-6.5 6.5a.75.75 0 01-1.06 0l-6.5-6.5a.75.75 0 010-1.06z" />
                  </svg>
                </button>
              </div>
              <label className="flex items-center text-sm text-gray-600">
                <input type="checkbox" className="mr-2 rounded focus:ring-primary" />
                <span>I agree with the <a href="#" className="underline text-primary">privacy policy</a></span>
              </label>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex items-center justify-between pt-4 mt-8 border-t border-gray-200">
          <div className="text-sm text-gray-600">© 2022 Crowdyflow Agency</div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 transition duration-300 hover:text-primary"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-gray-600 transition duration-300 hover:text-primary"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-gray-600 transition duration-300 hover:text-primary"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-gray-600 transition duration-300 hover:text-primary"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
