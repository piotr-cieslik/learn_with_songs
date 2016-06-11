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
        ReactRouter.browserHistory.push('/songs');
        Materialize.toast('Usunięto piosnekę.', 4000)
      }.bind(this),
      error: function(){
      }
    });
  },
  render: function(){
    var matchingSongs = this.props.songs.filter(function(s){
      return s.id == this.props.params.id;
    }, this);

    var song = matchingSongs.length == 1 ? matchingSongs[0] : null;
    if(song){
      var songComponent = <ShowSongPageSong
        song={ song }
        onDelete={ this.handleDeleteSong } />
    }
    else{
      var songComponent = <ShowSongPageSongNotFound />
    }

    return <ShowSongPage
      songComponent={ songComponent }
      songs={ this.props.songs }
      onSongDelete={ this.handleDeleteSong } />
  }
});
