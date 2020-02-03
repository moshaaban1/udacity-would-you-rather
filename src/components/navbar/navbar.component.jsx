import React from "react";
import { connect } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "../../redux/user/user.reselect";
import { userLogin } from "../../redux/user/user.actions";

import {
   AppBar,
   Container,
   NavLogo,
   NavList,
   NavItem,
   NavMenu
} from "./navbar.styles";

const Navbar = props => {
   const { user, logout } = props;
   return (
      <AppBar>
         <Container>
            <NavLogo to="/">Would you rather</NavLogo>
            <NavList>
               {user ? (
                  <>
                     <NavItem to="/">Home</NavItem>
                     <NavItem to="/add">new question</NavItem>
                     <NavItem to="/leaderboard">leaderboard</NavItem>
                     <NavItem as="div" onClick={() => logout()}>
                        logout
                     </NavItem>
                     <NavMenu>
                        <div style={{ marginRight: "10px" }}>{user.name} </div>
                        <Avatar alt="Remy Sharp" src={user.avatarURL} />
                     </NavMenu>
                  </>
               ) : (
                  <NavItem to="/login">login</NavItem>
               )}
            </NavList>
         </Container>
      </AppBar>
   );
};

const mapStateToProps = createStructuredSelector({
   user: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
   logout: () => dispatch(userLogin())
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Navbar);
