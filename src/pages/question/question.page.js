import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { saveQuestionAnswerAsync } from "../../redux/questions/questions.actions";
import { selectQuestionsArrayAfterTransformation } from "../../redux/questions/questions.reselect";
import { selectCurrentUser, selectUsers } from "../../redux/user/user.reselect";

import AnswerQuestion from "../../components/answer-question/answer-question.component";
import QuestionResult from "../../components/question-result/question-result.component";

const QuestionPage = ({
   questions,
   match,
   currentUser,
   saveQuestion,
   users
}) => {
   const [questionAnswered, setQuestionAnswered] = useState(false);
   const [value, setValue] = useState("optionOne");

   const questionId = match.params.questionId;
   const question = questions.filter(question => question.id === questionId)[0];

   useEffect(() => {
      checkIfUserAnswerQuestion();
   }, []);

   const handleChange = event => {
      setValue(event.target.value);
   };

   const checkIfUserAnswerQuestion = () => {
      const currentUserAnswers = users[currentUser.id].answers;
      const questionState = currentUserAnswers[questionId] ? true : false;
      setQuestionAnswered(questionState);
   };

   const handleSaveQuestion = () => {
      saveQuestion({
         authedUser: currentUser.id,
         qid: questionId,
         answer: value
      });
      setQuestionAnswered(true);
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
   saveQuestion: payload => dispatch(saveQuestionAnswerAsync(payload))
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(QuestionPage);
