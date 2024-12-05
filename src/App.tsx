import React, { useState } from 'react';
import { SubjectSelection } from './components/SubjectSelection';
import { Quiz } from './components/Quiz';
import { Result } from './components/Result';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [quizComplete, setQuizComplete] = useState(false);
  const [finalScore, setFinalScore] = useState(0);

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
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />

      <main className="flex-grow max-w-7xl mx-auto px-4 py-8">
        {!selectedSubject ? (
          <>
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 animate-fadeIn">
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

      <Footer />
    </div>
  );
}

export default App;