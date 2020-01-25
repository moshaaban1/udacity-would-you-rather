import React from "react";

import Question from "../question/question.component";
import Button from "../button/button.component";

export default function QuestionResult(props) {
   return (
      <Question {...props} answered={false}>
         Hello World
      </Question>
   );
}
