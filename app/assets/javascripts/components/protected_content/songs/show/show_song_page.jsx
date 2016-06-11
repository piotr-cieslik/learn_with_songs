var ShowSongPage = function(props){
  return(
    <div className="row">
      <div className="col l2">
        <SongsList songs={ props.songs } />
      </div>

      <div className="col l8">
        <div className="card">
          <div className="card-content">
            <span className="card-title">
              { props.song.attributes.author } - { props.song.attributes.title }
            </span>
            <pre>
              { props.song.attributes.lyrics }
            </pre>
          </div>

          <div className="card-action">
            <a
              href="#"
              className="blue-text">Edytuj</a>
            <a
              href="#"
              className="red-text"
              onClick={ props.onSongDelete }>Usuń</a>
          </div>
        </div>
      </div>

    </div>

  );
}
