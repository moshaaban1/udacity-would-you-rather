import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Avatar, RadioGroup, Radio, FormControlLabel } from "@material-ui/core";

import { userLogin, getUsersAsync } from "../../redux/user/user.actions";
import {
   selectGetUsersToArray,
   selectUsers
} from "../../redux/user/user.reselect";

const LoginPage = ({ userLogin, users, getUsers, usersObject }) => {
   const [user, setUser] = useState(null);

   useEffect(() => {
      getUsers();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   const handleChange = e => {
      const value = e.target.value;
      setUser(usersObject[value]);
   };

   const handleSubmit = () => {
      userLogin(user);
   };

   return (
      <div>
         {users ? (
            <RadioGroup name="users" onChange={handleChange}>
               {users.map(user => (
                  <FormControlLabel
                     key={user.id}
                     value={user.id}
                     control={<Radio />}
                     label={
                        <>
                           <Avatar src={user.avatarURL} alt={user.name} />
                           {user.name}
                        </>
                     }
                  />
               ))}
            </RadioGroup>
         ) : null}
         <button onClick={handleSubmit}>Submit</button>
      </div>
   );
};

const mapDispatchToProps = dispatch => ({
   userLogin: payload => dispatch(userLogin(payload)),
   getUsers: () => dispatch(getUsersAsync())
});

const mapStateToProps = createStructuredSelector({
   users: selectGetUsersToArray,
   usersObject: selectUsers
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(LoginPage);
