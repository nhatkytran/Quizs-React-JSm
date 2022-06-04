import { useState } from "react";
import { useGlobalContext } from "../context";
import { ACTIONS } from "../context/reducer";

function Login() {
  const [email, setEmail] = useState("");
  const { dispatch } = useGlobalContext();

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!email) return;

    dispatch(ACTIONS.setLogin(false));
    dispatch(ACTIONS.setUserEmail(email));
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <form className="email-form">
          <label htmlFor="">Your Email</label>
          <input type="text" value={email} onChange={handleEmail} />
          <button
            type="submit"
            style={{ cursor: "pointer" }}
            onClick={handleSubmit}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
