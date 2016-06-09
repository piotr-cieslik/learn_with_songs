var LogoutButton = React.createClass({
  handleClick: function(e) {
    e.preventDefault();

    var token = applicationStore.getState().user.attributes['auth-token']
    AjaxCall.delete({
      url: 'api/sessions/' + token,
      success: function(data) {
        applicationStore.dispatch(Actions.logout());
        ReactRouter.browserHistory.push('/login');
      }.bind(this),
      error: function(xhr, status, error) {
      }.bind(this)
    });
  },
  render: function(){
    return (
      <a href="#" onClick={ this.handleClick }>Wyloguj</a>
    );
  }
});
