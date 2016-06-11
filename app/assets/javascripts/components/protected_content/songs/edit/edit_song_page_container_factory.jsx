const mapStateToEditSongPageContainerProps = function(state){
  return {
    songs: state.songs
  }
}

var EditSongPageContainerFactory = ReactRedux.connect(mapStateToEditSongPageContainerProps)(EditSongPageContainer);
