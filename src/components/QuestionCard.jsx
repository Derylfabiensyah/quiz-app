const OPTION_LETTERS = ["A", "B", "C", "D"];

function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  onSelectAnswer,
  onNext,
}) {
  return (
    <div className="question-section" key={questionNumber}>
      <div className="question-number">
        📌 Soal {questionNumber} dari {totalQuestions}
      </div>

      <h2 className="question-text">{question.question}</h2>

      <div className="options-list">
        {question.options.map((option, index) => (
          <button
            key={index}
            id={`option-${index}`}
            className={`option-btn${selectedAnswer === index ? " selected" : ""}`}
            onClick={() => onSelectAnswer(index)}
          >
            <span className="option-letter">{OPTION_LETTERS[index]}</span>
            <span className="option-text">{option}</span>
          </button>
        ))}
      </div>

      <button
        id="btn-next"
        className="btn-next"
        onClick={onNext}
        disabled={selectedAnswer === null}
      >
        <span>
          {questionNumber === totalQuestions ? "Lihat Hasil" : "Selanjutnya"}
        </span>
        <span className="btn-icon">→</span>
      </button>
    </div>
  );
}

export default QuestionCard;
