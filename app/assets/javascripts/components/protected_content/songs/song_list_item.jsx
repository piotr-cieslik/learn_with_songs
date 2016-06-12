var SongListItem = function(params) {
  var path = "/songs/" + params.song.id;
  return (
      <ReactRouter.Link
        to={path}
        className="collection-item">
        <p className="song-author">{ params.song.attributes.author }</p>
        <p className="song-title">{ params.song.attributes.title }</p>
      </ReactRouter.Link>
  );
};
