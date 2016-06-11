var SongsPageContainer = React.createClass({
  getInitialState: function(){
    return{ songs: applicationStore.getState().songs };
  },
  componentDidMount: function() {
    applicationStore.subscribe(this.handleStoreStateChange);
  },
  handleStoreStateChange: function(){
    this.setState({ songs: applicationStore.getState().songs });
  },
  render: function(){
    var currentSongId = this.props.params.id;
    var currentSong = this.state.songs.filter(function(s){
      return s.id == currentSongId;
    })[0];
    return <SongsPage
      songs={ this.state.songs }
      currentSong={ currentSong } />;
  }
});
