import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import apiHandler from "./../../api/apiHandler";
import "./../../styles/forms.css";

class FormSignup extends Component {
  // static contectType = UserContext; To do when usercontext is done
  state = {};

  handleChange = (event) => {
    const value = event.target.value;
    const key = event.target.name;
    this.setState({ [key]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    apiHandler
      .signup(this.state)
      .then((data) => {
        this.context.setUser(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    // if (this.context.isLoggedIn) { //add when apihandler  and usercontext are done
    //   return <Redirect to="/" />;
    // }
    return (
      <section className="form-section">
        <header className="header">
          <h1>Welcome</h1>
        </header>
        <form
          autoComplete="off"
          className="form"
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        >
          <h2>Create your account</h2>
          <div className="form-group">
            <label htmlFor="fisrtName">First name</label>
            <input
              type="text"
              name="firstName"
              className="input"
              id="firstName"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last name</label>
            <input
              type="text"
              name="lastName"
              className="input"
              id="lastName"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" className="input" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              id="password"
            />
          </div>
          <button className="btn-submit">Register</button>
          <div>
            <p>Already have an account?</p>
            <Link to="/signin">Log in</Link>
          </div>
        </form>
      </section>
    );
  }
}
export default FormSignup;
