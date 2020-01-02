import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import "./AddSong.scss";
import axios from "axios";

class AddSong extends Component {
  constructor(props) {
    super(props);

    this.state = {
      songName: [],
      artist: [],
      albulm: [],
      songInput: "",
      artistInput: "",
      albulmInput: ""
    };
  }

  newSong(song_name, artist, albulm) {
    axios
      .post(`/api/new_song/`, {
        song_name,
        artist,
        albulm
      })
      .then(response => {
        this.setState({
          songName: response.data,
          artist: response.data,
          albulm: response.data
        });
      });
  }

  render() {
    const { songInput, artistInput, albulmInput } = this.state;
    console.log(albulmInput);
    return (
      <div className="add-newsong-container">
        <Header />
        <label>New Song</label>
        <form onSubmit={e => this.newSong(songInput, artistInput, albulmInput)}>
          <input
            value={songInput}
            onChange={e => this.setState({ songInput: e.target.value })}
          />
          <input
            value={artistInput}
            onChange={e => this.setState({ artistInput: e.target.value })}
          />
          <input
            value={albulmInput}
            onChange={e => this.setState({ albulmInput: e.target.value })}
          />
          <button></button>
        </form>
      </div>
    );
  }
}

export default AddSong;
