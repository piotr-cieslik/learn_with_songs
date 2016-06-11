const mapStateToIndexSongPageContainerProps = function(state){
  return {
    songs: state.songs
  }
}

var IndexSongPageContainerFactory = ReactRedux.connect(mapStateToIndexSongPageContainerProps)(IndexSongPageContainer);
