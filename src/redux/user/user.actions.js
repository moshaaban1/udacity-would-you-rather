import types from "./user.types";
import { _getUsers } from "../../_DATA";

export const userLogin = payload => ({
   type: types.USER_LOGIN,
   payload
});

const getUsers = payload => ({
   type: types.GET_USERS,
   payload
});

export const updateCurrentUserAnswered = payload => ({
   type: types.UPDATE_CURRENT_USER_ANSWERED,
   payload
});

export const getUsersAsync = () => dispatch => {
   _getUsers().then(res => {
      dispatch(getUsers(res));
   });
};
