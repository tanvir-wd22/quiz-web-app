import Quiz from './copmonents/Quiz';
import Result from './copmonents/Result';
import sampleData from './data/sampleData';
// console.log(sampleData);
import { useState } from 'react';

function App() {
  const [screen, setScreen] = useState('quiz');
  const [userScore, setUserScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentQuestion = sampleData[currentIndex];

  const handleNextQuiz = () => {
    let isCorrect = selectedOption === currentQuestion.answer;
    if (isCorrect) {
      setUserScore((prev) => prev + 1);
      // setUserScore(userScore + 1);
    }
    // === add all users answer inside an array ===
    setUserAnswer([...userAnswer, selectedOption]);

    if (currentIndex < sampleData.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      // setCurrentIndex(currentIndex + 1);
      setSelectedOption('');
    } else {
      setScreen('result');
    }
  };

  console.log(userAnswer, userScore);

  if (screen === 'result') {
  return <Result userScore={userScore}></Result>;
  } else {
    return (
      <Quiz
        handleNextQuiz={handleNextQuiz}
        currentQuestion={currentQuestion}
        currentIndex={currentIndex}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      ></Quiz>
    );
  }
}

export default App;
