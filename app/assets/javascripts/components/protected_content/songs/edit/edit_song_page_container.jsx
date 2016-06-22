var EditSongPageContainer = React.createClass({
  getInitialState: function(){
    return this.getStateFromProps(this.props);
  },
  componentWillReceiveProps: function(newProps){
    this.setState(this.getStateFromProps(newProps));
  },
  getStateFromProps: function(props){
    var matchingSong = props.songs.find(function(s){
      return s.get('id') == props.params.id;
    }, this);

    if(!matchingSong){
      return {}
    }

    var attributes = matchingSong.get('attributes');
    return {
      author: attributes.get('author'),
      title: attributes.get('title'),
      lyrics: attributes.get('lyrics')
    }
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
        },
      }
    });

    ajaxCall.put({
      url: '/api/songs/' + this.props.params.id,
      data: jsonData,
      success: function(data){
        applicationStore.dispatch(Actions.updateSong(Immutable.fromJS(data.data)));
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
