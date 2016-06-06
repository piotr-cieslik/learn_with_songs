var SongsPageContainer = React.createClass({
  getInitialState: function(){
    return{
      songs: [],
      selectedSong: null,
      isCreatingNew: false,
    };
  },
  componentDidMount: function() {
    appStore.subscribe(this.handleStoreStateChange);

    $.ajax({
      url: 'api/songs',
      dataType: 'json',
      type: 'GET',
      contentType: "application/json",
      headers:{
        'Authorization': CurrentUser.getAuthorizationToken()
      },
      success: function(data){
        appStore.dispatch(Actions.fillSongs(data.data));
      }.bind(this),
      error: function(xhr, status, err){
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
  handleDeleteSong: function(songId){
    if(!confirm("Czy na pewno chcesz usunąć piosenkę?")){
      return;
    }

    AjaxCall.delete({
      url: "api/songs/" + songId,
      success: function(){
        appStore.dispatch(Actions.deleteSong(songId));
      }.bind(this),
      error: function(){
      }
    });
  },
  handleStoreStateChange: function(){
    this.setState({ songs: appStore.getState().songs });
  },
  render: function(){
    return <SongsPage
      songs={ this.state.songs }
      selectedSong={ this.state.selectedSong }
      isCreatingNew={ this.state.isCreatingNew }
      onSongSelect={ this.handleSongSelect }
      onCreateNewSong= { this.handleCreateNewSong }
      onSongSuccessfullyCreate={ this.handleSongSuccessfullyCreate }
      onDeleteSong={ this.handleDeleteSong }/>;
  }
});
