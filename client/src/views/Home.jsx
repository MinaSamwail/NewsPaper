import React from "react";
import TableNews from "../components/TableNews";
import { Switch, Route } from "react-router-dom";
import Signup from "./Signup";

function Home() {
  return (
    <div>
      {/* <Switch> */}
      <h1>I AM home</h1>
      <TableNews />
      {/* <Route exact path="/signup" component={Signup} />
      </Switch> */}
    </div>
  );
}

export default Home;
