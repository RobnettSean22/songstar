module.exports = {
  viewAllSongs: async (req, res, next) => {
    const db = await req.app.get("db");
    const allSongs = await db.sread_all_songs();
    return res.status(200).send(allSongs);
  },

  viewSingleSong: async (req, res, next) => {
    const db = await req.app.get("db");
    const { song_id } = req.params;
    const singleSong = await db.ssingle_song([song_id]);
    return res.status(200).send(singleSong);
  },

  newSong: async (req, res, next) => {
    const db = await req.app.get("db");

    const { song_name, artist, albulm } = req.body;
    const addSong = await db.snew_song([song_name, artist, albulm]);
    return res.status(200).send(addSong);
  },

  editSong: async (req, res, next) => {
    const db = await req.app.get("db");
    const { song_id } = req.params;
    const { song_name, artist, albulm } = req.body;
    const changeSong = await db.supdate_song([
      song_id,
      song_name,
      artist,
      albulm
    ]);
    return res.status(200).send(changeSong);
  }
};
