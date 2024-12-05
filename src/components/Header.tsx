import React from 'react';
import { GraduationCap } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center space-x-3">
          <GraduationCap className="w-8 h-8 text-blue-600 animate-bounce" />
          <h1 className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-300">
            Class Quiz Platform
          </h1>
        </div>
      </div>
    </header>
  );
}
