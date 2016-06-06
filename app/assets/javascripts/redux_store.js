const FILL_SONGS = 'FILL_SONGS';
const CREATE_SONG = 'CREATE_SONG';
const DELETE_SONG = 'DELETE_SONG';

Actions = {
  fillSongs: function(songs){
    return{
      type: FILL_SONGS,
      songs: songs
    }
  },
  deleteSong: function(songId){
    return{
      type: DELETE_SONG,
      songId: songId
    }
  },
};

var appReducer = function(state, action) {
  if (typeof state === 'undefined') {
    return{ songs:[] }
  }

  if(action.type === FILL_SONGS){
    return{ songs: action.songs }
  }

  if(action.type === DELETE_SONG){
    var songToDelete = state.songs.filter(function(s){
      return s.id == action.songId;
    })[0];
    var index = state.songs.indexOf(songToDelete);
    state.songs.splice(index, 1);
    var newSongs = state.songs.slice();
    return{ songs: newSongs }
  }

  return state
};

var appStore = Redux.createStore(appReducer);
