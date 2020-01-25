import React from "react";
import {
   BrowserRouter as Router,
   Route,
   Redirect,
   Switch
} from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

import { connect } from "react-redux";

import theme from "./theme";

import routes from "../routes";
import DefaultLayout from "../layouts/default";

const App = ({ user }) => (
   <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
         <DefaultLayout>
            <Switch>
               {routes.map(route =>
                  route.auth ? (
                     <Route
                        path={route.path}
                        key={route.name}
                        exact
                        render={() =>
                           user ? (
                              <Route {...route} key={route.name} />
                           ) : (
                              <Redirect to="/login" />
                           )
                        }
                     />
                  ) : (
                     <Route
                        path={route.path}
                        key={route.name}
                        render={() =>
                           user ? (
                              <Redirect to="/" />
                           ) : (
                              <Route {...route} key={route.name} />
                           )
                        }
                     />
                  )
               )}
            </Switch>
         </DefaultLayout>
      </Router>
   </ThemeProvider>
);

const mapStateToProps = state => ({
   user: state.user.currentUser
});

export default connect(mapStateToProps)(App);
