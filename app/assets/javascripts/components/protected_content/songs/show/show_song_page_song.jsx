var ShowSongPageSong = function(props){
  var lyricsWithTranslations = props.song.attributes.lyrics;
  props.translations.forEach(function(t){
    var foreign = t.attributes['foreign-meaning'];
    var native = t.attributes['native-meaning'];

    var regex = new RegExp(foreign, 'gi');
    lyricsWithTranslations = lyricsWithTranslations.replace(regex, function(x){
      return '' +
        '<span class="has-translation">'+
          x +
          '<span class="translation">' + native + '</span>' +
        '</span>';
    });
  });

  return(
    <div className="card">
      <div className="card-content">
        <span className="card-title">
          { props.song.attributes.author } - { props.song.attributes.title }
        </span>
        <div
          className="song-lyrics"
          dangerouslySetInnerHTML={{__html: lyricsWithTranslations}} />

        <div className="buttons-bar-left">
          <ReactRouter.Link
            to={ "/songs/" + props.song.id + "/edit" }
            className="btn">
              Edytuj
          </ReactRouter.Link>
          <a
            href="#"
            className="btn red darken-1"
            onClick={ props.onDelete }>Usuń</a>
        </div>
      </div>
    </div>
  );
}
