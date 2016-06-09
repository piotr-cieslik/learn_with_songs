var reducers = Redux.combineReducers({
  songs: songsReducer,
  user: userReducer
});

var currentUser = cookies.getJson('currentUser');
var initialState = {
  songs:[],
  user: currentUser
};
var appStore = Redux.createStore(reducers, initialState);
