var SongsList=React.createClass({
  render: function(){
    var items = this.props.songs.map(function(song) {
      return (
        <SongListItem
          key={ song.id }
          song={ song } />
      );
    }, this);

    return (
      <div className="card">
        <div className="card-content">
          <span className="card-title">Lista piosenek</span>
        </div>
        <div id="songs-collection-wrapper">
          <ul className="collection">
              { items }
          </ul>
        </div>

        <div className="card-action">
          <ReactRouter.Link
            className="blue-text"
            to="/songs/new">Dodaj piosenkę</ReactRouter.Link>
        </div>
      </div>
    );
  }
});
