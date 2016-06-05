var SongsPage = React.createClass({
  getInitialState: function(){
    return{
      currentSong: null,
      isCreatingNew: false,
    };
  },
  handleSongSelect: function(song){
    this.setState({
      currentSong: song,
      isCreatingNew: false
    });
  },
  handleCreateNewSong: function(){
    this.setState({
      currentSong: null,
      isCreatingNew: true
    });
  },
  handleSongSuccessfullyCreate: function(song){
    return{
      currentSong: song,
      isCreatingNew: false,
    };
  },
  render: function() {

    if(this.state.isCreatingNew){
      var content = <SongNewForm
        authorizationToken={ this.props.authorizationToken }
        onSongSuccessfullyCreate={ this.handleSongSuccessfullyCreate } />
    }
    else {
      var content = <SongDetails
        song={ this.state.currentSong } />
    }

    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2">
            <SongsList
              authorizationToken={ this.props.authorizationToken }
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
