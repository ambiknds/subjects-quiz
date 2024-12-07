
export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">About Class Quiz Platform</h1>
      <div className="prose prose-lg">
        <p className="text-gray-600 mb-6">
          Class Quiz Platform is a comprehensive online learning resource designed specifically for students and job preparation. Our platform offers interactive multiple-choice questions across various subjects to help students practice and improve their knowledge.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-gray-600 mb-6">
          We aim to make learning engaging and accessible for all . Through our carefully crafted quizzes, we help students prepare for their exams and develop a deeper understanding of their subjects.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">What We Offer</h2>
        <ul className="list-disc list-inside text-gray-600 mb-6">
          <li>Comprehensive subject coverage</li>
          <li>Interactive quiz format</li>
          <li>Immediate feedback and scoring</li>
          <li>Progress tracking</li>
          <li>Free access to all content</li>
        </ul>
      </div>
    </div>
  );
}