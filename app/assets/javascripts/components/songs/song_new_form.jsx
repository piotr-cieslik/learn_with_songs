var SongNewForm = React.createClass({
  getInitialState: function() {
    return {
      author: "",
      title: "",
      lyrics: ""
    };
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
  handleCreate: function(){
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

    AjaxCall.post({
      url: 'api/songs',
      data: jsonData,
      headers:{
        'Authorization': this.props.authorizationToken
      },
      success: function(data){
        this.props.onSongSuccessfullyCreate(data.data);
      }.bind(this),
      error: function(xhr, status, error) {
        this.props.onSongErroneouslyCreate();
      }.bind(this)
    });
  },
  handleCancel: function() {

  },
  render: function(){
    return(
      <div className="panel panel-default">
        <div className="panel-heading">
          <span>Nowa piosenka</span>
        </div>
        <div className="panel-body">
          <form className="form-horizontal">
            <div className="form-group">
              <label className="col-sm-2 control-label">Autor</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Autor"
                  onChange={ this.handleAuthorChanged }></input>
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-2 control-label">Tytuł</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Tytuł"
                  onChange={ this.handleTitleChanged }></input>
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-2 control-label">Tekst</label>
              <div className="col-sm-10">
                <textarea
                  className="form-control"
                  rows="10"
                  placeholder="Tekst"
                  onChange={ this.handleLyricsChanged }></textarea>
              </div>
            </div>
          </form>
        </div>
        <div className="panel-footer clearfix">
          <div className="btn-toolbar pull-right">
            <button
              className="btn btn-primary"
              onClick={ this.handleCreate }>Stwórz</button>
            <button
              className="btn btn-danger"
              onClick={ this.handleCancel }>Anuluj</button>
          </div>
        </div>
      </div>
    );
  }
});
