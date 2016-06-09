var SongsPage = function(props){
  return(
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2">
          <SongsList
            songs={ props.songs } />
          <ReactRouter.Link
            to="/songs/new"
            className="btn btn-primary btn-block">
            Stwórz nową
          </ReactRouter.Link>
          <LogoutButton />
        </div>
        <div className="col-lg-8">
          <SongDetails
            song={ props.currentSong }
            onDeleteSong={ props.onDeleteSong }/>
        </div>
      </div>
    </div>
  );
};
