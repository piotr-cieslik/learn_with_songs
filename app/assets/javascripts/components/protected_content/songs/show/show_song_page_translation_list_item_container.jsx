var ShowSongPageTranslationListItemContainer = React.createClass({
  handleDelete: function() {
    if(!confirm("Czy na pewno chcesz usunąć tłumaczenie?")){
      return;
    }

    ajaxCall.delete({
      url: "/api/translations/" +  this.props.translation.id,
      success: function(){
        applicationStore.dispatch(Actions.deleteTranslation( this.props.translation.id));
        Materialize.toast('Usunięto tłumaczenie.', 4000);
      }.bind(this),
      error: function(){
      }
    });
  },
  render: function(){
    return <ShowSongPageTranslationListItem
      translation={ this.props.translation }
      onDelete={ this.handleDelete } />
  }
});
