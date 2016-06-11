var SongDetails = React.createClass({
  handleDeleteSong: function(){
    if(!confirm("Czy na pewno chcesz usunąć piosenkę?")){
      return;
    }

    var songId = this.props.song.id;
    ajaxCall.delete({
      url: "/api/songs/" + songId,
      success: function(){
        applicationStore.dispatch(Actions.deleteSong(songId));
      }.bind(this),
      error: function(){
      }
    });
  },
  render: function(){
    if(!this.props.song){
      return null;
    }

    return(
      <div className="card">
        <div className="card-content">
          <span className="card-title">
            { this.props.song.attributes.author } - { this.props.song.attributes.title }
          </span>
          <pre>
            { this.props.song.attributes.lyrics }
          </pre>
        </div>

        <div className="card-action">
          <a
            href="#"
            className="blue-text">Edytuj</a>
          <a
            href="#"
            className="red-text"
            onClick={ this.handleDeleteSong }>Usuń</a>
        </div>
      </div>
    );
  }
});
