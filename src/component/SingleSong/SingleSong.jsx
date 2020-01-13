import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Header from "../Header/Header";
import Logout from "../Logout/Logout";
import note from "./musicnote.jpg";
import "./SingleSong.scss";

import axios from "axios";

class SingleSong extends Component {
  constructor(props) {
    super(props);

    this.state = {
      song: [],
      songInput: "",
      aritistInput: "",
      albulmInput: "",

      modual: false
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
  editSong(song_id, song_name, artist, albulm) {
    axios
      .put(`/api/update_song/${song_id}`, { song_name, artist, albulm })
      .then(response => {
        this.setState({
          song: response.data,
          songInput: "",
          aritistInput: "",
          albulmInput: ""
        });
      });
  }

  render() {
    const { song, songInput, aritistInput, albulmInput } = this.state;
    const mapSong = song.map(songItem => {
      return (
        <div className="single-songs " key={songItem.song_id}>
          <h1>{songItem.song_name}</h1>
          <h2>{songItem.artist}</h2>
          <h3>{songItem.albulm}</h3>
        </div>
      );
    });

    return (
      <div className="back">
        <Header />

        <h2>edit song</h2>
        <div className={this.modual ? "shadow" : "none"}>
          <div className={this.modual ? "in" : "outs"}>
            <div id="pic">
              <img src={note} alt="" />
            </div>
            <div id="form-cont">
              <label>Re-write</label>
              <form>
                <input
                  placeholder={song.song_name}
                  value={songInput}
                  onChange={e => this.setState({ songInput: e.target.value })}
                />
                <input
                  placeholder={song.artist}
                  value={aritistInput}
                  onChange={e =>
                    this.setState({ aritistInput: e.target.value })
                  }
                />
                <input
                  placeholder={song.albulm}
                  value={albulmInput}
                  onChange={e => this.setState({ albulmInput: e.target.value })}
                />
                <div className="exit">
                  <button
                    onClick={e =>
                      this.editSong(
                        +this.props.match.params.song_id,
                        songInput,
                        aritistInput,
                        albulmInput
                      )
                    }
                  >
                    re-write
                  </button>
                  <button>close</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="singleone">{mapSong}</div>
        <div className="log-contain">
          <Logout />
        </div>
      </div>
    );
  }
}

export default withRouter(SingleSong);
