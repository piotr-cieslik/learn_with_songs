var SongsDataLoader = React.createClass({
  componentDidMount: function(){
    ajaxCall.get({
      url: '/api/songs',
      success: function(data){
        applicationStore.dispatch(Actions.fillSongs(data.data));
      }.bind(this),
      error: function(){
      }.bind(this)
    });
  },
  render: function(){
    return <div>{ this.props.children }</div>
  }
});
