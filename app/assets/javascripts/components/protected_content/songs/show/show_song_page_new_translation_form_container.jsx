var ShowSongPageNewTranslationFormContainer = React.createClass({
  getInitialState: function(){
    return {
      foreignMeaning: "",
      nativeMeaning: ""
    }
  },
  handleForeignMeaningChange: function(e){
    this.setState({ foreignMeaning: e.target.value })
  },
  handleNativeMeaningChange: function(e){
    this.setState({ nativeMeaning: e.target.value })
  },
  handleSubmit: function(e){
    e.preventDefault();

    var jsonData = JSON.stringify({
      data: {
        type: "translations",
        attributes: {
          'foreign-meaning': this.state.foreignMeaning,
          'native-meaning': this.state.nativeMeaning,
          'song-id': 53,
        }
      }
    });

    ajaxCall.post({
      url: '/api/translations',
      data: jsonData,
      success: function(data){
        applicationStore.dispatch(Actions.createTranslation(data.data));
        Materialize.toast('Dodano tłumaczenie.', 4000);
      }.bind(this),
      error: function(xhr, status, error) {
      }.bind(this)
    });
  },
  handleClear: function(e){
    this.setState({
      foreignMeaning: "",
      nativeMeaning: ""
    });
  },
  render: function(){
    return <ShowSongPageNewTranslationForm
      foreignMeaning={ this.state.foreignMeaning }
      nativeMeaning={ this.state.nativeMeaning }
      onForeignMeaningChange={ this.handleForeignMeaningChange }
      onNativeMeaningChange={ this.handleNativeMeaningChange }
      onSubmit={ this.handleSubmit }
      onClear={ this.handleClear } />
  }
});
