var SongsPage = function(props){
  return(
    <div className="row">
      <div className="col l2">
        <SongsList
          songs={ props.songs } />
      </div>
      <div className="col l8">
        <SongDetails
          song={ props.currentSong } />
      </div>
    </div>
  );
};
