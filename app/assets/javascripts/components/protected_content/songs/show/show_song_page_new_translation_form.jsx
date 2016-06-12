var ShowSongPageNewTranslationForm = function(props){
  return(
    <form
      onSubmit={ props.onSubmit }>
        <div className="input-field">
          <input
            id="foreign-meaning"
            type="text"
            value={ props.foreignMeaning || '' }
            onChange={ props.onForeignMeaningChange }
            required/>
          <label
            for="foreign-meaning">tekst</label>
        </div>

        <div className="input-field">
          <input
            id="native-meaning"
            type="text"
            value={ props.nativeMeaning || '' }
            onChange={ props.onNativeMeaningChange }
            required/>
          <label
            for="native-meaning">tłumaczenie</label>
        </div>

        <div className="buttons-bar-left">
          <button
            className="btn"
            type="submit">Dodaj</button>
          <a
            onClick={ props.onClear }
            className="btn red darken-1">Wyczyść</a>
        </div>
    </form>
  )
};
