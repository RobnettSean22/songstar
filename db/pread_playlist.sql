SELECT *
FROM playlists
WHERE user_id = $1
ORDER BY playlist_name;
