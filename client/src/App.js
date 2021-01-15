import { Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import "./App.css";
import NavMain from "./components/NavMain";
import Dashboard from "./views/Dashboard";
import Article from "./views/Article";
import Signup from "./views/Signup";
import Signin from "./views/Signin";

function App() {
  return (
    <div className="App">
      <NavMain />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/article/:id" component={Article} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signin" component={Signin} />
      </Switch>
    </div>
  );
}

export default App;
