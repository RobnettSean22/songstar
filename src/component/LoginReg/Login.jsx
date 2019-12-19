import React, { Component } from "react";
import axios from "axios";
import "./Login.scss";
import { connect } from "react-redux";
import { setUser } from "../../reducer/userReducer";
import { Link } from "react-router-dom";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      register: false
    };
  }
  async login() {
    const { username, password } = this.state;
    const loggedInUser = await axios.post("/auth/login", {
      username,
      password
    });

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
    const { username, password } = this.state;
    return (
      <div className="login-content-container">
        <form
          className={this.state.register ? "hide" : "login-content"}
          onSubmit={e => {
            this.login();
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
          <Link to="/songs/">
            <button>Login</button>
          </Link>
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
          <Link to="/songs/">
            <button>Register</button>
          </Link>
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
export default connect(mapStateToProps, mapDispatchTopProps)(Login);
