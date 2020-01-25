import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import questionsReducer from "./questions/questions.reducer";

const rootReducer = combineReducers({
   user: userReducer,
   questions: questionsReducer
});

export default rootReducer;
