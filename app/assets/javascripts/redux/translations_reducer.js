function userReducer(state, action){
  if (typeof state === 'undefined') {
    return [];
  }

  if(action.type == FILL_TRANSLATIONS){
    return action.translations.slice()
  }

  return state;
}
