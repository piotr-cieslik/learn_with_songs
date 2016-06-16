function translationsReducer(state, action){
  if (typeof state === 'undefined') {
    return Immutable.List();
  }

  if(action.type == FILL_TRANSLATIONS){
    return action.translations
  }

  if(action.type == CREATE_TRANSLATION){
    return state.push(action.translation);
  }

  if(action.type == DELETE_TRANSLATION){
    var index = state.indexOf(action.translation);
    return state.delete(index);
  }

  return state;
}
