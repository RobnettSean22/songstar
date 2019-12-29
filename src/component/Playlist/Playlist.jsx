import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";

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
          <div key={acplay.song_id}>
            {acplay.song_name}
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
        );
      });

      return layout;
    });

    return (
      <div>
        <Link
          to={{
            pathname: `/add_to_play/${+this.props.match.params.user_id}/${+this
              .props.match.params.playlist_id}`,
            state: mapSongLink
          }}
        >
          <h1>Add to Playlist</h1>
        </Link>
        {mapSongLink}
      </div>
    );
  }
}

export default withRouter(Playlist);
