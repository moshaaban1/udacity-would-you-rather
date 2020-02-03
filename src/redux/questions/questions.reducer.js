import types from "./questions.types";

const INITIAL_STATE = {
   questions: []
};

const questionsReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case types.GET_QUESTIONS:
         return {
            ...state,
            questions: action.payload
         };
      case types.SAVE_QUESTION_ANSWER:
         return {
            ...state
         };
      case types.CREATE_NEW_QUESTION:
         return {
            ...state
         };
      default:
         return state;
   }
};

export default questionsReducer;
