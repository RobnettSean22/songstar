import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import "./AddToPlay.scss";
import Header from "../Header/Header";
import Logout from "../Logout/Logout";
import star from "./song_starB.jpg";
import axios from "axios";

class AddToPlay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toPlay: []
    };
  }
  songToPlaylist(user_id, playlist_id, song_id) {
    axios
      .post(`/api/to_play/${user_id}/${playlist_id}`, { song_id })
      .then(response => {
        this.setState({
          toPlay: response.data
        });
      });
  }
  render() {
    const mapToAdd = this.props.addSong.map((listem, index) => {
      return (
        <div key={listem.song_id} className="list-of-songs">
          <div id="inline">
            <h1>{index}.</h1>
          </div>
          <div>
            <h1>{listem.song_name}</h1>
            <h3>{listem.artist}</h3>
            <button
              onClick={() =>
                this.songToPlaylist(
                  +this.props.match.params.user_id,
                  +this.props.match.params.playlist_id,
                  listem.song_id
                )
              }
            ></button>
          </div>
        </div>
      );
    });
    return (
      <div className="container-for-all">
        <Header />
        <Link
          className=" back"
          to={`/in_play/${+this.props.match.params.user_id}/${+this.props.match
            .params.playlist_id}/`}
        >
          To Playlist
        </Link>
        <div className="contain-image-n-songs">
          <div id="ersong">{mapToAdd}</div>
          <img src={star} alt="" />
        </div>

        <Logout />
      </div>
    );
  }
}

export default withRouter(AddToPlay);
