const TYPES = {
  waiting: "SET_WAITING",
  loading: "SET_LOADING",
  error: "SET_ERROR",
  quizs: "SET_QUIZS",
  timeout: "SET_TIMEOUT",
  index: "SET_INDEX",
  correctAnswers: "SET_CORRECT_ANSWERS",
  initialChoose: "SET_INITIAL_CHOOSE",
  choose: "SET_CHOOSE",
  fullAnswer: "SET_FULL_ANSWER",
  modalOpen: "MODAL_OPEN",
  modalResultsOpen: "MODAL_RESULTS_OPEN",
  review: "SET_REVIEW",
  generateData: "SET_GENERATE_DATA",
};

const ACTIONS = {
  setWaiting(payload) {
    return { type: TYPES.waiting, payload };
  },
  setLoading(payload) {
    return { type: TYPES.loading, payload };
  },
  setError(payload) {
    return { type: TYPES.error, payload };
  },
  setQuizs(payload) {
    return { type: TYPES.quizs, payload };
  },
  setTimeout(payload) {
    return { type: TYPES.timeout, payload };
  },
  setIndex(payload) {
    return { type: TYPES.index, payload };
  },
  setCorrectAnswers(payload) {
    return { type: TYPES.correctAnswers, payload };
  },
  setInitialChoose(payload) {
    return { type: TYPES.initialChoose, payload };
  },
  setChoose(payload) {
    return { type: TYPES.choose, payload };
  },
  setFullAnswer(payload) {
    return { type: TYPES.fullAnswer, payload };
  },
  setModalOpen(payload) {
    return { type: TYPES.modalOpen, payload };
  },
  setModalResultsOpen(payload) {
    return { type: TYPES.modalResultsOpen, payload };
  },
  setReview(payload) {
    return { type: TYPES.review, payload };
  },
  setGenerateData(payload) {
    return { type: TYPES.generateData, payload };
  },
};

function reducer(state, action) {
  switch (action.type) {
    case TYPES.waiting:
      return { ...state, waiting: action.payload };
    case TYPES.loading:
      return { ...state, loading: action.payload };
    case TYPES.error:
      return { ...state, error: action.payload };
    case TYPES.quizs:
      return { ...state, quizs: action.payload };
    case TYPES.timeout:
      return { ...state, timeout: action.payload };
    case TYPES.index:
      return { ...state, index: action.payload };
    case TYPES.correctAnswers:
      return { ...state, correctAnswers: action.payload };
    case TYPES.initialChoose:
      return { ...state, choose: action.payload };
    case TYPES.choose:
      return {
        ...state,
        choose: state.choose.map((item, index) => {
          if (index === action.payload.indexQuiz)
            return action.payload.indexChoose;
          return item;
        }),
        fullAnswer: state.choose.every((item, index) => {
          if (index === action.payload.indexQuiz) return true;
          return item !== null;
        }),
      };
    case TYPES.fullAnswer:
      return { ...state, fullAnswer: action.payload };
    case TYPES.modalOpen:
      return { ...state, modalOpen: action.payload };
    case TYPES.modalResultsOpen:
      return { ...state, modalResultsOpen: action.payload };
    case TYPES.review:
      return { ...state, review: action.payload };
    case TYPES.generateData:
      return { ...state, generateData: action.payload };
    default:
      throw new Error("Invalid action!");
  }
}

export { ACTIONS };
export default reducer;
