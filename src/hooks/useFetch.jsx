import { useCallback } from "react";
import axios from "axios";
import authFetch from "../axios/authFetch";
import { ACTIONS } from "../context/reducer";

function useFetch(dispatch) {
  function decoding(text) {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = text;

    return textArea.value;
  }

  const fetchAPI = useCallback(
    async (quantity, category, difficulty) => {
      try {
        dispatch(ACTIONS.setWaiting(false));
        dispatch(ACTIONS.setLoading(true));
        dispatch(ACTIONS.setError({ show: false, message: "" }));

        const response = await authFetch(
          `?amount=${quantity}&category=${category}&difficulty=${difficulty}&type=multiple`
        );
        const { data } = response;

        if (data.response_code !== 0)
          throw new Error(
            "Something went wrong! Please try again or choose another options"
          );

        const quizs = data.results.map((quiz) => {
          const {
            question,
            correct_answer: correct,
            incorrect_answers: incorrect,
          } = quiz;
          let answers = incorrect.concat(correct);

          return {
            question: decoding(question),
            correct: decoding(correct),
            answers: answers.map((item) => decoding(item)),
          };
        });
        quizs.forEach((quiz) => {
          quiz.answers.sort(() => Math.random() - 0.5);
        });

        const timeout = quizs.length * 60;
        const correctAnswers = quizs.map((quiz) => {
          return quiz.answers.indexOf(quiz.correct);
        });

        dispatch(ACTIONS.setQuizs(quizs));
        dispatch(ACTIONS.setTimeout(timeout));
        dispatch(
          ACTIONS.setInitialChoose(
            Array.from({ length: quizs.length }, () => null)
          )
        );
        dispatch(ACTIONS.setCorrectAnswers(correctAnswers));
      } catch (error) {
        if (axios.isCancel(error)) return;

        console.error("Something went wrong!");
        console.log(error.message);

        dispatch(ACTIONS.setWaiting(true));
        dispatch(ACTIONS.setError({ show: true, message: error.message }));
      } finally {
        dispatch(ACTIONS.setLoading(false));
      }
    },
    [dispatch]
  );

  return fetchAPI;
}

export default useFetch;
