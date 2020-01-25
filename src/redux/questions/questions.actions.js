import types from "./questions.types";
import { _getQuestions } from "../../_DATA";

const getQuestions = payload => ({
   type: types.GET_QUESTIONS,
   payload
});

export const getQuestionsAsync = () => dispatch => {
   _getQuestions().then(res => {
      dispatch(getQuestions(res));
   });
};
