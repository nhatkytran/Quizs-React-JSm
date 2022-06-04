import { createContext, useContext, useReducer } from "react";
import useFetch from "../hooks/useFetch";
import reducer from "./reducer";

const AppContext = createContext();

const initState = {
  waiting: true,
  loading: false,
  error: { show: false, message: "" },
  quizs: [],
  timeout: 0,
  index: 0,
  correctAnswers: [],
  choose: [],
  fullAnswer: false,
  modalOpen: false,
  modalResultsOpen: false,
  review: false,
  generateData: {
    quantity: "10",
    category: "12",
    difficulty: "easy",
  },
};

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);
  const handleFetchAPI = useFetch(dispatch);
  const value = { ...state, handleFetchAPI, dispatch };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

function useGlobalContext() {
  return useContext(AppContext);
}

export { useGlobalContext };
export default AppProvider;
