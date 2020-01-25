import React from "react";

import Question from "../question/question.component";
import Button from "../button/button.component";

import { RadioGroup, Radio, FormControlLabel } from "@material-ui/core";

export default function AnswerQuestion(props) {
   const { optionOne, optionTwo } = props;
   return (
      <Question {...props} answered={true}>
         <h3>Would you rather ...</h3>
         <RadioGroup
            name="questions"
            // value={value}
            // onChange={handleChange}
         >
            <FormControlLabel
               value={optionOne.text}
               control={<Radio />}
               label={optionOne.text}
            />
            <FormControlLabel
               value={optionTwo.text}
               control={<Radio />}
               label={optionTwo.text}
            />
         </RadioGroup>
         <Button outline full>
            Submit
         </Button>
      </Question>
   );
}
