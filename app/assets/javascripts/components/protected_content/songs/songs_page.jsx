var SongsPage = function(props){
  return(
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2">
          <SongsList
            songs={ props.songs }
            selectedSong={ props.selectedSong }
            onSongSelect={ props.onSongSelect } />
          <button
            className="btn btn-success btn-block"
            onClick={ props.onGoToNewSongPage }>Stwórz nową</button>
          <LogoutButton />
        </div>
        <div className="col-lg-8">
          <SongDetails
            song={ props.selectedSong }
            onDeleteSong={ props.onDeleteSong }/>
        </div>
      </div>
    </div>
  );
};
