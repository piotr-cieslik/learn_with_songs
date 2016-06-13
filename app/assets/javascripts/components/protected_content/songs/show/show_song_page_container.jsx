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
        Materialize.toast('Usunięto piosnekę.', 4000);
      }.bind(this),
      error: function(){
      }
    });
  },
  render: function(){
    var matchingSongs = this.props.songs.filter(function(s){
      return s.id == this.props.params.id;
    }, this);

    var translations = this.props.translations.filter(function(t){
      return t['attributes']['song-id'] == this.props.params.id;
    }, this);

    var song = matchingSongs.length == 1 ? matchingSongs[0] : null;

    if(song){
      var songComponent = <ShowSongPageSong
        song={ song }
        translations={ translations }
        onDelete={ this.handleDeleteSong } />;

      var translationsComponent = <ShowSongPageTranslations
        songId={ song.id }
        translations={ translations } />
    }
    else{
      var songComponent = <ShowSongPageSongNotFound />
      var translationsComponent = null;
    }

    return <ShowSongPage
      songComponent={ songComponent }
      translationsComponent={ translationsComponent }
      songs={ this.props.songs }
      onSongDelete={ this.handleDeleteSong } />
  }
});
