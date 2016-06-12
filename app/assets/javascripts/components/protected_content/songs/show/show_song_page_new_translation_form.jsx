var ShowSongPageNewTranslationForm = function(props){
  return(
    <form
      onSubmit={ props.onSubmit }>
      <div className="row">
        <div className="input-field col s12">
          <input
            id="foreign-meaning"
            type="text"
            value={ props.foreignMeaning || '' }
            onChange={ props.onForeignMeaningChange }
            required/>
          <label
            for="foreign-meaning">tekst</label>
        </div>
      </div>

      <div className="row">
        <div className="input-field col s12">
          <input
            id="native-meaning"
            type="text"
            value={ props.nativeMeaning || '' }
            onChange={ props.onNativeMeaningChange }
            required/>
          <label
            for="native-meaning">tłumaczenie</label>
        </div>
      </div>

      <div className="row">
        <div className="col s12">
          <div className="buttons-bar-left">
            <button
              className="btn"
              type="submit">Dodaj</button>
            <a
              onClick={ props.onClear }
              className="btn red darken-1">Wyczyść</a>
          </div>
        </div>
      </div>
    </form>
  )
};
