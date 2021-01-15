import React from "react";
import { NavLink } from "react-router-dom";

function NavMain() {
  return (
    <nav>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/dashboard">
        Dashboard
      </NavLink>
      <NavLink exact to="/signup">
        Sign up
      </NavLink>
      <NavLink exact to="/signin">
        Log in
      </NavLink>
    </nav>
  );
}

export default NavMain;
