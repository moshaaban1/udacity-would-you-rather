import React from "react";

import Question from "../question/question.component";
import Button from "../button/button.component";

export default function QuestionResult(props) {
   return (
      <Question {...props} headerLabel={"Asked by " + props.name}>
         Hello World
      </Question>
   );
}
