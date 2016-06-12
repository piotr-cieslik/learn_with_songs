var reducers = Redux.combineReducers({
  songs: songsReducer,
  user: userReducer
});

var currentUser = cookies.getJson('current_user');
var initialState = {
  songs: [],
  translations: [],
  user: currentUser
};
var applicationStore = Redux.createStore(reducers, initialState);
