import React, { Component } from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import Logout from "../Logout/Logout";
import "./AllSongs.scss";
import star from "./song_starB.jpg";

class AllSongs extends Component {
  componentDidMount() {
    this.props.getAll();
  }

  render() {
    const mapSongs = this.props.songs.map((songs, index) => {
      return (
        <div key={songs.song_id} className="song-list">
          <div id="ordered">
            <h1>{index}.</h1>
          </div>
          <div>
            <h1>{songs.song_name}</h1>
            <h3>{songs.artist}</h3>
          </div>
        </div>
      );
    });
    return (
      <div className="everything-song-container">
        <Header />

        <Link className=" add-link" to="/add_song/">
          + Add song
        </Link>

        <div className="image-n-song-container">
          <div id="allsong-container">{mapSongs}</div>
          <img src={star} alt="" />
        </div>
        <Logout />
      </div>
    );
  }
}

export default withRouter(AllSongs);
