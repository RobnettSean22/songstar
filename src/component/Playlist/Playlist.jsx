import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import solo from "./solo-play.jpg";
import "./Playlist.scss";
import Header from "../Header/Header";

import axios from "axios";

class Playlist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playSongs: []
    };
  }
  componentDidMount() {
    this.viewPlaylistSongs(
      +this.props.match.params.user_id,
      +this.props.match.params.playlist_id
    );
  }
  viewPlaylistSongs(user_id, playlist_id) {
    axios
      .get(`/api/playlist_songs/${user_id}/${playlist_id}`)
      .then(response => {
        this.setState({
          playSongs: response.data
        });
      });
  }
  clearSong(user_id, playlist_id, song_id) {
    axios
      .delete(`/api/deletef_play/${user_id}/${playlist_id}/${song_id}`)
      .then(response => {
        this.setState({
          playSongs: response.data
        });
      });
  }

  render() {
    const { playSongs } = this.state;

    const mapSongLink = playSongs.map(link => {
      const songs = this.props.linkSongs.filter(into => {
        return link.song_id === into.song_id;
      });
      const layout = songs.map(acplay => {
        console.log(acplay);
        return (
          <div className="new-entry" key={acplay.song_id}>
            <div>
              <h1>{acplay.song_name}</h1>
              <h3> Artist:{acplay.artist}</h3>
              <h4
                onClick={e =>
                  this.clearSong(
                    +this.props.match.params.user_id,
                    +this.props.match.params.playlist_id,
                    acplay.song_id
                  )
                }
              >
                Clear
              </h4>
            </div>
          </div>
        );
      });

      return layout;
    });

    return (
      <div id="box-held">
        <Header />
        <div id="second-box-held">
          <div id="for-songs-added">
            <div className="play-name">
              <h1>{this.props.location.state}</h1>
            </div>
            {mapSongLink}
          </div>
          <div id="for-image-link">
            <img src={solo} alt="" />
            <Link
              to={{
                pathname: `/add_to_play/${+this.props.match.params
                  .user_id}/${+this.props.match.params.playlist_id}`,
                state: mapSongLink
              }}
            >
              <h4>Add to Playlist</h4>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Playlist);
