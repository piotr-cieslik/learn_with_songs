var ShowSongPageTranslations = function(props){
  return(
    <div>
      <div className="card">
        <div className="card-content">
          <span className="card-title">Dodaj tłumaczenie</span>
          <ShowSongPageNewTranslationFormContainer
            selectedText={ props.selectedText }
            songId={ props.songId } />
        </div>
      </div>

      <ShowSongPageTranslationListContainer
        translations={ props.translations } />
    </div>
  );
};
