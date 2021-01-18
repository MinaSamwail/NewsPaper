import React from "react";
import TableNews from "../components/TableNews";
import { Switch, Route } from "react-router-dom";
import Signup from "./Signup";

function Home() {
  return (
    <div>
      <TableNews />
    </div>
  );
}

export default Home;
