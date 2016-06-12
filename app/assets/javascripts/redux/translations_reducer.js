function translationsReducer(state, action){
  if (typeof state === 'undefined') {
    return [];
  }

  if(action.type == FILL_TRANSLATIONS){
    return action.translations.slice()
  }

  if(action.type == CREATE_TRANSLATION){
    state.push(action.translation);
    return state.slice();
  }

  return state;
}
