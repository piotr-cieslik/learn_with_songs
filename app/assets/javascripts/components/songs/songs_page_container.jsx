var SongsPageContainer = React.createClass({
  getInitialState: function(){
    return{
      songs: [],
      selectedSong: null,
      isCreatingNew: false,
    };
  },
  componentDidMount: function() {
    $.ajax({
      url: 'api/songs',
      dataType: 'json',
      type: 'GET',
      contentType: "application/json",
      headers:{
        'Authorization': CurrentUser.getAuthorizationToken()
      },
      success: function(data) {
        this.setState({ songs: data.data })
      }.bind(this),
      error: function(xhr, status, err) {
      }.bind(this)
    });
  },
  handleSongSelect: function(song){
    this.setState({
      selectedSong: song,
      isCreatingNew: false
    });
  },
  handleCreateNewSong: function(){
    this.setState({
      selectedSong: null,
      isCreatingNew: true
    });
  },
  handleSongSuccessfullyCreate: function(song){
    var songs = this.state.songs.concat([song]);
    this.setState({
      songs: songs,
      selectedSong: song,
      isCreatingNew: false,
    });
  },
  handleSongSuccessfullyDeleted: function(song){
    var songs = this.state.songs;
    var index = songs.indexOf(song);
    if (index > -1) {
      songs.splice(index, 1);
    }
    this.setState({
      songs: songs,
      selectedSong: null,
      isCreatingNew: false,
    });
  },
  render: function(){
    return <SongsPage
      songs={ this.state.songs }
      selectedSong={ this.state.selectedSong }
      isCreatingNew={ this.state.isCreatingNew }
      onSongSelect={ this.handleSongSelect }
      onCreateNewSong= { this.handleCreateNewSong }
      onSongSuccessfullyCreate={ this.handleSongSuccessfullyCreate }
      onSongSuccessfullyDeleted={ this.handleSongSuccessfullyDeleted }/>;
  }
});
