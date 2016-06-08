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

var songsReducer = function(state, action) {
  if (typeof state === 'undefined') {
    return [];
  }

  if(action.type === FILL_SONGS){
    return action.songs;
  }

  if(action.type === CREATE_SONG){
    state.push(action.song);
    return state.songs.slice();
  }

  if(action.type === DELETE_SONG){
    var songToDelete = state.filter(function(s){
      return s.id == action.songId;
    })[0];
    var index = state.indexOf(songToDelete);
    state.splice(index, 1);

    return state.slice();
  }

  return state;
};

var userReducer = function(state, action){
  if (typeof state === 'undefined') {
    return null;
  }

  if(action.type === LOGIN){
    return action.user;
  }

  if(action.type === LOGOUT){
    return null;
  }

  return state;
}

var reducers = Redux.combineReducers({
  songs: songsReducer,
  user: userReducer
});

var appStore = Redux.createStore(reducers);
