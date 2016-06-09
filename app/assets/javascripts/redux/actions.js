const FILL_SONGS = 'FILL_SONGS';
const CREATE_SONG = 'CREATE_SONG';
const DELETE_SONG = 'DELETE_SONG';
const GO_TO_PAGE = 'GO_TO_PAGE';
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

Actions = {
  fillSongs: function(songs){
    return{ type: FILL_SONGS, songs: songs }
  },
  createSong: function(song){
    return{ type: CREATE_SONG, song: song }
  },
  deleteSong: function(songId){
    return{type: DELETE_SONG, songId: songId }
  },
  goToPage: function(url){
    return{ type: GO_TO_PAGE, url: url }
  },
  login: function(user){
    return { type: LOGIN, user: user }
  },
  logout: function(){
    return { type: LOGOUT }
  }
};
