import React from "react";
import { Navlink } from "react-dom";
import { setUser } from "../../reducer/userReducer";
import { connect } from "react-redux";
function Nav(props) {
  console.log(props);
  return <div></div>;
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchTopProps = {
  setUser
};
export default connect(mapStateToProps, mapDispatchTopProps)(Nav);
