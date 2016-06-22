var reducers = Redux.combineReducers({
  songs: songsReducer,
  translations: translationsReducer,
  user: userReducer,
});

var currentUser = cookies.getJson('current_user');
var initialState = {
  songs: Immutable.List(),
  translations: Immutable.List(),
  user: currentUser
};
var applicationStore = Redux.createStore(reducers, initialState);
