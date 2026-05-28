function ResultScreen({ score, totalQuestions, onRestart }) {
  const percentage = Math.round((score / totalQuestions) * 100);
  const wrong = totalQuestions - score;

  // Circle progress calculation
  const radius = 65;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  // Dynamic message based on score
  let emoji, title, message, messageClass;
  if (percentage >= 80) {
    emoji = "🎉";
    title = "Hebat!";
    message = "Kamu sangat cerdas! Pengetahuanmu luar biasa!";
    messageClass = "excellent";
  } else if (percentage >= 50) {
    emoji = "💪";
    title = "Bagus!";
    message = "Lumayan! Terus belajar untuk hasil yang lebih baik!";
    messageClass = "good";
  } else {
    emoji = "📚";
    title = "Coba Lagi!";
    message = "Jangan menyerah! Belajar lebih giat dan coba lagi ya!";
    messageClass = "low";
  }

  return (
    <div className="result-screen">
      <div className="result-emoji">{emoji}</div>
      <h2 className="result-title">{title}</h2>
      <p className="result-subtitle">Quiz telah selesai</p>

      {/* Score Circle */}
      <div className="score-circle-container">
        <div className="score-circle">
          <svg viewBox="0 0 160 160">

            <circle className="circle-bg" cx="80" cy="80" r={radius} />
            <circle
              className="circle-progress"
              cx="80"
              cy="80"
              r={radius}
              strokeDasharray={circumference}
              strokeDashoffset={offset}
            />
          </svg>
          <div className="score-text">
            <span className="score-value">{percentage}</span>
            <span className="score-unit">Persen</span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="stats-row">
        <div className="stat-item">
          <div className="stat-value">{totalQuestions}</div>
          <div className="stat-label">Total Soal</div>
        </div>
        <div className="stat-item">
          <div className="stat-value correct">{score}</div>
          <div className="stat-label">Benar</div>
        </div>
        <div className="stat-item">
          <div className="stat-value wrong">{wrong}</div>
          <div className="stat-label">Salah</div>
        </div>
      </div>

      {/* Message */}
      <div className={`result-message ${messageClass}`}>{message}</div>

      {/* Restart */}
      <button id="btn-restart" className="btn-primary" onClick={onRestart}>
        <span>🔄</span>
        <span>Main Lagi</span>
      </button>
    </div>
  );
}

export default ResultScreen;
