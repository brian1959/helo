import React, { Component } from "react";
import "./Auth.css";
import axios from "axios";

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      husername: "",
      hpassword: ""
    };
  }

  evaluateUser() {
    let newUser = {
      husername: this.state.husername,
      hpassword: this.state.hpassword
    };
    console.log(newUser);
    axios
      .post("/api/user", newUser)
      .then(response => {
        console.log(response);
        this.props.history.push("/dashboard");
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    console.log(this.state);
    return (
      <div className="auth-container">
        <div className="input-box">
          <div className="auth-title">
            <span>HELO</span>
          </div>
          <div className="auth-input">
            <input
              placeholder="username"
              onChange={e => this.setState({ husername: e.target.value })}
              value={this.state.husername}
            />
            <input
              palceholder="password"
              onChange={e => this.setState({ hpassword: e.target.value })}
              value={this.state.hpassword}
            />
          </div>
        </div>
        <button
          className="auth-btn"
          onClick={() => {
            this.evaluateUser();
          }}
        >
          Login
        </button>
        <button
          className="auth-btn"
          onClick={() => {
            this.evaluateUser();
          }}
        >
          Register
        </button>
      </div>
    );
  }
}

export default Auth;
