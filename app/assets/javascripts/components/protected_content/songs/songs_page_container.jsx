var SongsPageContainer = React.createClass({
  getInitialState: function(){
    return{
      songs: [],
      selectedSong: null,
      isCreatingNew: false,
    };
  },
  componentDidMount: function() {
    applicationStore.subscribe(this.handleStoreStateChange);
    var user = applicationStore.getState().user;
    var authorizationToken = user && user['attributes']['auth-token'];
    $.ajax({
      url: 'api/songs',
      dataType: 'json',
      type: 'GET',
      contentType: "application/json",
      headers:{
        'Authorization': authorizationToken
      },
      success: function(data){
        applicationStore.dispatch(Actions.fillSongs(data.data));
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
        applicationStore.dispatch(Actions.deleteSong(songId));
      }.bind(this),
      error: function(){
      }
    });
  },
  handleGoToNewSongPage: function(){
    applicationStore.dispatch(Actions.goToPage('/songs/new'));
  },
  handleStoreStateChange: function(){
    this.setState({ songs: applicationStore.getState().songs });
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
