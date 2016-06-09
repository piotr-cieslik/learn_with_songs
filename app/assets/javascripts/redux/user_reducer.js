function userReducer(state, action){
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
