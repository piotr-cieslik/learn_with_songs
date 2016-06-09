var Song = function(params) {
  var path = "/songs/" + params.song.id;
  return <ReactRouter.Link to={path}>
    { params.song.attributes.author } - { params.song.attributes.title }
  </ReactRouter.Link>;
};
