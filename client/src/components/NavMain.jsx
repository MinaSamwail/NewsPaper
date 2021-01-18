import React from "react";
import { NavLink } from "react-router-dom";
import apiHandler from "../api/apiHandler";
import withUser from "../components/Auth/withUser";
import "../styles/navmain.css";

function NavMain(props) {
  const { context } = props;
  function handleLogout() {
    apiHandler
      .logout()
      .then(() => {
        context.removeUser();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <nav className="NavMain">
      <NavLink exact to="/">
        <p>Home</p>
      </NavLink>
      <NavLink exact to="/dashboard">
        <p>Dashboard</p>
      </NavLink>
      <NavLink exact to="/signup">
        <p>Sign up</p>
      </NavLink>
      <NavLink exact to="/signin">
        <p>Log in</p>
      </NavLink>
      <NavLink exact to="/signin">
        <p onClick={handleLogout}>Log out</p>
      </NavLink>
    </nav>
  );
}

export default withUser(NavMain);
