import { useGlobalContext } from "../context";
import { ACTIONS } from "../context/reducer";

function Pagination() {
  const { index, quizs, dispatch } = useGlobalContext();

  function handlePagination(side) {
    let newIndex;

    if (side === "prev") {
      newIndex = index - 1;
      if (newIndex < 0) newIndex = quizs.length - 1;
    }
    if (side === "next") {
      newIndex = index + 1;
      if (newIndex > quizs.length - 1) newIndex = 0;
    }
    dispatch(ACTIONS.setIndex(newIndex));
  }

  return (
    <div className="quizs-pagination">
      <div onClick={handlePagination.bind(null, "prev")}>{"< Prev"}</div>
      <div onClick={handlePagination.bind(null, "next")}>{"Next >"}</div>
    </div>
  );
}

export default Pagination;
