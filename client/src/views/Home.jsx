import React from "react";
import TableNews from "../components/TableNews";
import { Switch, Route } from "react-router-dom";
import Signup from "./Signup";

function Home() {
  return (
    <div>
      <h1>I AM home</h1>
      <TableNews />
    </div>
  );
}

export default Home;
