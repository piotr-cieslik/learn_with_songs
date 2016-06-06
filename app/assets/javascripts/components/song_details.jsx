var SongDetails = React.createClass({
  handleDeleteClick: function(){
    var remove = confirm("Czy na pewno chcesz usunąć piosenkę?");
    if(!remove){
      return;
    }

    AjaxCall.delete({
      url: "api/songs/" + this.props.song.id,
      success: function(){
        this.props.onSongSuccessfullyDeleted(this.props.song);
      }.bind(this),
      error: function(){
        alert("error :(");
      }
    });
  },
  render: function(){
    if(!this.props.song){
      return null;
    }

    return(
      <div className="panel panel-default">
        <div className="panel-heading">
          { this.props.song.attributes.author } - { this.props.song.attributes.title }
        </div>
        <div className="panel-body">
          <pre>
            { this.props.song.attributes.lyrics }
          </pre>
          <div className="btn-toolbar pull-right">
            <button
              type="button"
              className="btn btn-danger"
              onClick={ this.handleDeleteClick }>Usuń</button>
          </div>
        </div>
      </div>
    );
  }
});
