var ShowSongPageNewTranslationForm = function(props){
  return(
    <form
      onSubmit={ props.onSubmit }>
        <div className="input-field">
          <input
            id="foreign-meaning"
            type="text"
            placeholder="tekst"
            value={ props.foreignMeaning || '' }
            onChange={ props.onForeignMeaningChange }
            required/>
        </div>

        <div className="input-field">
          <input
            id="native-meaning"
            type="text"
            placeholder="tłumaczenie"
            value={ props.nativeMeaning || '' }
            onChange={ props.onNativeMeaningChange }
            required/>
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
