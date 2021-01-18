import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import apiHandler from "./../../api/apiHandler";
import { withRouter } from "react-router-dom";
import { UserContext } from "../Auth/UserContext";
import "./../../styles/forms.css";

class FormSignin extends Component {
  static contextType = UserContext; //To add when user context is done

  state = {
    email: "",
    password: "",
  };

  handleChange = (event) => {
    const value = event.target.value;
    const key = event.target.name;
    this.setState({ [key]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    apiHandler
      .signin(this.state)
      .then((data) => {
        this.context.setUser(data);
        this.props.history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    // if (this.context.isLoggedIn) { //this.context.user ?
    //   return <Redirect to="/" />; // to do when context is done
    // }

    return (
      <section className="form-section">
        <header className="header">
          <h1>Welcome back</h1>
        </header>

        <form autoComplete="off" className="form" onSubmit={this.handleSubmit}>
          <h2>Login</h2>

          <div className="form-group">
            <label className="label" htmlFor="email">
              Email
            </label>
            <input
              onChange={this.handleChange}
              value={this.state.email}
              className="input"
              id="email"
              type="email"
              name="email"
            />
          </div>

          <div className="form-group">
            <label className="label" htmlFor="password">
              Password
            </label>
            <input
              onChange={this.handleChange}
              value={this.state.password}
              className="input"
              id="password"
              type="password"
              name="password"
            />
          </div>

          <button className="btn-submit">Let's go!</button>
        </form>

        <div className="form-section link">
          <p>Already have an account? </p>
          <Link to="/signup">Register</Link>
        </div>
      </section>
    );
  }
}

export default withRouter(FormSignin);
