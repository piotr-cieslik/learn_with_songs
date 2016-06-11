var ShowSongPageContainer = React.createClass({
  handleDeleteSong: function(){
    if(!confirm("Czy na pewno chcesz usunąć piosenkę?")){
      return;
    }
    var songId = this.props.params.id;
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
    var matchingSongs = this.props.songs.filter(function(s){
      return s.id == this.props.params.id;
    }, this);

    if(matchingSongs.length != 1){
      return null;
    }

    var song = matchingSongs[0];
    return <ShowSongPage
      song={ song }
      songs={ this.props.songs }
      onSongDelete={ this.handleDeleteSong } />
  }
});
