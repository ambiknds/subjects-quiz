import React from 'react';
import { useQuiz } from '../hooks/useQuiz';
import { Timer } from './Timer';
import { ArrowRight, ArrowLeft } from 'lucide-react';

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
    handleNextQuestion,
    handlePreviousQuestion,
    handleTimeUp,
    isCurrentQuestionAnswered,
    getCurrentAnswer,
    canGoBack,
    canGoForward
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
        <Timer duration={60} onTimeUp={handleTimeUp} />
        <span className="text-lg font-semibold text-blue-600">
          Score: {score}
        </span>
      </div>
      
      <div className="mb-8 animate-slideIn">
        <h2 className="text-xl font-bold text-gray-800 mb-6">
          {currentQuestion.question}
        </h2>
        <div className="space-y-4">
          {currentQuestion.shuffledOptions.map((option, index) => {
            const isSelected = getCurrentAnswer() === index;
            return (
              <button
                key={index}
                onClick={() => !isCurrentQuestionAnswered() && handleAnswer(index)}
                disabled={isCurrentQuestionAnswered()}
                className={`w-full p-4 text-left rounded-lg border 
                         transition-all duration-200 ease-in-out
                         animate-fadeIn group
                         ${isCurrentQuestionAnswered()
                           ? isSelected
                             ? 'bg-blue-50 border-blue-300'
                             : 'bg-gray-50 border-gray-200'
                           : 'border-gray-200 hover:bg-blue-50 hover:border-blue-300 hover:shadow-md transform hover:translate-x-2'
                         }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between">
                  <span>{option}</span>
                  {isCurrentQuestionAnswered() && isSelected && (
                    <div className="w-3 h-3 rounded-full bg-blue-500" />
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={handlePreviousQuestion}
          disabled={!canGoBack}
          className={`flex items-center space-x-2 px-6 py-3 rounded-lg
                     transition-all duration-200 ease-in-out
                     ${canGoBack
                       ? 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                       : 'bg-gray-50 text-gray-400 cursor-not-allowed'
                     }`}
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Previous</span>
        </button>

        <button
          onClick={handleNextQuestion}
          className={`flex items-center space-x-2 px-6 py-3 rounded-lg
                     transition-all duration-200 ease-in-out
                     ${isCurrentQuestionAnswered()
                       ? 'bg-blue-600 hover:bg-blue-700 text-white'
                       : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                     }`}
        >
          <span>{canGoForward ? (isCurrentQuestionAnswered() ? 'Next' : 'Skip') : 'Finish'}</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}