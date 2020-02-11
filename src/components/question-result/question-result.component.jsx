import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect"
import { useParams } from "react-router-dom"

import {getCurrentUserAnswered} from "../../redux/user/user.reselect"
import Question from "../question/question.component";
import {
   ProgressContainer,
   ProgressBar,
   OptionResult
} from "./question-result.styles";

const QuestionResult = props => {
   const { optionOne, optionTwo, userAnswered } = props;
   const questionId = useParams().questionId;
   const [votesCount, setVotesCount] = useState(0);
   const questionAnswer = userAnswered[questionId].answer

   useEffect(() => {
      console.log(questionAnswer)
      const calcQuestionVotes = () => {
         const votesCount = optionOne.votes.length + optionTwo.votes.length;
         setVotesCount(votesCount);
      };
      calcQuestionVotes();
      // eslint-disable-next-line
   }, [optionOne, optionTwo]);

   return (
      <Question {...props} headerLabel={"Asked by " + props.name}>
         <h3 style={{ marginTop: 0 }}>Results:</h3>
         <OptionResult current={questionAnswer === 'optionOne' ?  true : false} >
            <h4 style={{ margin: 0 }}>Would you rather {optionOne.text} ?</h4>
            <ProgressContainer>
               <ProgressBar
                  style={{
                     width: `${(optionOne.votes.length / votesCount) * 100}%`
                  }}
               />
            </ProgressContainer>
            <div>
               {optionOne.votes.length} out of {votesCount} votes
            </div>
         </OptionResult>
         <OptionResult current={questionAnswer === 'optionTwo' ? true  : false}>
            <h4 style={{ margin: 0 }}>Would you rather {optionTwo.text} ?</h4>
            <ProgressContainer>
               <ProgressBar
                  style={{
                     width: `${(optionTwo.votes.length / votesCount) * 100}%`
                  }}
               />
            </ProgressContainer>
            <div>
               {optionTwo.votes.length} out of {votesCount} votes
            </div>
         </OptionResult>
      </Question>
   );
};

const mapStateToProps = createStructuredSelector({
   userAnswered: getCurrentUserAnswered
})

export default connect(mapStateToProps)(QuestionResult);
