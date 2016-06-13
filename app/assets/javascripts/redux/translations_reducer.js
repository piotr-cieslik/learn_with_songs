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

  if(action.type == DELETE_TRANSLATION){
    var itemToDelete = state.filter(function(t){
      return t.id == action.translationId;
    })[0];
    var index = state.indexOf(itemToDelete);
    state.splice(index, 1);

    return state.slice();
  }

  return state;
}
