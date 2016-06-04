var SongsList=React.createClass({
  getInitialState: function() {
    return { songs: [], selectedSong: null };
  },
  componentDidMount: function() {
    $.ajax({
      url: 'api/songs',
      dataType: 'json',
      type: 'GET',
      headers:{
        'Authorization': this.props.authorizationToken
      },
      contentType: "application/json",
      success: function(data) {
        this.setState({ songs: data.data })
      }.bind(this),
      error: function(xhr, status, err) {
      }.bind(this)
    });
  },
  handleSongSelect: function(song){
    this.setState({ selectedSong: song });
    this.props.onSongSelect(song);
  },
  render: function(){
    var songs = this.state.songs.map(function(song) {
      var isSelected = this.state.selectedSong && song.id == this.state.selectedSong.id;
      return (
        <Song
          key={ song.id }
          song={ song }
          isSelected ={ isSelected }
          onSongSelect={ this.handleSongSelect }></Song>
      );
    }, this);
    return (
      <div id="songs-list" className="panel panel-default">
        <div className="panel-heading">
          Lista piosenek
        </div>
        <ul className="list-group">
          { songs }
        </ul>
      </div>
    );
  }
});
