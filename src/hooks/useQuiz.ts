import { useState, useCallback, useMemo } from 'react';
import { quizData } from '../data/quizData';
import { getRandomItems } from '../utils/arrayUtils';
import { shuffleQuestion, type ShuffledQuestion } from '../utils/questionUtils';

const QUESTIONS_PER_QUIZ = 10;

export function useQuiz(subject: string) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [userAnswers, setUserAnswers] = useState<Map<number, number>>(new Map());

  const questions = useMemo(() => {
    const selectedQuestions = getRandomItems(quizData[subject], QUESTIONS_PER_QUIZ);
    return selectedQuestions.map(shuffleQuestion);
  }, [subject]);

  const handleAnswer = useCallback((selectedOption: number) => {
    const currentQuestion = questions[currentQuestionIndex];
    
    setUserAnswers(prev => new Map(prev).set(currentQuestionIndex, selectedOption));
    
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(prev => prev + 1);
    }
  }, [currentQuestionIndex, questions]);

  const handleNextQuestion = useCallback(() => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setIsComplete(true);
    }
  }, [currentQuestionIndex, questions.length]);

  const handlePreviousQuestion = useCallback(() => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  }, [currentQuestionIndex]);

  const handleTimeUp = useCallback(() => {
    handleNextQuestion();
  }, [handleNextQuestion]);

  const resetQuiz = useCallback(() => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setIsComplete(false);
    setUserAnswers(new Map());
  }, []);

  const getCurrentAnswer = useCallback(() => {
    return userAnswers.get(currentQuestionIndex);
  }, [currentQuestionIndex, userAnswers]);

  const isCurrentQuestionAnswered = useCallback(() => {
    return userAnswers.has(currentQuestionIndex);
  }, [currentQuestionIndex, userAnswers]);

  return {
    currentQuestion: questions[currentQuestionIndex],
    currentQuestionIndex,
    score,
    isComplete,
    totalQuestions: questions.length,
    handleAnswer,
    handleNextQuestion,
    handlePreviousQuestion,
    handleTimeUp,
    resetQuiz,
    isCurrentQuestionAnswered,
    getCurrentAnswer,
    canGoBack: currentQuestionIndex > 0,
    canGoForward: currentQuestionIndex < questions.length - 1
  };
}