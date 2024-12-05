import React from 'react';
import { BookOpen, Calculator, Beaker, Heart, Laptop } from 'lucide-react';

interface SubjectSelectionProps {
  onSelectSubject: (subject: string) => void;
}

const subjects = [
  { id: 'science', name: 'Science', icon: Beaker },
  { id: 'mathematics', name: 'Mathematics', icon: Calculator },
  { id: 'english', name: 'English', icon: BookOpen },
  { id: 'health', name: 'Health Education', icon: Heart },
  { id: 'computer', name: 'Computer', icon: Laptop },
];

export function SubjectSelection({ onSelectSubject }: SubjectSelectionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {subjects.map((subject, index) => {
        const Icon = subject.icon;
        return (
          <button
            key={subject.id}
            onClick={() => onSelectSubject(subject.id)}
            className="group flex flex-col items-center p-6 bg-white rounded-xl shadow-lg 
                     hover:shadow-2xl hover:scale-105 hover:bg-blue-50
                     transform transition-all duration-300 ease-in-out
                     animate-fadeIn"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <Icon className="w-12 h-12 text-blue-600 group-hover:text-blue-700 
                           transform group-hover:rotate-12 transition-transform duration-300" />
            <h3 className="text-xl font-semibold text-gray-800 mt-4 group-hover:text-blue-700">
              {subject.name}
            </h3>
            <p className="text-gray-600 mt-2 group-hover:text-blue-600">
              Take {subject.name} Quiz
            </p>
          </button>
        );
      })}
    </div>
  );
}