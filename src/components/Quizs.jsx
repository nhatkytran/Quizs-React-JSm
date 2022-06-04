import { useGlobalContext } from "../context";
import Answers from "./Answers";
import Pagination from "./Pagination";

function Quizs() {
  const { quizs, index } = useGlobalContext();
  const quiz = quizs[index];

  return (
    <div className="quizs">
      <h4 className="quiz-title">{quiz.question}</h4>
      <hr className="main-hr" />
      <Answers answers={quiz.answers} />
      <hr style={{ margin: "0" }} />
      <Pagination />
    </div>
  );
}

export default Quizs;
