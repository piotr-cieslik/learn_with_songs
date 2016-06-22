var SongListItem = function(params) {
  var path = "/songs/" + params.song.get('id');
  return (
      <ReactRouter.Link
        to={path}
        className="collection-item">
        <p className="song-author">{ params.song.get('attributes').get('author') }</p>
        <p className="song-title">{ params.song.get('attributes').get('title') }</p>
      </ReactRouter.Link>
  );
};
