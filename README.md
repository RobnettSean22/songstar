dependencies
react-router
massive
dotenv
express
bcrypt
react-redux

_frontend_
-comp-

allsongs
allplaylists
login
logout
register
addsong
singlesong
singleplaylist
editsong

_server_
auth/login
auth/logout
auth/register

-playlist-
play/create
play/delete
play/update
play/view

-songs-
song/read
song/add
song/delete
song/update

_database_

user
//id
//username
//password

```sql
Create Table users(
    user_id SERIAL PRIMARY KEY,
    username TEXT NOT NULL,
    password TEXT NOT NULL
)
INSERT INTO user(username, password)
VALUES
('test','test123')
```

playlists
//id
//songtitle
//artist
//album

```sql
CREATE TABLE  playlists(
    playlist_id SERIAL PRIMARY KEY,
    playlist_name TEXT NOT NULL,
    user_id INTEGER REFERENCES users(user_id),
    song_id INTEGER REFERENCES songs(song_id)
)
INSERT INTO playlist(playlist_name)
VALUES
('test')
```

songs//
//id
//songtitle
//artist
//album

```sql
CREATE TABLE songs(
    song_id SERIAL PRIMARY KEY,
    song_name TEXT NOT NULL,
    artist TEXT NOT NULL,
    albulm TEXT NOT NULL,

)
INSERT INTO songs(song_name, artist, albulm )
VALUES
('name', 'artist', 'alblum' )

```
