import React from 'react';
import { SubjectSelection } from '../components/SubjectSelection';
import { Quiz } from '../components/Quiz';
import { Result } from '../components/Result';
import { Helmet } from 'react-helmet-async';

export default function Home() {
  const [selectedSubject, setSelectedSubject] = React.useState<string | null>(null);
  const [quizComplete, setQuizComplete] = React.useState(false);
  const [finalScore, setFinalScore] = React.useState(0);

  const handleSubjectSelect = (subject: string) => {
    setSelectedSubject(subject);
    setQuizComplete(false);
  };

  const handleQuizComplete = (score: number) => {
    setFinalScore(score);
    setQuizComplete(true);
  };

  const handleRetry = () => {
    setSelectedSubject(null);
    setQuizComplete(false);
    setFinalScore(0);
  };

  return (
    <>
      <Helmet>
        <title>Interactive MCQ Practice</title>
        <meta name="description" content="Practice MCQs in Science, Mathematics, English, Health Education, and Computer subjects. Interactive learning for Class 8 students." />
      </Helmet>

      <main className="flex-grow max-w-7xl mx-auto px-4 py-8">
        {!selectedSubject ? (
          <>
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
              Select a Subject
            </h2>
            <SubjectSelection onSelectSubject={handleSubjectSelect} />
          </>
        ) : !quizComplete ? (
          <Quiz 
            subject={selectedSubject} 
            onComplete={handleQuizComplete}
          />
        ) : (
          <Result 
            score={finalScore}
            totalQuestions={10}
            onRetry={handleRetry}
          />
        )}
      </main>
    </>
  );
}