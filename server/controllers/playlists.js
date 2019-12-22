module.exports = {
  viewPlaylist: async (req, res, next) => {
    const db = req.app.get("db");
    const { user_id } = req.params;
    const viewList = await db.pread_playlist([user_id]);
    return res.status(200).send(viewList);
  },
  newPlaylists: async (req, res, next) => {
    const db = req.app.get("db");
    const { user_id } = req.params;
    const { playlist_name } = req.body;
    const createPlay = await db.pnew_playlist([user_id, playlist_name]);
    return res.status(200).send(createPlay);
  },
  clearPlaylist: async (req, res, next) => {
    const db = req.app.get("db");
    const { user_id, playlist_id } = req.params;
    const clearPlay = await db.pdelete_playlist([user_id, playlist_id]);
    return res.status(200).send(clearPlay);
  },
  viewPlaylistSongs: async (req, res, next) => {
    const db = req.app.get("db");
    const { user_id, playlist_id } = req.params;
    const playlistSongs = await db.pread_playlist_songs([user_id, playlist_id]);
    return res.status(200).send(playlistSongs);
  },
  songToPlatlist: async (req, res, next) => {
    const db = req.app.get("db");
    const { user_id, playlist_id } = req.params;
    const { song_id } = req.body;
    const addToPlay = await db.psongs_to_play([user_id, playlist_id, song_id]);
    return res.status(200).send(addToPlay);
  },
  clearSong: async (req, res, next) => {
    const db = await req.app.get("db");
    const { user_id, playlist_id, item_id } = req.params;
    const xSong = await db.sdelete_songs([user_id, playlist_id, item_id]);
    return res.status(200).send(xSong);
  }
};
