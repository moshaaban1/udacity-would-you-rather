import { createSelector } from "reselect";

import { selectUsers } from "../user/user.reselect";

const selectQuestionsReducer = state => state.questions;

export const selectQuestions = createSelector(
   [selectQuestionsReducer],
   data => data.questions
);

export const selectQuestionsToArray = createSelector(
   [selectQuestions],
   questions =>
      questions
         ? Object.keys(questions).map(question => questions[question])
         : null
);

const addAvatarAndUserNameToQuestions = createSelector(
   [selectQuestionsToArray, selectUsers],
   (questions, users) =>
      questions.map(question => ({
         ...question,
         name: users[question.author].name,
         avatarURL: users[question.author].avatarURL
      }))
);

export const selectQuestionsArrayAfterTransformation = createSelector(
   [addAvatarAndUserNameToQuestions],
   questions => questions
);

export const selectUserQuestions = userName =>
   createSelector(
      [addAvatarAndUserNameToQuestions],
      questions => {
         const unansweredQuestions = [];
         const answeredQuestions = [];
         questions.forEach(question => {
            if (
               question.optionOne.votes.includes(userName) ||
               question.optionTwo.votes.includes(userName)
            ) {
               answeredQuestions.push(question);
            } else {
               unansweredQuestions.push(question);
            }
         });
         return { unansweredQuestions, answeredQuestions };
      }
   );
