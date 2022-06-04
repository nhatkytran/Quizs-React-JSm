import { useState, useEffect } from "react";
import { useGlobalContext } from "../context";
import { ACTIONS } from "../context/reducer";

function Timeout() {
  const { timeout, dispatch } = useGlobalContext();
  const [time, setTime] = useState(timeout);
  const minute = String(Math.floor(time / 60)).padStart(2, 0);
  const second = String(time % 60).padStart(2, 0);

  useEffect(() => {
    if (time === 0) {
      dispatch(ACTIONS.setModalResultsOpen(true));
    }
  }, [time, dispatch]);

  useEffect(() => {
    const timeID = setInterval(() => {
      setTime((prevState) => {
        if (prevState === 1) {
          clearInterval(timeID);
        }

        return prevState - 1;
      });
    }, 1000);

    return () => clearInterval(timeID);
  }, [dispatch]);

  return (
    <div>
      <h4>
        Time out: {minute}:{second}
      </h4>
    </div>
  );
}

export default Timeout;
