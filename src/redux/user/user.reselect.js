import { createSelector } from "reselect";

const selectUserReducer = state => state.user;

export const selectCurrentUser = createSelector(
   [selectUserReducer],
   user => user.currentUser
);

export const selectUsers = createSelector(
   [selectUserReducer],
   data => data.users
);

export const selectGetUsersToArray = createSelector(
   [selectUsers],
   users => (users ? Object.keys(users).map(user => users[user]) : null)
);

export const selectUsersScore = createSelector(
   [selectGetUsersToArray],
   users => {
      const usersScore = [];
      users.forEach(user => {
         const answers = Object.keys(user.answers).length;
         const questions = user.questions.length;
         const totalScore = answers + questions;
         usersScore.push({
            ...user,
            answers,
            questions,
            totalScore
         });
      });
      return usersScore;
   }
);
