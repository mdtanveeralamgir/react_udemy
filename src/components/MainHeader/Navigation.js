import React from "react";

import classes from "./Navigation.module.css";
import AuthContext from "../Context/auth-context";

const Navigation = (props) => {
  return (
    <AuthContext.Consumer>
      {/* This ctx param is passing the object available in authcontext
       * so in order to use ctx we need to put all jsx code inside that function
       */}
      {(ctx) => {
        return (
          <nav className={classes.nav}>
            <ul>
              {ctx.isLoggedIn && (
                <li>
                  <a href="/">Users</a>
                </li>
              )}
              {ctx.isLoggedIn && (
                <li>
                  <a href="/">Admin</a>
                </li>
              )}
              {ctx.isLoggedIn && (
                <li>
                  <button onClick={props.onLogout}>Logout</button>
                </li>
              )}
            </ul>
          </nav>
        );
      }}
    </AuthContext.Consumer>
  );
};

export default Navigation;
