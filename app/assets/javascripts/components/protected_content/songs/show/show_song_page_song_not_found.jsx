var ShowSongPageSongNotFound = function(props){
  return(
    <div className="card">
      <div className="card-content">
        <div className="card-title">
          Nie znaleziono piosenki.
        </div>
        <div>
          Piosenka, którą próbujesz wyświetlić nie istnieje lub nie masz do niej uprawnień.
        </div>
      </div>
    </div>
  );
}
