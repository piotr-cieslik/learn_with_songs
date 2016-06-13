var ShowSongPageTranslationsList = function(props){
  var listItems = props.translations.map(function(t) {
    return <ShowSongPageTranslationListItemContainer
      key={ t.id }
      translation={ t } />;
  });

  return(
    <div className="card">
      <div className="card-content">
        <span className="card-title">Tłumaczenia</span>
      </div>
      <div id="translations-list">
        <ul className="collection">
          { listItems }
        </ul>
      </div>
    </div>
  );
}
