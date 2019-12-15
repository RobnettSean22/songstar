DELETE FROM songs
WHERE user_id = $1 and playlist_name = $2 and song_id = $3;
SELECT *
FROM songs
