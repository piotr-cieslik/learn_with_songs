var SongsPage = React.createClass({
  getInitialState: function(){
    return{
      currentSong: null
    };
  },
  handleSongSelect: function(song){
    this.setState({ currentSong: song })
  },
  render: function() {
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2">
            <SongsList
              authorizationToken={ this.props.authorizationToken }
              onSongSelect={ this.handleSongSelect } />
          </div>
          <div className="col-lg-8">
            <SongDetails song={ this.state.currentSong } />
          </div>
        </div>
      </div>
    );
  }
});
