var SongContainer = React.createClass({
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

    return <Song
      song={ this.props.song }
      onSongDelete={ this.handleDeleteSong } />
  }
});
