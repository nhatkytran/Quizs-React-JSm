import { useState } from "react";
import { useGlobalContext } from "../context";
import { ACTIONS } from "../context/reducer";

function Review() {
  const [type, setType] = useState("all");
  const { quizs, correctAnswers, choose, dispatch } = useGlobalContext();

  let quizsOnType;
  let isAllCorrect;
  let isAllIncorrect;
  if (type === "all") quizsOnType = quizs;
  if (type === "correct") {
    quizsOnType = quizs.map((quiz, index) => {
      if (quiz.answers[correctAnswers[index]] === quiz.answers[choose[index]])
        return quiz;
      return undefined;
    });
    isAllIncorrect = quizsOnType.every((quiz) => !quiz);
  }
  if (type === "incorrect") {
    quizsOnType = quizs.map((quiz, index) => {
      if (quiz.answers[correctAnswers[index]] !== quiz.answers[choose[index]])
        return quiz;
      return undefined;
    });
    isAllCorrect = quizsOnType.every((quiz) => !quiz);
  }

  function handleType(event) {
    setType(event.target.name);
  }

  function handleGoback() {
    dispatch(ACTIONS.setReview(false));
    dispatch(ACTIONS.setModalResultsOpen(true));
  }

  return (
    <div className="review">
      <h3>Review</h3>
      <div>
        <div className="review-type">
          <button
            className={`type-btn ${type === "all" ? "active" : null}`}
            name="all"
            onClick={handleType}
          >
            All
          </button>
          <button
            className={`type-btn ${type === "correct" ? "active" : null}`}
            name="correct"
            onClick={handleType}
          >
            Correct
          </button>
          <button
            className={`type-btn ${type === "incorrect" ? "active" : null}`}
            name="incorrect"
            onClick={handleType}
          >
            Incorrect
          </button>
        </div>
        <hr />
        <div className="review-question-container">
          {quizsOnType.map((quiz, index) => {
            if (!quiz) return null;

            const answer = quiz.answers[choose[index]]
              ? quiz.answers[choose[index]]
              : "No answer (Time out!)";
            let answerStyleClassName =
              quiz.answers[correctAnswers[index]] ===
              quiz.answers[choose[index]]
                ? "review-correct-answer"
                : "review-incorrect-answer";

            return (
              <div key={index} className="review-question">
                <h3 className="review-question-title">{quiz.question}</h3>
                <div>
                  Your answer:{" "}
                  <span className={answerStyleClassName}>{answer}</span>
                </div>
                <div>Correct answer: {quiz.correct}</div>
              </div>
            );
          })}
          {isAllIncorrect && (
            <h3 style={{ marginTop: "0" }}>Oopsie! No answer is correct</h3>
          )}
          {isAllCorrect && (
            <h3 style={{ marginTop: "0" }}>
              Congratulation! All answers are correct
            </h3>
          )}
        </div>
      </div>
      <hr />
      <button className="review-goback" onClick={handleGoback}>
        Go back
      </button>
    </div>
  );
}

export default Review;
