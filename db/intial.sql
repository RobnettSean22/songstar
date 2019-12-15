
CREATE TABLE users
(
    user_id SERIAL PRIMARY KEY,
    username TEXT NOT NULL,
    password TEXT NOT NULL
);
INSERT INTO users
    (username, password)
VALUES
    ('soul', 'soul123');


CREATE TABLE playlists
(
    playlist_id SERIAL PRIMARY KEY,
    playlist_name TEXT NOT NULL,
    user_id INTEGER REFERENCES users(user_id),
    song_id INTEGER REFERENCES songs(song_id)
);
INSERT INTO playlists
    (playlist_name)
VALUES
    ('test');


CREATE TABLE songs
(
    song_id SERIAL PRIMARY KEY,
    song_name TEXT NOT NULL,
    artist TEXT NOT NULL,
    albulm TEXT NOT NULL

);
INSERT INTO songs
    (song_name, artist, albulm )
VALUES
    ('love', 'eminem', 'shady lp2' );