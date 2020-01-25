import React from "react";

import {
   QuestionBox,
   QuestionHeader,
   QuestionContent,
   QuestionImage,
   ImageContainer,
   QuestionFlex
} from "./question.styles";

export default function Question(props) {
   const { name, avatar, children, answered } = props;
   return (
      <QuestionBox>
         <QuestionHeader>
            {name} {answered ? "asks" : "asked"}:
         </QuestionHeader>
         <QuestionFlex>
            <ImageContainer>
               <QuestionImage src={avatar} alt={name} />
            </ImageContainer>
            <QuestionContent>{children}</QuestionContent>
         </QuestionFlex>
      </QuestionBox>
   );
}
