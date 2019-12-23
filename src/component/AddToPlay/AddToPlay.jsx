import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Playlist from "../Playlist/Playlist";
import axios from "axios";

class AddToPlay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toPlay: []
    };
  }
  songToPlaylist(user_id, song_id, playlist_id) {
    axios
      .post(`/api/to_play/${user_id}/${playlist_id}`, { song_id })
      .then(response => {
        this.setState({
          toPlay: response.data
        });
      });
  }
  render() {
    const { toPlay } = this.state;

    const mapToAdd = this.props.addSong.map(listem => {
      return (
        <div key={listem.song_id}>
          <h1>{listem.song_name}</h1>
          <button
            onClick={() =>
              this.songToPlaylist(
                +this.props.match.params.user_id,
                listem.song_id,
                +this.props.match.params.playlist_id
              )
            }
          ></button>
        </div>
      );
    });
    return (
      <div>
        <div>
          <Playlist />
        </div>
        {mapToAdd}
      </div>
    );
  }
}

export default withRouter(AddToPlay);
