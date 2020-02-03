import React from "react";

import {
   UserBox,
   UserInfo,
   UserInfoFlex,
   UserScore,
   UserImage
} from "./user-score.styles";

export default ({ name, avatarURL, answers, questions, totalScore }) => {
   return (
      <UserBox>
         <UserImage src={avatarURL} alt={name} />
         <UserInfo>
            <h3 style={{ margin: 0 }}>{name}</h3>
            <UserInfoFlex>
               <span>Answered Questions</span> <span>{answers}</span>
            </UserInfoFlex>
            <UserInfoFlex>
               <span>Created Questions</span> <span>{questions}</span>
            </UserInfoFlex>
         </UserInfo>
         <UserScore>
            Score:
            {totalScore}
         </UserScore>
      </UserBox>
   );
};
