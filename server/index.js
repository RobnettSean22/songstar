require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");
const app = express();
const { register, login, userSession, logout } = require("./controllers/users");
const {
  viewAllSongs,
  viewPlaylistSongs,
  newSong,
  editSong,
  clearSong
} = require("./controllers/songs");
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
app.get("/api/playlist_songs/:id/:name", viewPlaylistSongs);
app.post("/api/new_song/:id", newSong);
app.put("/api/update_song/:song_name/:artist/:albulm", editSong);
app.delete("/api/deletef_play/:id/:name/:id", clearSong);

let port = SERVER_PORT || 4001;
app.listen(port, () => console.log(`catch me outside on ${port}`));
