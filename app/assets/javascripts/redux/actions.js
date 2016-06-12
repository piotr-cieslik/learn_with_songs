const FILL_SONGS = 'FILL_SONGS';
const CREATE_SONG = 'CREATE_SONG';
const DELETE_SONG = 'DELETE_SONG';
const UPDATE_SONG = 'UPDATE_SONG';
const FILL_TRANSLATIONS = 'FILL_TRANSLATIONS';
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

Actions = {
  fillSongs: function(songs){
    return{ type: FILL_SONGS, songs: songs }
  },
  fillTranslations: function(translations){
    return{ type: FILL_TRANSLATIONS, translations: translations }
  },
  createSong: function(song){
    return{ type: CREATE_SONG, song: song }
  },
  deleteSong: function(songId){
    return{type: DELETE_SONG, songId: songId }
  },
  updateSong: function(song){
    return {type: UPDATE_SONG, song: song }
  },
  login: function(user){
    return { type: LOGIN, user: user }
  },
  logout: function(){
    return { type: LOGOUT }
  }
};
