var ShowSongPageTranslationsListContainer = React.createClass({
  getInitialState: function(){
    return { showNativeMeanings: false };
  },
  handleShowNativeMeaningsChange: function(e){
    this.setState({ showNativeMeanings: e.target.checked });
  },
  render: function() {
    return <ShowSongPageTranslationsList
      showNativeMeanings={ this.state.showNativeMeanings }
      onShowNativeMeaningsChange={ this.handleShowNativeMeaningsChange }
      translations={ this.props.translations } />
  }
});
