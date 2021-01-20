import React from "react";
import { Redirect, Route } from "react-router-dom";
import UserContext from "./Auth/UserContext";

function ProtectedRoute({ component: Component, render, ...rest }) {
  return (
    <UserContext.Consumer>
      {(context) => {
        if (context.isLoading) {
          return <div>Loading...</div>;
        }
        if (context.isLoggedIn) {
          return (
            <React.Fragment>
              {render && <Route {...rest} render={render} />}
              {!render && <Route {...rest} component={Component} />}
            </React.Fragment>
          );
        } else {
          return <Redirect to="/signin" />;
        }
      }}
    </UserContext.Consumer>
  );
}
export default ProtectedRoute;
