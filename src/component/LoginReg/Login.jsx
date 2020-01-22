import React, { Component } from "react";
import axios from "axios";
import star from "./star.png";
import "./Login.scss";

import { connect } from "react-redux";
import { setUser } from "../../reducer/userReducer";
import { Link, withRouter } from "react-router-dom";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      register: false
    };
    this.login = this.login.bind(this);
  }
  async login() {
    const { username, password } = this.state;
    const loggedInUser = await axios.post("/auth/login", {
      username,
      password
    });
    console.log(6626, loggedInUser.data);
    this.props.setUser(loggedInUser.data);
    this.props.history.push("/songs/");
  }
  async register() {
    const { username, password } = this.state;
    const registerUser = await axios.post("/auth/register", {
      username,
      password
    });

    this.props.setUser(registerUser.data);
    this.props.history.push("/songs/");
  }
  toRegister() {
    this.setState({
      register: true
    });
  }
  registered() {
    this.setState({
      register: false
    });
  }
  render() {
    console.log(setUser);
    const { username, password } = this.state;
    return (
      <div className="login-content-container">
        <div id="headline">
          <h1>
            SongSt
            <span>
              <img src={star} alt="" />
            </span>{" "}
            r
          </h1>
        </div>
        <form
          className={this.state.register ? "hide" : "login-content"}
          onSubmit={this.login}
        >
          <input
            placeholder="username"
            value={username}
            onChange={e => this.setState({ username: e.target.value })}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={e => this.setState({ password: e.target.value })}
          />
          <button>Login</button>
          <h3 onClick={e => this.toRegister()}>Register</h3>
        </form>
        <form
          className={this.state.register ? "register-content" : "hide"}
          onSubmit={e => {
            this.register();
          }}
        >
          <input
            placeholder="username"
            value={username}
            onChange={e => this.setState({ username: e.target.value })}
          />
          <input
            placeholder="password"
            value={password}
            onChange={e => this.setState({ password: e.target.value })}
          />

          <button>Register</button>

          <h3 onClick={e => this.registered()}>Account Holder!</h3>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return state;
};

const mapDispatchTopProps = {
  setUser
};
export default withRouter(connect(mapStateToProps, mapDispatchTopProps)(Login));
