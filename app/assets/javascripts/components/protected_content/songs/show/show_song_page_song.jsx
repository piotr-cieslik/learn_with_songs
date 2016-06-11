var ShowSongPageSong = function(props){
  return(
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
        <ReactRouter.Link
          to={ "/songs/" + props.song.id + "/edit" }
          className="blue-text">
            Edytuj
        </ReactRouter.Link>

        <a
          href="#"
          className="red-text"
          onClick={ props.onDelete }>Usuń</a>
      </div>
    </div>
  );
}
