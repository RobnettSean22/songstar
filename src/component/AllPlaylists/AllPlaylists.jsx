import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
class AllPlaylists extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: [],
      input: ""
    };
  }
  newPlaylists(user_id, playlist_name) {
    axios.post(`/api/new_play/${user_id}`, playlist_name).then(response => {
      this.setState({
        name: response.data,
        input: ""
      });
    });
  }
  render() {
    const { input } = this.state;
    const mapPlay = this.props.id.map(playlists => {
      return (
        <div key={playlists.playlist_id}>
          <Link>
            <button>{playlists.playlist_name}</button>
          </Link>
        </div>
      );
    });
    return (
      <div>
        <div className="add-play">
          <input
            value={input}
            onChange={e => this.setState({ input: e.target.value })}
          />
          <button
            onClick={e => this.newPlaylists(this.props.id, input)}
          ></button>
        </div>

        <div className="playlists">{mapPlay}</div>
      </div>
    );
  }
}

export default AllPlaylists;
