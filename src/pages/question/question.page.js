import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectQuestionsArrayAfterTransformation } from "../../redux/questions/questions.reselect";
import { selectCurrentUser } from "../../redux/user/user.reselect";

import AnswerQuestion from "../../components/answer-question/answer-question.component";
import QuestionResult from "../../components/question-result/question-result.component";

const QuestionPage = ({ questions, match, currentUser }) => {
   const [questionAnswered, setQuestionAnswered] = useState(false);

   useEffect(() => {
      checkIfUserAnswerQuestion();
   }, []);

   const questionId = match.params.questionId;
   const question = questions.filter(question => question.id === questionId)[0];

   const checkIfUserAnswerQuestion = () => {
      const questionState = currentUser.answers[questionId] ? false : true;
      setQuestionAnswered(questionState);
   };

   return (
      <>
         {question ? (
            questionAnswered ? (
               <QuestionResult {...question} />
            ) : (
               <AnswerQuestion {...question} />
            )
         ) : null}
      </>
   );
};

const mapStateToProps = createStructuredSelector({
   questions: selectQuestionsArrayAfterTransformation,
   currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(QuestionPage);
