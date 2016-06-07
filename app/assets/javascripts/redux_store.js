const FILL_SONGS = 'FILL_SONGS';
const CREATE_SONG = 'CREATE_SONG';
const DELETE_SONG = 'DELETE_SONG';
const GO_TO_PAGE = 'GO_TO_PAGE';

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
  goToPage: function(url){
    return{
      type: GO_TO_PAGE,
      url: url
    }
  }
};

var appReducer = function(state, action) {
  if (typeof state === 'undefined') {
    return{ songs:[], url: null }
  }

  if(action.type === FILL_SONGS){
    state.songs = action.songs;
    
    return state;
  }

  if(action.type === DELETE_SONG){
    var songToDelete = state.songs.filter(function(s){
      return s.id == action.songId;
    })[0];
    var index = state.songs.indexOf(songToDelete);
    state.songs.splice(index, 1);
    var newSongs = state.songs.slice();
    state.songs = newSongs;

    return state;
  }

  if(action.type === GO_TO_PAGE){
    state.url = action.url;

    return state;
  }

  return state
};

var appStore = Redux.createStore(appReducer);
