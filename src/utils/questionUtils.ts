import { shuffleArray } from './arrayUtils';

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface ShuffledQuestion extends Omit<Question, 'correctAnswer'> {
  correctAnswer: number;
  shuffledOptions: string[];
}

export function shuffleQuestion(question: Question): ShuffledQuestion {
  const shuffledOptions = shuffleArray(question.options);
  const newCorrectAnswer = shuffledOptions.indexOf(question.options[question.correctAnswer]);
  
  return {
    ...question,
    shuffledOptions,
    correctAnswer: newCorrectAnswer
  };
}