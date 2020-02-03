import { batch } from "react-redux";
import types from "./questions.types";
import { _getQuestions, _saveQuestionAnswer, _saveQuestion } from "../../_DATA";
import { getUsersAsync } from "../user/user.actions";

const getQuestions = payload => ({
   type: types.GET_QUESTIONS,
   payload
});

export const getQuestionsAsync = () => dispatch => {
   _getQuestions().then(res => {
      dispatch(getQuestions(res));
   });
};

const saveQuestionAnswer = payload => ({
   type: types.SAVE_QUESTION_ANSWER,
   payload
});

export const saveQuestionAnswerAsync = payload => dispatch => {
   _saveQuestionAnswer(payload).then(res => {
      batch(() => {
         dispatch(saveQuestionAnswer());
         dispatch(getQuestionsAsync());
         dispatch(getUsersAsync());
      });
   });
};

const createNewQuestion = payload => ({
   type: types.CREATE_NEW_QUESTION,
   payload
});

export const createNewQuestionAsync = payload => dispatch => {
   _saveQuestion(payload)
      .then(res => {
         dispatch(createNewQuestion());
      })
      .catch(error => {
         console.log(error);
      });
};
