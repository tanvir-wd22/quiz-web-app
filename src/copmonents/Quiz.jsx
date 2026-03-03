import sampleData from '../data/sampleData';

const Quiz = ({
  handleNextQuiz,
  currentIndex,
  currentQuestion,
  selectedOption,
  setSelectedOption,
}) => {
  return (
    <div>
      <section className="min-h-screen flex justify-center items-center">
        <div className="space-y-6">
          {/* progress */}
          <div className="flex justify-between">
            <span>
              Question {currentIndex + 1} of {sampleData.length}
            </span>
            <span className="badge badge-outline badge-primary">
              {((currentIndex + 1) / sampleData.length) * 100} %
            </span>
          </div>
          <progress
            className="progress progress-primary w-full"
            value={currentIndex + 1}
            max={sampleData.length}
          ></progress>
          {/* title */}
          <h1 className="text-2xl font-semibold leading-tight">
            {currentQuestion.title}
          </h1>
          {/* options */}
          <div className="grid grid-cols-1 gap-4">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => setSelectedOption(option)}
                className={`btn w-full justify-start ${selectedOption === option ? 'btn-primary' : 'btn-outline'}`}
              >
                {option}
              </button>
            ))}
          </div>
          {/* next */}
          <button
            onClick={handleNextQuiz}
            disabled={!selectedOption}
            className="btn btn-secondary w-full"
          >
            {currentIndex === sampleData.length - 1
              ? 'Finish Quiz'
              : 'Next Quiz'}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Quiz;
