const mapStateToShowSongPageContainerProps = function(state){
  return {
    songs: state.songs,
    translations: state.translations
  }
}

var ShowSongPageContainerFactory = ReactRedux.connect(mapStateToShowSongPageContainerProps)(ShowSongPageContainer);
