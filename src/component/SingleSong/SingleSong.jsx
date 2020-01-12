import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import axios from "axios";

class SingleSong extends Component {
  constructor(props) {
    super(props);

    this.state = {
      song: []
    };
  }
  componentDidMount() {
    this.viewSingleSong(+this.props.match.params.song_id);
  }

  viewSingleSong(song_id) {
    axios.get(`/api/song/${song_id}`).then(response => {
      this.setState({
        song: response.data
      });
    });
  }

  render() {
    const { song } = this.state;
    const mapSong = song.map(songItem => {
      return (
        <div key={songItem.song_id}>
          <h1>{songItem.song_name}</h1>
          <h2>{songItem.artist}</h2>
          <h3>{songItem.albulm}</h3>
        </div>
      );
    });
    return (
      <div className="back">
        <div>{mapSong}</div>
      </div>
    );
  }
}

export default withRouter(SingleSong);
