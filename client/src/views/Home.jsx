import React from "react";
import TableNews from "../components/TableNews";
import { Switch, Route } from "react-router-dom";
import Signup from "./Signup";
import UserContext from "../components/Auth/UserContext";

class Home extends React.Component {
  static contextType = UserContext;

  render() {
    return (
      <div>
        <TableNews />
      </div>
    );
  }
}

export default Home;
