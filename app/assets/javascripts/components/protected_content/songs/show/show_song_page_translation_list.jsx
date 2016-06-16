var ShowSongPageTranslationList = function(props){
  var listItems = props.translations.map(function(t) {
    return <ShowSongPageTranslationListItemContainer
      key={ t.get('id') }
      showNativeMeaning={ props.showNativeMeanings }
      translation={ t } />;
  });

  return(
    <div className="card">
      <div className="card-content">
        <p className="card-title">Tłumaczenia</p>
        <p>
          <input
            id="show-native-meaning"
            type="checkbox"
            value={ props.showNativeMeanings }
            onChange={ props.onShowNativeMeaningsChange }/>
          <label htmlFor="show-native-meaning">Wyświetl tłumaczenia</label>
        </p>
      </div>
      <div id="translations-list">
        <ul className="collection">
          { listItems }
        </ul>
      </div>
    </div>
  );
}
