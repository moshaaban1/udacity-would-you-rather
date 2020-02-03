import React from "react";

import {
   QuestionBox,
   QuestionHeader,
   QuestionContent,
   QuestionImage,
   ImageContainer,
   QuestionFlex
} from "./question.styles";

export default props => {
   const { headerLabel, name, avatarURL, children } = props;
   return (
      <QuestionBox>
         <QuestionHeader>{headerLabel}</QuestionHeader>
         <QuestionFlex>
            <ImageContainer>
               <QuestionImage src={avatarURL} alt={name} />
            </ImageContainer>
            <QuestionContent>{children}</QuestionContent>
         </QuestionFlex>
      </QuestionBox>
   );
};
