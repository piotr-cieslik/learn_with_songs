var SongsPage = React.createClass({
  render: function() {
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <SongsList authorizationToken={ this.props.authorizationToken } />
          </div>
        </div>
      </div>
    );
  }
});
