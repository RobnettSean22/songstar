UPDATE songs
SET song_name = $2,
artist = $3,
albulm = $4

WHERE song_id = $1;

SELECT *
FROM songs
WHERE song_id = $1;

