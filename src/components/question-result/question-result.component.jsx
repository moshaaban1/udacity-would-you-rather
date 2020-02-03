import React, { useState, useEffect } from "react";

import Question from "../question/question.component";
import {
   ProgressContainer,
   ProgressBar,
   OptionResult
} from "./question-result.styles";

export default function QuestionResult(props) {
   const { optionOne, optionTwo } = props;
   const [votesCount, setVotesCount] = useState(0);

   useEffect(() => {
      calcQuestionVotes();
   }, []);

   const calcQuestionVotes = () => {
      const votesCount = optionOne.votes.length + optionTwo.votes.length;
      setVotesCount(votesCount);
   };

   return (
      <Question {...props} headerLabel={"Asked by " + props.name}>
         <h3 style={{ marginTop: 0 }}>Results:</h3>
         <OptionResult>
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
         <OptionResult>
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
}
