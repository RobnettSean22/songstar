DELETE FROM listsongs

WHERE user_id = $1 and playlist_id = $2;

DELETE FROM playlists

WHERE user_id = $1 AND playlist_id = $2;


SELECT *
FROM playlists 
