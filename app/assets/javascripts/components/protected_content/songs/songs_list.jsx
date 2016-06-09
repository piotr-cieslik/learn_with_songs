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
      <ul>
          { items }
      </ul>
    );
  }
});
