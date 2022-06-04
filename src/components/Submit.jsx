import { useGlobalContext } from "../context";
import { ACTIONS } from "../context/reducer";
import Modal from "./Modal";
import ModalResults from "./ModalResults";

function Submit() {
  const { modalOpen, modalResultsOpen, dispatch } = useGlobalContext();

  function handleSubmit() {
    dispatch(ACTIONS.setModalOpen(true));
  }

  return (
    <>
      <div className="commit">
        <h4 className="submit" onClick={handleSubmit}>
          Submit
        </h4>
      </div>
      {modalOpen && <Modal></Modal>}
      {modalResultsOpen && <ModalResults />}
    </>
  );
}

export default Submit;
