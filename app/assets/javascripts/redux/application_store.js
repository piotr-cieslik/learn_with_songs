var reducers = Redux.combineReducers({
  songs: songsReducer,
  user: userReducer
});

var appStore = Redux.createStore(reducers);
