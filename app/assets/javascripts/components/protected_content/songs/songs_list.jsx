var SongsList=React.createClass({
  render: function(){
    var songs = this.props.songs.map(function(song) {
      var isSelected = this.props.params && song.id == this.props.params.id;
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
          { songs }
      </div>
    );
  }
});
