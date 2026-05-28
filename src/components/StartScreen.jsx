function StartScreen({ totalQuestions, onStart }) {
  return (
    <div className="start-screen">
      <div className="logo-container">
        <div className="logo-icon">🧠</div>
        <h1 className="title">Cerdasin</h1>
        <p className="subtitle">Tantang pengetahuanmu!</p>
      </div>

      <div className="info-badges">
        <div className="info-badge">
          <span className="badge-icon">📝</span>
          <span>{totalQuestions} Soal</span>
        </div>
        <div className="info-badge">
          <span className="badge-icon">⏱️</span>
          <span>Tanpa Batas Waktu</span>
        </div>
        <div className="info-badge">
          <span className="badge-icon">🏆</span>
          <span>Skor Langsung</span>
        </div>
      </div>

      <button id="btn-start" className="btn-primary" onClick={onStart}>
        <span>Mulai Quiz</span>
        <span className="btn-icon">→</span>
      </button>
    </div>
  );
}

export default StartScreen;
