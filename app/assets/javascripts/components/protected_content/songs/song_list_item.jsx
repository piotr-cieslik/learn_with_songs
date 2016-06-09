var SongListItem = function(params) {
  var path = "/songs/" + params.song.id;
  return (
    <li>
      <ReactRouter.Link to={path}>
        { params.song.attributes.author } - { params.song.attributes.title }
      </ReactRouter.Link>
    </li>
  );
};
