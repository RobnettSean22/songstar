SELECT *
FROM listsongs
WHERE user_id = $1 AND playlist_id = $2;