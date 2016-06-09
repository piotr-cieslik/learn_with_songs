var SongsPageContainer = React.createClass({
  getInitialState: function(){
    return{ songs: [] };
  },
  componentDidMount: function() {
    applicationStore.subscribe(this.handleStoreStateChange);

    ajaxCall.get({
      url: 'api/songs',
      success: function(data){
        applicationStore.dispatch(Actions.fillSongs(data.data));
      }.bind(this),
      error: function(){
      }.bind(this)
    });

  },
  handleDeleteSong: function(songId){
    if(!confirm("Czy na pewno chcesz usunąć piosenkę?")){
      return;
    }

    ajaxCall.delete({
      url: "api/songs/" + songId,
      success: function(){
        applicationStore.dispatch(Actions.deleteSong(songId));
      }.bind(this),
      error: function(){
      }
    });
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
      currentSong={ currentSong }
      onDeleteSong={ this.handleDeleteSong }/>;
  }
});
