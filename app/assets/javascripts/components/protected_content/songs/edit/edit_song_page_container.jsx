var EditSongPageContainer = React.createClass({
  getInitialState: function(){
    return {};
  },
  componentWillReceiveProps: function(newProps){
    var matchingSongs = newProps.songs.filter(function(s){
      return s.id == this.props.params.id;
    }, this);

    if(matchingSongs.length != 1){
      return;
    }
    var attributes = matchingSongs[0].attributes;
    this.setState({
      author: attributes.author,
      title: attributes.title,
      lyrics: attributes.lyrics
    });
  },
  handleSubmit: function(e){
    e.preventDefault();

    var jsonData = JSON.stringify({
      data: {
        id: this.props.params.id,
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
        applicationStore.dispatch(Actions.createSong(data.data))
        ReactRouter.browserHistory.push('/songs/' + data.data.id);
        Materialize.toast('Zaktualizowano piosnekę.', 4000);
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
    return <EditSongPage
      author={ this.state.author }
      title={ this.state.title }
      lyrics={ this.state.lyrics }
      onAuthorChanged={ this.handleAuthorChanged }
      onTitleChanged={ this.handleTitleChanged }
      onLyricsChanged={ this.handleLyricsChanged }
      onSubmit={ this.handleSubmit } />
  }
});
