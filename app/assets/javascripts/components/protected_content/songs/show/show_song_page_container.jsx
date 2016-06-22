var ShowSongPageContainer = React.createClass({
  handleDeleteSong: function(){
    if(!confirm("Czy na pewno chcesz usunąć piosenkę?")){
      return;
    }
    var song = this.getCurrentSong();
    ajaxCall.delete({
      url: "/api/songs/" + song.get('id'),
      success: function(){
        applicationStore.dispatch(Actions.deleteSong(song));
        ReactRouter.browserHistory.push('/songs');
        Materialize.toast('Usunięto piosnekę.', 4000);
      }.bind(this),
      error: function(){
      }
    });
  },
  getCurrentSong: function(){
    return  this.props.songs.find(function(s){
      return s.get('id') == this.props.params.id;
    }, this);
  },
  render: function(){
    var song = this.getCurrentSong();

    var translations = this.props.translations.filter(function(t){
      return t.get('attributes').get('song-id') == this.props.params.id;
    }, this).toList();

    if(song){
      var songComponent = <ShowSongPageSong
        song={ song }
        translations={ translations }
        onDelete={ this.handleDeleteSong } />;

      var translationsComponent = <ShowSongPageTranslations
        songId={ song.get('id') }
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
