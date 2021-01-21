import React from "react";
import { NavLink } from "react-router-dom";
import apiHandler from "../api/apiHandler";
import withUser from "../components/Auth/withUser";
import "../styles/navmain1.css";
import { withRouter } from "react-router-dom";

const NavMain = (props) => {
  // console.log(props);
  const { context } = props;

  const handleLogout = () => {
    apiHandler
      .logout()
      .then(() => {
        context.removeUser();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <nav className="NavMain">
      <NavLink exact to="/">
        <h1 className="logo">24h Chrono</h1>
      </NavLink>

      {context.isLoggedIn && (
        <React.Fragment>
          <NavLink exact to="/dashboard">
            <p>Dashboard</p>
            {/* {context.user && context.user.firstname} */}
          </NavLink>
        </React.Fragment>
      )}
      {!context.isLoggedIn && (
        <React.Fragment>
          <NavLink exact to="/signup">
            <p>Sign up</p>
          </NavLink>
          <NavLink exact to="/signin">
            <p>Log in</p>
          </NavLink>
        </React.Fragment>
      )}
      {context.isLoggedIn && (
        <React.Fragment>
          <NavLink exact to="/signin">
            <p onClick={handleLogout}>Log out</p>
          </NavLink>
        </React.Fragment>
      )}
    </nav>
  );
};

export default withUser(NavMain);
