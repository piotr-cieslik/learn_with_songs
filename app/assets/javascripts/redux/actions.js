const FILL_SONGS = 'FILL_SONGS';
const CREATE_SONG = 'CREATE_SONG';
const DELETE_SONG = 'DELETE_SONG';
const UPDATE_SONG = 'UPDATE_SONG';
const FILL_TRANSLATIONS = 'FILL_TRANSLATIONS';
const CREATE_TRANSLATION = 'CREATE_TRANSLATION';
const DELETE_TRANSLATION = 'DELETE_TRANSLATION';
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
  updateSong: function(song){
    return {type: UPDATE_SONG, song: song }
  },
  fillTranslations: function(translations){
    return{ type: FILL_TRANSLATIONS, translations: translations }
  },
  createTranslation: function(translation){
    return {type: CREATE_TRANSLATION, translation: translation }
  },
  deleteTranslation: function(translation){
    return{type: DELETE_TRANSLATION, translation: translation }
  },
  login: function(user){
    return { type: LOGIN, user: user }
  },
  logout: function(){
    return { type: LOGOUT }
  }
};
