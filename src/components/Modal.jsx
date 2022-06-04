import { useGlobalContext } from "../context";
import { ACTIONS } from "../context/reducer";

function Modal() {
  const { fullAnswer, dispatch } = useGlobalContext();

  function handleModalClose() {
    dispatch(ACTIONS.setModalOpen(false));
  }

  function handlePropagation(event) {
    event.stopPropagation();
  }

  function handleModalResultsOpen() {
    dispatch(ACTIONS.setModalResultsOpen(true));
    dispatch(ACTIONS.setModalOpen(false));
  }

  if (!fullAnswer)
    return (
      <div className="modal-overlay" onClick={handleModalClose}>
        <div className="modal" onClick={handlePropagation}>
          <h3 style={{ marginTop: "0" }}>Submit</h3>
          <div style={{ marginBottom: "20px" }}>
            Oopsie! Empty answer!
            <div>Fill in all the answers to submit</div>
          </div>
          <div>
            <button onClick={handleModalClose}>Go back</button>
          </div>
          <div className="modal-close" onClick={handleModalClose}>
            X
          </div>
        </div>
      </div>
    );

  return (
    <div className="modal-overlay" onClick={handleModalClose}>
      <div className="modal" onClick={handlePropagation}>
        <h3 style={{ marginTop: "0" }}>Submit</h3>
        <div style={{ marginBottom: "20px" }}>Want to submit?</div>
        <div className="yesNo">
          <button onClick={handleModalClose}>No</button>
          <button onClick={handleModalResultsOpen}>Yes</button>
        </div>
        <div className="modal-close" onClick={handleModalClose}>
          X
        </div>
      </div>
    </div>
  );
}

export default Modal;
