var ShowSongPageTranslationsList = function(props){
  var listItems = props.translations.map(function(t) {
    return <ShowSongPageTranslationListItem translation={ t } />;
  });

  return(
    <div className="card">
      <div className="card-content">
        <span className="card-title">Tłumaczenia</span>
      </div>
      <ul className="collection">
        { listItems }
      </ul>
    </div>
  );
}
