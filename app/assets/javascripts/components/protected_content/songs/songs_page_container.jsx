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
  handleGoToNewSongPage: function(){
    appStore.dispatch(Actions.goToPage('/songs/new'));
  },
  handleStoreStateChange: function(){
    this.setState({ songs: appStore.getState().songs });
  },
  render: function(){
    return <SongsPage
      songs={ this.state.songs }
      selectedSong={ this.state.selectedSong }
      onSongSelect={ this.handleSongSelect }
      onGoToNewSongPage= { this.handleGoToNewSongPage }
      onDeleteSong={ this.handleDeleteSong }/>;
  }
});
