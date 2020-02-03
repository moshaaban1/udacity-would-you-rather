import React from "react";
import { useHistory } from "react-router-dom";

import Question from "../question/question.component";
import Button from "../button/button.component";

export default function QuestionPreview(props) {
   const history = useHistory();
   return (
      <Question {...props}>
         <h3>Would you rather ...</h3>
         <p>....{props.optionOne.text}.....</p>
         <Button
            outline
            full
            onClick={() => history.push(`questions/${props.id}`)}
         >
            View Poll
         </Button>
      </Question>
   );
}
