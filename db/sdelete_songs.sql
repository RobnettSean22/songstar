DELETE FROM listsongs
WHERE user_id = $1 and playlist_id = $2 and item_id = $3;
SELECT *
FROM listsongs
