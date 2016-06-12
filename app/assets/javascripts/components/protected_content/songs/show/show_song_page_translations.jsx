var ShowSongPageTranslations = function(props){
  return(
    <div>
      <div className="card">
        <div className="card-content">
          <span className="card-title">Dodaj tłumaczenie</span>
          <ShowSongPageNewTranslationFormContainer
            songId={ props.songId } />
        </div>
      </div>

      <ShowSongPageTranslationsList
        translations={ props.translations } />
    </div>
  );
};
