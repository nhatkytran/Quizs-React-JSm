import { useGlobalContext } from "../context";
import { ACTIONS } from "../context/reducer";

function Answers({ answers }) {
  const { index: indexQuiz, choose, dispatch } = useGlobalContext();

  function handleAnswer(indexQuiz, indexChoose) {
    dispatch(ACTIONS.setChoose({ indexQuiz, indexChoose }));
  }

  return (
    <div className="answers">
      {answers.map((answer, index) => {
        return (
          <div key={index} className="answer-group">
            <input
              type="radio"
              id={`answer-${index}`}
              className="answer"
              name="answer"
              value={answer}
              checked={choose[indexQuiz] === index ? true : false}
              onChange={handleAnswer.bind(null, indexQuiz, index)}
            />
            <label htmlFor={`answer-${index}`} className="answer-label">
              {answer}
            </label>
          </div>
        );
      })}
    </div>
  );
}

export default Answers;
