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
          <div>
            { this.props.song.attributes.lyrics }
          </div>
        </div>
      </div>
    );
  }
});
