var Song = function(props){
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
        <a
          href="#"
          className="blue-text">Edytuj</a>
        <a
          href="#"
          className="red-text"
          onClick={ props.onSongDelete }>Usuń</a>
      </div>
    </div>
  );
}
