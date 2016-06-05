var SongsList=React.createClass({
  handleSongSelect: function(song){
    this.props.onSongSelect(song);
  },
  handleCreateNewSong: function(){
    this.props.onCreateNewSong();
  },
  render: function(){
    var songs = this.props.songs.map(function(song) {
      var isSelected = this.props.selectedSong && song.id == this.props.selectedSong.id;
      return (
        <Song
          key={ song.id }
          song={ song }
          isSelected ={ isSelected }
          onSongSelect={ this.handleSongSelect }></Song>
      );
    }, this);
    return (
      <div>
        <div id="songs-list" className="panel panel-default">
          <div className="panel-heading">
            <span>Lista piosenek</span>
          </div>
          <ul className="list-group">
            { songs }
          </ul>
        </div>
        <button
          className="btn btn-success btn-block"
          onClick={ this.handleCreateNewSong }>Stwórz nową</button>
      </div>

    );
  }
});
