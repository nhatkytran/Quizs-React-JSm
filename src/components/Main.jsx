import Timeout from "./Timeout";
import NumbersQuiz from "./NumbersQuiz";
import Quizs from "./Quizs";
import Submit from "./Submit";

function Main() {
  return (
    <div className="main">
      <h3>Get started! Have fun</h3>
      <Timeout />
      <hr className="main-hr" />
      <div className="main-body">
        <Quizs />
        <NumbersQuiz />
      </div>
      <hr className="main-hr" />
      <Submit />
    </div>
  );
}

export default Main;
