import React from "react";

import Question from "../question/question.component";
import Button from "../button/button.component";

import { RadioGroup, Radio, FormControlLabel } from "@material-ui/core";

export default props => {
   const { optionOne, optionTwo } = props;

   return (
      <Question {...props} headerLabel={props.name + " asks"}>
         <h3>Would you rather ...</h3>
         <RadioGroup
            name="questions"
            onChange={props.changeEvent}
            value={props.value}
         >
            <FormControlLabel
               value="optionOne"
               control={<Radio />}
               label={optionOne.text}
            />
            <FormControlLabel
               value="optionTwo"
               control={<Radio />}
               label={optionTwo.text}
            />
         </RadioGroup>
         <Button outline full onClick={props.saveQuestion}>
            Submit
         </Button>
      </Question>
   );
};
