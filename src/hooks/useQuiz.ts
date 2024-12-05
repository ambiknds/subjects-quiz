import { useState, useCallback, useMemo } from 'react';
import { quizData } from '../data/quizData';
import { getRandomItems } from '../utils/arrayUtils';
import { shuffleQuestion, type ShuffledQuestion } from '../utils/questionUtils';

const QUESTIONS_PER_QUIZ = 10;

export function useQuiz(subject: string) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const questions = useMemo(() => {
    const selectedQuestions = getRandomItems(quizData[subject], QUESTIONS_PER_QUIZ);
    return selectedQuestions.map(shuffleQuestion);
  }, [subject]);

  const handleAnswer = useCallback((selectedOption: number) => {
    const currentQuestion = questions[currentQuestionIndex];
    
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(prev => prev + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setIsComplete(true);
    }
  }, [currentQuestionIndex, questions]);

  const handleTimeUp = useCallback(() => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setIsComplete(true);
    }
  }, [currentQuestionIndex, questions.length]);

  const resetQuiz = useCallback(() => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setIsComplete(false);
  }, []);

  return {
    currentQuestion: questions[currentQuestionIndex],
    currentQuestionIndex,
    score,
    isComplete,
    totalQuestions: questions.length,
    handleAnswer,
    handleTimeUp,
    resetQuiz
  };
}