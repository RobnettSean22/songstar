INSERT INTO songs
    (user_id, song_name, artist, albulm )
VALUES
    ($1, $2, $3, $4 );
SELECT *
FROM songs