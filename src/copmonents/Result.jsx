import sampleData from '../data/sampleData';

const Result = ({ userScore, userAnswer, playAgain }) => {
  //   console.log(userAnswer);
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-300 shadow-sm">
        {/* stat */}
        <div className="stats bg-base-100 border-base-300 border">
          <div className="stat">
            <div className="stat-title">Correct</div>
            <div className="stat-value">{userScore}</div>
          </div>
          <div className="stat">
            <div className="stat-title">Percentage</div>
            <div className="stat-value">
              {(userScore / sampleData.length) * 100} %
            </div>
          </div>
        </div>
        {/* answers */}
        <div className="card-body">
          <h2 className="card-title">See Result</h2>
          {sampleData.map((quiz, index) => {
            const quizAnswer = userAnswer[index];
            let isCorrect = quizAnswer === quiz.answer;
            return (
              <div key={index} className="border-2 border-sky-400 p-2">
                <p>{quiz.title}</p>
                <p
                  className={`${isCorrect ? 'text-green-500' : 'text-red-500'}`}
                >
                  Your Answer : {quizAnswer}
                </p>
                <p>Correct Answer : {quiz.answer}</p>
              </div>
            );
          })}

          <button onClick={playAgain} className="btn btn-warning">
            Play Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;
