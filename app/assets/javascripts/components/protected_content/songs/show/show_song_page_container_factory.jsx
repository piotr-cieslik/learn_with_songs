const mapStateToShowSongPageContainerProps = function(state){
  return {
    songs: state.songs
  }
}

var ShowSongPageContainerFactory = ReactRedux.connect(mapStateToShowSongPageContainerProps)(ShowSongPageContainer);
