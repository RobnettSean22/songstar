import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Header from "../Header/Header";
import Logout from "../Logout/Logout";
import note from "../../Assests/musicnote.jpg";
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

      modal: true
    };
  }
  componentDidMount() {
    this.viewSingleSong(+this.props.match.params.song_id);
  }
  modalSlideOut() {
    this.setState({
      modal: false
    });
  }
  modalSlideIn() {
    this.setState({
      modal: true
    });
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
        this.modalSlideOut();
      });
  }

  render() {
    const { song, songInput, aritistInput, albulmInput, modal } = this.state;
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

        <h2 onClick={e => this.modalSlideIn()}>edit song</h2>
        <div className={modal ? "shadow" : "none"}>
          <div className={modal ? "in" : "go-out"}>
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
                  <button onClick={e => this.modalSlideOut()}>close</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="singleone">{mapSong}</div>
        <div className="log-contain"></div>
        <Logout />
      </div>
    );
  }
}

export default withRouter(SingleSong);
