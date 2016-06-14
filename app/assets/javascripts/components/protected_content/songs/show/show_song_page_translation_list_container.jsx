var ShowSongPageTranslationListContainer = React.createClass({
  getInitialState: function(){
    return { showNativeMeanings: false };
  },
  handleShowNativeMeaningsChange: function(e){
    this.setState({ showNativeMeanings: e.target.checked });
  },
  render: function() {
    return <ShowSongPageTranslationList
      showNativeMeanings={ this.state.showNativeMeanings }
      onShowNativeMeaningsChange={ this.handleShowNativeMeaningsChange }
      translations={ this.props.translations } />
  }
});
