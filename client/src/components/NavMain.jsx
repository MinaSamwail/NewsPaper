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
    </nav>
  );
}

export default NavMain;
