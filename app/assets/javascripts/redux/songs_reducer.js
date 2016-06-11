function songsReducer(state, action) {
  if (typeof state === 'undefined') {
    return [];
  }

  if(action.type === FILL_SONGS){
    return action.songs;
  }

  if(action.type === CREATE_SONG){
    state.push(action.song);
    return state.slice();
  }

  if(action.type == UPDATE_SONG){
    var matchingSong = state.filter(function(s){
      return s.id == action.song.id;
    })[0];
    var index = state.indexOf(matchingSong);
    state[index] = action.song;
    return state.slice();
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
