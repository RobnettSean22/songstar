import React, { Component } from "react";
import axios from "axios";
import { setUser } from "../../reducer/userReducer";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import "./Logout.scss";

class Logout extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  async logout() {
    const loggedOut = axios.delete("/auth/logout");
    this.props.setUser(loggedOut.data);
    this.props.history.push("/");
  }
  render() {
    return (
      <div className="out">
        <h1 onClick={e => this.logout()}>Logout</h1>
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
export default withRouter(
  connect(mapStateToProps, mapDispatchTopProps)(Logout)
);
