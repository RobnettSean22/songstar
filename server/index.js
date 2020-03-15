require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");
const app = express();
const { register, login, userSession, logout } = require("./controllers/users");
const {
  viewAllSongs,
  viewSingleSong,
  newSong,
  editSong
} = require("./controllers/songs");
const {
  viewPlaylistSongs,
  viewPlaylist,
  newPlaylists,
  clearPlaylist,
  songToPlatlist,
  clearSong
} = require("./controllers/playlists");
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;
app.use(express.json());

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 14
    }
  })
);

massive(CONNECTION_STRING).then(dbInstance => {
  console.log("database is lit");
  app.set("db", dbInstance);
});

app.use(express.static(`${__dirname}/../build`));

// register ********************************************
app.post("/auth/register", register);

// login ********************************************
app.post("/auth/login", login);

// user session ********************************************
app.get("/auth/user_session", userSession);

// logout ********************************************
app.delete("/auth/logout", logout);

//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------

app.get("/api/all_songs/", viewAllSongs);
app.get("/api/song/:song_id", viewSingleSong);
app.post("/api/new_song/", newSong);
app.put("/api/update_song/:song_id", editSong);

//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------

app.get("/api/playlists/:user_id", viewPlaylist);
app.post("/api/new_play/:user_id", newPlaylists);
app.delete("/api/clear_play/:user_id/:playlist_id", clearPlaylist);
app.get("/api/playlist_songs/:user_id/:playlist_id", viewPlaylistSongs);
app.post("/api/to_play/:user_id/:playlist_id", songToPlatlist);
app.delete("/api/deletef_play/:user_id/:playlist_id/:song_id", clearSong);

const path = require("path");
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

let port = SERVER_PORT || 4001;
app.listen(port, () => console.log(`catch me outside on ${port}`));
