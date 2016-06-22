var NewSongPageContainer = React.createClass({
  getInitialState: function(){
    return {};
  },
  handleSubmit: function(e){
    e.preventDefault();

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
        applicationStore.dispatch(Actions.createSong(Immutable.fromJS(data.data)))
        ReactRouter.browserHistory.push('/songs/' + data.data.id);
        Materialize.toast('Dodano piosnekę.', 4000);
      }.bind(this),
      error: function(xhr, status, error) {
      }.bind(this)
    });
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
      author={ this.state.author }
      title={ this.state.title }
      lyrics={ this.state.lyrics }
      onAuthorChanged={ this.handleAuthorChanged }
      onTitleChanged={ this.handleTitleChanged }
      onLyricsChanged={ this.handleLyricsChanged }
      onSubmit={ this.handleSubmit } />
  }
});
