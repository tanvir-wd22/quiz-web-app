import sampleData from '../data/sampleData';

const Result = ({ userScore }) => {
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
          <h2 className="card-title text-center">Your Answers</h2>
        </div>
      </div>
    </div>
  );
};

export default Result;
