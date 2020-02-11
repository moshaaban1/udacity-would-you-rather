import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { saveQuestionAnswerAsync } from "../../redux/questions/questions.actions";
import { updateCurrentUserAnswered } from "../../redux/user/user.actions";
import { selectQuestionsArrayAfterTransformation } from "../../redux/questions/questions.reselect";
import { selectCurrentUser, selectUsers } from "../../redux/user/user.reselect";

import AnswerQuestion from "../../components/answer-question/answer-question.component";
import QuestionResult from "../../components/question-result/question-result.component";

const QuestionPage = ({
   questions,
   match,
   currentUser,
   saveQuestion,
   users,
   updateCurrentUserAnswered
}) => {
   const [questionAnswered, setQuestionAnswered] = useState(false);
   const [value, setValue] = useState("optionOne");
   const [question, setQuestion] = useState(null);
   const questionId = match.params.questionId;

   useEffect(() => {
      const question = questions.filter(
         question => question.id === questionId
      )[0];
      const checkIfUserAnswerQuestion = () => {
         const currentUserAnswers = users[currentUser.id].answers;
         const questionState = currentUserAnswers[questionId] ? true : false;
         setQuestionAnswered(questionState);
      };
      setQuestion(question);
      checkIfUserAnswerQuestion();
   }, [questions, question, users, currentUser, questionId]);

   const handleChange = event => {
      setValue(event.target.value);
   };

   const handleSaveQuestion = () => {
      saveQuestion({
         authedUser: currentUser.id,
         qid: questionId,
         answer: value
      });
      updateCurrentUserAnswered({[questionId]: {answer: value}})
   };

   return (
      <>
         {question ? (
            questionAnswered ? (
               <QuestionResult {...question} />
            ) : (
               <AnswerQuestion
                  {...question}
                  saveQuestion={handleSaveQuestion}
                  changeEvent={handleChange}
                  value={value}
               />
            )
         ) : null}
      </>
   );
};

const mapStateToProps = createStructuredSelector({
   questions: selectQuestionsArrayAfterTransformation,
   currentUser: selectCurrentUser,
   users: selectUsers
});

const mapDispatchToProps = dispatch => ({
   saveQuestion: payload => dispatch(saveQuestionAnswerAsync(payload)),
   updateCurrentUserAnswered: payload => dispatch(updateCurrentUserAnswered(payload))
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(QuestionPage);
