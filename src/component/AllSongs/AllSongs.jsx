import React, { Component } from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import "./AllSongs.scss";
import star from "./song_starB.jpg";

class AllSongs extends Component {
  componentDidMount() {
    this.props.getAll();
  }

  render() {
    const mapSongs = this.props.songs.map((songs, index) => {
      return (
        <div className="song-list" key={songs.song_id}>
          <h1>{index}</h1>
          <h1>{songs.song_name}</h1>
          <h2>{songs.artist}</h2>
        </div>
      );
    });
    return (
      <div className="everthing-song_container">
        <Header />
        <div className="add-song-container">
          <Link to="/add_song/">+ Add song</Link>
        </div>
        <div className="image-n-song-container">
          <img src={star} alt="" />
          <div id="allsong-container">{mapSongs}</div>
        </div>
      </div>
    );
  }
}

export default withRouter(AllSongs);
