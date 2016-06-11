var IndexSongPage = function(props){
  return(
    <div className="row">
      <div className="col l2">
        <SongsList songs={ props.songs } />
      </div>

      <div className="col l8">
        <div className="card">
          <div className="card-content">
            <div className="card-title">
            </div>
            <div>
              Wybierz piosenkę z list po lewej, aby rozpocząć.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
