import sampleData from './data/sampleData';
console.log(sampleData);
import { useState } from 'react';

function App() {
  const [selectedOption, setSelectedOption] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentQuestion = sampleData[currentIndex];
  const handleNextQuiz = () => {
    // setCurrentIndex(currentIndex + 1);
    setCurrentIndex((prev) => prev + 1);
  };

  return (
    <>
      <section className="min-h-screen flex justify-center items-center">
        <div className="space-y-6">
          {/* title */}
          <h1 className="text-2xl font-semibold leading-tight">
            {currentQuestion.title}
          </h1>
          {/* options */}
          <div className="grid grid-cols-1 gap-4">
            {currentQuestion.options.map((option) => (
              <button
                onClick={() => setSelectedOption(option)}
                className={`btn btn-soft w-full justify-start ${selectedOption === option ? 'btn-primary' : 'btn-outline'}`}
              >
                {option}
              </button>
            ))}
          </div>
          {/* next */}
          <button onClick={handleNextQuiz} className="btn btn-secondary w-full">
            Next Quiz
          </button>
        </div>
      </section>
    </>
  );
}

export default App;
