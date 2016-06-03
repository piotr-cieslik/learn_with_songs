var SongsList=React.createClass({
  getInitialState: function() {
    return { songs: [] };
  },
  componentDidMount: function() {
    $.ajax({
      url: 'api/songs',
      dataType: 'json',
      type: 'GET',
      headers:{
        'Authorization': this.props.authorizationToken
      },
      contentType: "application/json",
      success: function(data) {
        this.setState({ songs: data.data })
      }.bind(this),
      error: function(xhr, status, err) {
      }.bind(this)
    });
  },
  render: function(){
    var songs = this.state.songs.map(function(song) {
      return (
        <li className="list-group-item">
          <Song song={ song } key={ song.id }></Song>
        </li>
      );
    });
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          Lista piosenek
        </div>
        <ul className="list-group">
          { songs }
        </ul>
      </div>
    );
  }
});
