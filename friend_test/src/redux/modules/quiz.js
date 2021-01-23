const GET_QUIZ = "quiz/GET_QUIZ";
const ADD_ANSWER = "quiz/ADD_ANSWER";
const RESET_ANSWER = "quiz/RESET_ANSWER";

const initialState = {
  name: "뚱이",
  page: "message",
  score_texts: {
    60: "우린 친구! 앞으로도 더 친하게 지내요! :)",
    80: "우와! 우리는 엄청 가까운 사이!",
    100: "둘도 없는 단짝이에요! :)",
  },
  answers: [],
  list: [
    {
      question: "뚱이는 불가사리다",
      answer: "O",
    },
    {
      question: "뚱이는 친구가 없다",
      answer: "X",
    },
    {
      question: "뚱이는 돌 아래에서 산다",
      answer: "O",
    },
    {
      question: "뚱이는 귀엽다",
      answer: "O",
    },
  ],
};

export const getQuiz = (quiz_list) => {
  return { type: GET_QUIZ, quiz_list };
};

export const addAnswer = (answer) => {
  return { type: ADD_ANSWER, answer };
};

export const resetAnswer = () => {
  return { type: RESET_ANSWER };
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "quiz/GET_QUIZ": {
      return {
        ...state,
        quiz: action.quiz_list,
      };
    }

    case "quiz/ADD_ANSWER": {
      return {
        ...state,
        answers: [...state.answers, action.answer],
      };
    }

    case "quiz/RESET_QUIZ": {
      return { ...state, answers: [] };
    }
    default:
      return state;
  }
}
