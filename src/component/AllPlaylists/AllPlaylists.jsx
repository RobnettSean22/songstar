import React, { Component } from "react";
import { setUser } from "../../reducer/userReducer";
import { connect } from "react-redux";
import Logout from "../Logout/Logout";
import { withRouter } from "react-router-dom";
import dance from "../../Assests/dance_party.jpg";
import Header from "../Header/Header";
import "./AllPlaylists.scss";

import axios from "axios";

import { Link } from "react-router-dom";
class AllPlaylists extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allPlaylists: [],
      input: ""
    };
  }
  componentDidMount() {
    if (this.props.user.user) {
      this.viewPlaylist(this.props.user.user.user_id);
    } else {
      this.props.history.push("/");
    }
  }
  viewPlaylist = async user_id => {
    const response = await axios.get(`/api/playlists/${user_id}`);
    this.setState({
      allPlaylists: response.data
    });
  };
  newPlaylists(user_id, playlist_name) {
    axios.post(`/api/new_play/${user_id}`, { playlist_name }).then(response => {
      this.setState({
        allPlaylists: response.data,
        input: ""
      });
    });
  }
  clearPlaylist(user_id, playlist_id) {
    axios.delete(`/api/clear_play/${user_id}/${playlist_id}`).then(response => {
      this.setState({
        allPlaylists: response.data
      });
    });
  }
  render() {
    const { input, allPlaylists } = this.state;
    const { linkSongs } = this.props;
    console.log(linkSongs);
    const mapPlay = allPlaylists.map((playlists, index) => {
      return (
        <div className="play-play" key={playlists.playlist_id}>
          <Link
            to={{
              pathname: `/in_play/${+this.props.user.user.user_id}/${
                playlists.playlist_id
              }`,
              state: playlists.playlist_name
            }}
          >
            <h1>{playlists.playlist_name}</h1>
          </Link>

          <h2
            onClick={() =>
              this.clearPlaylist(
                this.props.user.user.user_id,
                playlists.playlist_id
              )
            }
          >
            X
          </h2>
        </div>
      );
    });

    return (
      <div id="play-contain">
        <Header />

        <div className="playlists">
          <div className="just-dance">
            {" "}
            <img src={dance} alt="" />
          </div>

          <div className="playlist-contain">
            <input
              placeholder="New Playlist"
              value={input}
              onChange={e => this.setState({ input: e.target.value })}
            />
            <button
              className="create"
              onClick={() =>
                this.newPlaylists(this.props.user.user.user_id, input)
              }
            >
              Create
            </button>
            {mapPlay}
          </div>
        </div>
        <Logout />
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
  connect(mapStateToProps, mapDispatchTopProps)(AllPlaylists)
);
