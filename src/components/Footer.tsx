import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 hover:text-white transition-colors duration-300">
            © {new Date().getFullYear()} Class 8 Quiz Platform
          </p>
          <div className="mt-4 md:mt-0">
            <nav className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">About</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Contact</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Help</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}