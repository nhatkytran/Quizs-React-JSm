import "./App.css";
import { useGlobalContext } from "./context";
import Login from "./components/Login";
import Generate from "./components/Generate";
import Main from "./components/Main";
import Loading from "./components/Loading";
import Review from "./components/Review";

function App() {
  const { login, waiting, loading, review } = useGlobalContext();

  return (
    <div className="App">
      <h1>Quiz</h1>
      {login && <Login />}
      {waiting && !review && <Generate />}
      {!waiting && loading && !review && <Loading />}
      {!waiting && !loading && !review && <Main />}
      {review && <Review />}
    </div>
  );
}

export default App;
