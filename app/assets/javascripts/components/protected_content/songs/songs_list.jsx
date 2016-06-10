var SongsList=React.createClass({
  render: function(){
    var items = this.props.songs.map(function(song) {
      var isSelected = this.props.params && song.id == this.props.params.id;
      return (
        <SongListItem
          key={ song.id }
          song={ song }
          isSelected ={ isSelected }
          onSongSelect={ this.handleSongSelect } />
      );
    }, this);
    return (
      <div className="card">
        <div className="card-content">
          <span className="card-title">Lista piosenek</span>
          <ul>
              { items }
          </ul>
          <ReactRouter.Link
            to="/songs/new"
            className="waves-effect waves-light btn">
            Dodaj piosenkę
          </ReactRouter.Link>
        </div>
      </div>
    );
  }
});
