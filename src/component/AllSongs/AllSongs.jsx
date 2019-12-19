import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class AllSongs extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const mapSongs = this.props.songs.map((songs, index) => {
      return (
        <div classNam="song_list" key={index}>
          <h1>{songs.song_id}</h1>
          <h2>{songs.song_name}</h2>
          <h2>{songs.artist}</h2>
          <h2>{songs.albulm}</h2>
        </div>
      );
    });
    return (
      <div>
        <div className="add-song-container">
          <Link to="/add_song/">+ Add song</Link>
        </div>
        <div>{mapSongs}</div>
      </div>
    );
  }
}

export default withRouter(AllSongs);
