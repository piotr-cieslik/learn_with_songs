var SongsPage = React.createClass({
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
  render: function() {
    if(this.state.isCreatingNew){
      var content = <SongNewForm
        authorizationToken={ this.props.authorizationToken }
        onSongSuccessfullyCreate={ this.handleSongSuccessfullyCreate } />
    }
    else {
      var content = <SongDetails
        song={ this.state.selectedSong } />
    }

    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2">
            <SongsList
              songs={ this.state.songs }
              selectedSong={ this.state.selectedSong }
              onSongSelect={ this.handleSongSelect }
              onCreateNewSong= { this.handleCreateNewSong } />
          </div>
          <div className="col-lg-8">
            { content }
          </div>
        </div>
      </div>
    );
  }
});
