DELETE FROM listsongs
WHERE user_id = $1 and playlist_id = $2 and song_id = $3;
SELECT *
FROM listsongs

