var SongsPage = function(props){
  return(
    <div className="row">
      <div className="col l2">
        <div className="card">
          <div className="card-content">
            <SongsList
              songs={ props.songs } />
            <ReactRouter.Link
              to="/songs/new"
              className="waves-effect waves-light btn">
              Stwórz nową
            </ReactRouter.Link>
          </div>
        </div>
      </div>
      <div className="col l8">
        <SongDetails
          song={ props.currentSong }
          onDeleteSong={ props.onDeleteSong }/>
      </div>
    </div>
  );
};
