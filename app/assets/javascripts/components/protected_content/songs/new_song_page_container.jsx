var NewSongPageContainer = React.createClass({
  handleSubmit: function(){
    var jsonData = JSON.stringify({
      data: {
        type: "song",
        attributes: {
          author: this.state.author,
          title: this.state.title,
          lyrics: this.state.lyrics,
        }
      }
    });

    ajaxCall.post({
      url: '/api/songs',
      data: jsonData,
      success: function(data){
        applicationStore.dispatch(Actions.goToPage('/songs'));
      }.bind(this),
      error: function(xhr, status, error) {
      }.bind(this)
    });
  },
  handleClose: function(e) {
    applicationStore.dispatch(Actions.goToPage('/songs'));
  },
  handleAuthorChanged: function(e) {
    this.setState({ author: e.target.value });
  },
  handleTitleChanged: function(e) {
    this.setState({ title: e.target.value });
  },
  handleLyricsChanged: function(e) {
    this.setState({ lyrics: e.target.value });
  },
  render: function(){
    return <NewSongPage
      onAuthorChanged={ this.handleAuthorChanged }
      onTitleChanged={ this.handleTitleChanged }
      onLyricsChanged={ this.handleLyricsChanged }
      onSubmit={ this.handleSubmit }
      onClose={ this.handleClose }/>
  }
});
