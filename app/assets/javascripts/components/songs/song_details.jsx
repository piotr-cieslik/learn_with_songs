var SongDetails = React.createClass({
  handleDeleteSong: function(){
    this.props.onDeleteSong(this.props.song.id)
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
              onClick={ this.handleDeleteSong }>Usuń</button>
          </div>
        </div>
      </div>
    );
  }
});
