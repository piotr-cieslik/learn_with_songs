var SongsList=React.createClass({
  render: function(){
    var items = this.props.songs.map(function(song) {
      return (
        <SongListItem
          key={ song.get('id') }
          song={ song } />
      );
    }, this);

    return (
      <div className="card">
        <div className="card-content">
          <span className="card-title">Lista piosenek</span>
            <ReactRouter.Link
              className="btn-floating waves-effect waves-light red right"
              to="/songs/new">
              <i className="material-icons">add</i>
            </ReactRouter.Link>
        </div>
        <ul className="collection">
            { items }
        </ul>
      </div>
    );
  }
});
