module.exports = {
  viewAllSongs: async (req, res, next) => {
    const db = await req.app.get("db");
    const allSongs = await db.sread_all_songs();
    return res.status(200).send(allSongs);
  },
  viewPlaylistSongs: async (req, res, next) => {
    const db = req.app.get("db");
    const { user_id, playlist_name } = req.params;
    const playlistSongs = await db.sread_playlist_songs({
      user_id,
      playlist_name
    });
    return res.status(200).send(playlistSongs);
  },

  newSong: async (req, res, next) => {
    const db = await req.app.get("db");
    const user_id = req.params;
    const { song_name, artist, albulm } = req.body;
    const addSong = await db.snew_song({ user_id, song_name, artist, albulm });
    return res.status(200).send(addSong);
  },

  editSong: async (req, res, next) => {
    const db = await req.app.get("db");
    const song_id = req.params;
    const { song_name, artist, albulm } = req.body;
    const changeSong = await db.supdate_song({
      song_id,
      song_name,
      artist,
      albulm
    });
    return res.status(200).send(changeSong);
  },

  clearSong: async (req, res, next) => {
    const db = await req.app.get("db");
    const { user_id, playlist_name, song_id } = req.params;
    const xSong = await db.sdelete_songs({ user_id, playlist_name, song_id });
    return res.status(200).send(xSong);
  }
};
