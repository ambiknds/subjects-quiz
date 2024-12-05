import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface ResultProps {
  score: number;
  totalQuestions: number;
  onRetry: () => void;
}

export function Result({ score, totalQuestions, onRetry }: ResultProps) {
  const percentage = (score / totalQuestions) * 100;

  return (
    <div className="max-w-md mx-auto p-8 bg-white rounded-xl shadow-lg text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Quiz Complete!</h2>

      <div className="mb-8">
        <div className="text-6xl font-bold text-blue-600 mb-2">
          {percentage}%
        </div>
        <p className="text-gray-600">
          You scored {score} out of {totalQuestions} questions correctly
        </p>
      </div>

      <div className="space-y-4">
        <button
          onClick={onRetry}
          className="flex items-center justify-center space-x-2 w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Try Again</span>
        </button>
      </div>
    </div>
  );
}
