var SongsDataLoader = React.createClass({
  componentDidMount: function(){
    ajaxCall.get({
      url: '/api/songs',
      success: function(data){
        var immutableData = Immutable.fromJS(data.data);
        applicationStore.dispatch(Actions.fillSongs(immutableData));
      }.bind(this),
      error: function(){
      }.bind(this)
    });

    ajaxCall.get({
      url: '/api/translations',
      success: function(data){
        var immutableData = Immutable.fromJS(data.data);
        applicationStore.dispatch(Actions.fillTranslations(immutableData));
      }.bind(this),
      error: function(){
      }.bind(this)
    });
  },
  render: function(){
    return <div>{ this.props.children }</div>
  }
});
