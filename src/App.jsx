import { useState } from "react";
import questions from "./data/questions";
import StartScreen from "./components/StartScreen";
import QuestionCard from "./components/QuestionCard";
import ProgressBar from "./components/ProgressBar";
import ResultScreen from "./components/ResultScreen";

function App() {
  const [screen, setScreen] = useState("start"); // 'start' | 'quiz' | 'result'
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleStart = () => {
    setScreen("quiz");
  };

  const handleSelectAnswer = (index) => {
    setSelectedAnswer(index);
  };

  const handleNext = () => {
    // Save the answer
    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);

    // Check if answer is correct
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore((prev) => prev + 1);
    }

    // Move to next question or show result
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer(null);
    } else {
      setScreen("result");
    }
  };

  const handleRestart = () => {
    setScreen("start");
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setAnswers([]);
  };

  return (
    <>
      {/* Animated background orbs */}
      <div className="bg-orbs">
        <div className="orb" />
        <div className="orb" />
        <div className="orb" />
      </div>

      {screen === "start" && (
        <div className="card" key="start">
          <div className="card-body">
            <StartScreen
              totalQuestions={questions.length}
              onStart={handleStart}
            />
          </div>
        </div>
      )}

      {screen === "quiz" && (
        <div className="card" key={`quiz-${currentQuestion}`}>
          <ProgressBar
            current={currentQuestion + 1}
            total={questions.length}
          />
          <div className="card-body">
            <QuestionCard
              question={questions[currentQuestion]}
              questionNumber={currentQuestion + 1}
              totalQuestions={questions.length}
              selectedAnswer={selectedAnswer}
              onSelectAnswer={handleSelectAnswer}
              onNext={handleNext}
            />
          </div>
        </div>
      )}

      {screen === "result" && (
        <div className="card" key="result">
          <div className="card-body">
            <ResultScreen
              score={score}
              totalQuestions={questions.length}
              onRestart={handleRestart}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
