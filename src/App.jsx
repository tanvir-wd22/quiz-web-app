import sampleData from './data/sampleData';
console.log(sampleData);
// import { useState } from 'react'

function App() {
  const currentQuestion = sampleData[0];
  // const [count, setCount] = useState(0)

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
              <button className="btn btn-soft w-full justify-start">
                {option}
              </button>
            ))}
          </div>
          {/* next */}
          <button className="btn btn-secondary w-full">Next Quiz</button>
        </div>
      </section>
    </>
  );
}

export default App;
