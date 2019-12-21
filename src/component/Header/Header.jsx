import React, { Component } from "react";
import { setUser } from "../../reducer/userReducer";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <header>
          <div>
            <ul>
              <NavLink to={`/all_playlists/:user_id`}>
                <li>Playlistsrs</li>
              </NavLink>
            </ul>
          </div>
        </header>
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
export default connect(mapStateToProps, mapDispatchTopProps)(Header);
