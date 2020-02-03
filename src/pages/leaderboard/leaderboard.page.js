import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectUsersScore } from "../../redux/user/user.reselect";

import UserScore from "../../components/user-score/user-score.component";

const LeaderboardPage = ({ usersScore }) => {
   return (
      <>
         {usersScore.map(userScore => (
            <UserScore
               key={userScore.id}
               {...userScore}
               headerLabel={userScore.name}
            >
               <div>
                  <div>Answered Questions {userScore.answers}</div>
                  <div>Created Questions {userScore.questions}</div>
               </div>
               <div>Score {userScore.totalScore}</div>
            </UserScore>
         ))}
      </>
   );
};

const mapStateToProps = createStructuredSelector({
   usersScore: selectUsersScore
});

export default connect(mapStateToProps)(LeaderboardPage);
