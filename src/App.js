import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import Landing from "./component/Landing/Landing";
import AllSongs from "./component/AllSongs/AllSongs";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allSongs: null
    };
  }
  viewAllSongs = async () => {
    const response = await axios.get("/api/all_songs");
    this.setState({
      allSongs: response.data
    });
  };
  render() {
    const { allSongs } = this.state;
    return (
      <React.Fragment>
        <Switch>
          <Route path="/" exact render={() => <Landing />} />
          <Route
            path="/songs/"
            exact
            render={() => <AllSongs songs={allSongs} />}
          />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
