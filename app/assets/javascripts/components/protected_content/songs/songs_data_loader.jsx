var SongsDataLoader = React.createClass({
  componentDidMount: function(){
    ajaxCall.get({
      url: '/api/songs',
      success: function(data){
        applicationStore.dispatch(Actions.fillSongs(data.data));
        applicationStore.dispatch(Actions.fillTranslations(data.included));
      }.bind(this),
      error: function(){
      }.bind(this)
    });
  },
  render: function(){
    return <div>{ this.props.children }</div>
  }
});
