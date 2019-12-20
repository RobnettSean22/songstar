import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { setUser } from "./reducer/userReducer";
import Landing from "./component/Landing/Landing";
import AllSongs from "./component/AllSongs/AllSongs";
import AddSong from "./component/AddSong/AddSong";
import "./App.css";
import AllPlaylists from "./component/AllPlaylists/AllPlaylists";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allSongs: [],
      allPlaylists: []
    };
  }

  viewAllSongs = async () => {
    const response = await axios.get("/api/all_songs");
    this.setState({
      allSongs: response.data
    });
  };
  viewPlaylist = async user_id => {
    const response = await axios.get(`/api/playlists/${user_id}`);
    this.setState({
      allPlaylists: response.data
    });
  };
  render() {
    console.log(this.state.allSongs);
    const { allSongs, allPlaylists } = this.state;
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
            render={() => (
              <AllPlaylists
                playlists={allPlaylists}
                id={this.props.user.user.user_id}
              />
            )}
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
