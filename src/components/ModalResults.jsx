import { useGlobalContext } from "../context";
import { ACTIONS } from "../context/reducer";

function ModalResults() {
  const { quizs, choose, correctAnswers, dispatch } = useGlobalContext();
  let correct = 0;
  let score = null;

  choose.forEach((answer, index) => {
    if (Number.parseInt(answer) === correctAnswers[index]) correct += 1;
  });
  score = ((correct / quizs.length) * 10).toFixed(2);

  function handleReview() {
    dispatch(ACTIONS.setModalResultsOpen(false));
    dispatch(ACTIONS.setReview(true));
  }

  function handleStartNewQuizs() {
    dispatch(ACTIONS.setWaiting(true));
    dispatch(ACTIONS.setLoading(false));
    dispatch(ACTIONS.setError({ show: false, message: "" }));
    dispatch(ACTIONS.setQuizs([]));
    dispatch(ACTIONS.setIndex(0));
    dispatch(ACTIONS.setCorrectAnswers([]));
    dispatch(ACTIONS.setChoose([]));
    dispatch(ACTIONS.setFullAnswer(false));
    dispatch(ACTIONS.setModalOpen(false));
    dispatch(ACTIONS.setModalResultsOpen(false));
    dispatch(ACTIONS.setReview(false));
    dispatch(
      ACTIONS.setGenerateData({
        quantity: "10",
        category: "12",
        difficulty: "easy",
      })
    );
  }

  return (
    <div className="results-overlay">
      <div className="results">
        <h3>Reults</h3>
        <p>
          Correct answer: <b>{correct}</b> / {quizs.length}
        </p>
        <p>
          Your score: <b>{score}</b> / 10
        </p>
        <div style={{ marginBottom: "6px" }}>
          <button style={{ cursor: "pointer" }} onClick={handleReview}>
            Review
          </button>
        </div>
        <div>
          <button style={{ cursor: "pointer" }} onClick={handleStartNewQuizs}>
            Start new quizzes
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalResults;
