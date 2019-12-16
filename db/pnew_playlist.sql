INSERT INTO playlists
    ( user_id, playlist_name)
VALUES
    ($1, $2);
SELECT *
FROM playlists



WHERE user_id = $1;