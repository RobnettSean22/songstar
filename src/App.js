import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { setUser } from "./reducer/userReducer";
import Landing from "./component/Landing/Landing";
import AllSongs from "./component/AllSongs/AllSongs";
import AddSong from "./component/AddSong/AddSong";
import Playlist from "./component/Playlist/Playlist";
import AddToPlay from "./component/AddToPlay/AddToPlay";
import AllPlaylists from "./component/AllPlaylists/AllPlaylists";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allSongs: [],
      allPlaylists: []
    };
    this.viewAllSongs = this.viewAllSongs.bind(this);
  }

  viewAllSongs = async () => {
    const response = await axios.get("/api/all_songs");
    this.setState({
      allSongs: response.data
    });
  };

  render() {
    console.log(this.state.allSongs);
    const { allSongs } = this.state;
    return (
      <React.Fragment>
        <Switch>
          <Route path="/" exact render={() => <Landing />} />
          <Route
            path="/songs/"
            exact
            render={() => (
              <AllSongs getAll={this.viewAllSongs} songs={allSongs} />
            )}
          />
          <Route path="/add_song/" exact render={() => <AddSong />} />
          <Route
            path="/all_playlists/:user_id"
            exact
            render={() => <AllPlaylists />}
          />
          <Route
            path="/in_play/:user_id/:playlist_id/"
            exact
            render={() => <Playlist linkSongs={allSongs} />}
          />
          <Route
            path="/add_to_play/:user_id/:playlist_id"
            exact
            render={() => <AddToPlay addSong={allSongs} />}
          />
        </Switch>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchTopProps = {
  setUser
};
export default connect(mapStateToProps, mapDispatchTopProps)(App);
