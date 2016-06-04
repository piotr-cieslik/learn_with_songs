var SongDetails = React.createClass({
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
            <button type="button" className="btn btn-primary">Edytuj</button>
            <button type="button" className="btn btn-danger">Usuń</button>
          </div>
        </div>
      </div>
    );
  }
});
