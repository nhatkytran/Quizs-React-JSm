import { useGlobalContext } from "../context";
import { ACTIONS } from "../context/reducer";

const QUIZ_PER_ROW = 5;

function NumbersQuiz() {
  const { index: indexQuiz, quizs, choose, dispatch } = useGlobalContext();
  const rows = Math.ceil(quizs.length / QUIZ_PER_ROW);

  function handleIndex(index) {
    dispatch(ACTIONS.setIndex(index));
  }

  const numberJSX = Array.from({ length: rows }, (_, index) => {
    return (
      <div key={index}>
        {Array.from({ length: QUIZ_PER_ROW }, (_, innerIndex) => {
          const newIndex = innerIndex + index * QUIZ_PER_ROW;
          if (newIndex + 1 <= quizs.length)
            return (
              <button
                key={newIndex}
                className={`number ${
                  newIndex === indexQuiz ? "active" : null
                } ${choose[newIndex] !== null ? "choose" : null}`}
                onClick={handleIndex.bind(null, newIndex)}
              >
                {newIndex + 1}
              </button>
            );
          return undefined;
        })}
      </div>
    );
  });

  return (
    <div className="numbersQuiz">
      <h4>Total quizzes</h4>
      <hr />
      <div className="numbers">{numberJSX}</div>
    </div>
  );
}

export default NumbersQuiz;
