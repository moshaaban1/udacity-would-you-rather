import types from "./user.types";

const INITIAL_STATE = {
   currentUser: null,
   users: null,
   currentUserAnswered: {}
};

const userReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case types.USER_LOGIN:
         return {
            ...state,
            currentUser: action.payload
         };
      case types.GET_USERS:
         return {
            ...state,
            users: action.payload
         };
      case types.UPDATE_CURRENT_USER_ANSWERED: {
         return {
            ...state,
            currentUserAnswered: {
               ...state.currentUserAnswered,
               ...action.payload
            }
         }
      }
      default:
         return state;
   }
};

export default userReducer;
