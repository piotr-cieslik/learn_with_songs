var ShowSongPage = function(props){
  return(
    <div className="row">
      <div className="col l2">
        <SongsList songs={ props.songs } />
      </div>

      <div className="col l6">
        { props.songComponent }
      </div>

      <div className="col l4">
        <ShowSongPageTranslations />
      </div>
    </div>
  );
}
