import React, { Component } from "react";
import axios from "axios";

class AddToPlay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toPlay: []
    };
  }
  songToPlaylist(user_id, playlist_id) {
    axios.get(`/api/${user_id}/${playlist_id}`).then(response => {
      this.setState({});
    });
  }
  render() {
    const mapToAdd = this.props.addSong.map(listem => {
      return (
        <div key={listem.song_id}>
          <h1>{listem.cong_name}</h1>
        </div>
      );
    });
    return <div>{mapToAdd}</div>;
  }
}

export default AddToPlay;
