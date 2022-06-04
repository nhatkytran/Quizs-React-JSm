import { useGlobalContext } from "../context";
import { ACTIONS } from "../context/reducer";

function Generate() {
  const { generateData, error, handleFetchAPI, dispatch } = useGlobalContext();

  function handleChange(event) {
    const newGenerateData = {
      ...generateData,
      [event.target.name]: event.target.value,
    };

    dispatch(ACTIONS.setGenerateData(newGenerateData));
  }

  function handleSubmit(event) {
    event.preventDefault();

    handleFetchAPI(
      generateData.quantity,
      generateData.category,
      generateData.difficulty
    );
  }

  return (
    <div className="generate">
      <h3>Set up you quizzes</h3>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="">Quantity</label>
          <input
            className="input-quantity"
            type="number"
            min="1"
            max="50"
            name="quantity"
            value={generateData.quantity}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Category</label>
          <select
            name="category"
            value={generateData.category}
            onChange={handleChange}
          >
            <option value="12">Music</option>
            <option value="18">Computer Science</option>
            <option value="21">Sports</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="">Difficulty</label>
          <select
            name="difficulty"
            value={generateData.difficulty}
            onChange={handleChange}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <button type="submit" className="generate-btn">
          Generate
        </button>
        {error.show && (
          <div className="non-generate">
            <p>Error: {error.message}</p>
          </div>
        )}
      </form>
    </div>
  );
}

export default Generate;
