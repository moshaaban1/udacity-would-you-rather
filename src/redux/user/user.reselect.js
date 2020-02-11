import { createSelector } from "reselect";

const selectUserReducer = state => state.user;

export const selectCurrentUser = createSelector(
   [selectUserReducer],
   user => user.currentUser
);

export const getCurrentUserAnswered = createSelector(
   [selectUserReducer],
   user => user.currentUserAnswered
)

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
         const userObject = {
            ...user,
            answers,
            questions,
            totalScore
         };
         usersScore.push(userObject);
      });
      const sortUsersScore = usersScore.sort((a, b) =>
         a.totalScore < b.totalScore ? 1 : -1
      );
      return sortUsersScore;
   }
);
