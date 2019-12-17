import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import Landing from "./component/Landing/Landing";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allSongs: null
    };
  }

  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/" exact render={() => <Landing />} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
