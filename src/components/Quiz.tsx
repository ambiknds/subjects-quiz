import React from 'react';
import { useQuiz } from '../hooks/useQuiz';
import { Timer } from './Timer';

interface QuizProps {
  subject: string;
  onComplete: (score: number) => void;
}

export function Quiz({ subject, onComplete }: QuizProps) {
  const {
    currentQuestion,
    currentQuestionIndex,
    score,
    isComplete,
    totalQuestions,
    handleAnswer,
    handleTimeUp,
  } = useQuiz(subject);

  React.useEffect(() => {
    if (isComplete) {
      onComplete(score);
    }
  }, [isComplete, score, onComplete]);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg animate-fadeIn">
      <div className="flex justify-between items-center mb-6">
        <span className="text-lg font-semibold text-gray-600">
          Question {currentQuestionIndex + 1}/{totalQuestions}
        </span>
        <Timer duration={120} onTimeUp={handleTimeUp} />
        <span className="text-lg font-semibold text-blue-600">
          Score: {score}
        </span>
      </div>

      <div className="mb-8 animate-slideIn">
        <h2 className="text-xl font-bold text-gray-800 mb-6">
          {currentQuestion.question}
        </h2>
        <div className="space-y-4">
          {currentQuestion.shuffledOptions.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className="w-full p-4 text-left rounded-lg border border-gray-200 
                       hover:bg-blue-50 hover:border-blue-300 hover:shadow-md
                       transform hover:translate-x-2
                       transition-all duration-200 ease-in-out
                       animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
