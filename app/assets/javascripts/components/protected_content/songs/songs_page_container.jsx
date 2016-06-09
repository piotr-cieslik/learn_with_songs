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

    ajaxCall.get({
      url: 'api/songs',
      success: function(data){
        applicationStore.dispatch(Actions.fillSongs(data.data));
      }.bind(this),
      error: function(){
      }
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

    ajaxCall.delete({
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
