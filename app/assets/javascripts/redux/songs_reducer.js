function songsReducer(state, action) {
  if (typeof state === 'undefined') {
    return Immutable.List();
  }

  if(action.type === FILL_SONGS){
    return action.songs;
  }

  if(action.type === CREATE_SONG){
    return state.push(action.song);
  }

  if(action.type == UPDATE_SONG){
    var matchingSong = state.find(function(s){
      return s.get('id') == action.song.get('id');
    })[0];
    var index = state.indexOf(matchingSong);
    return state.set(index, action.song);
  }

  if(action.type === DELETE_SONG){
    var index = state.indexOf(action.song);
    return state.delete(index);
  }

  return state;
};
