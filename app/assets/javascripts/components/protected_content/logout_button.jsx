var LogoutButton = React.createClass({
  handleClick: function(e) {
    e.preventDefault();
    var token = applicationStore.getState().user.attributes['auth-token']
    ajaxCall.delete({
      url: '/api/sessions/' + token,
      success: function(data) {
        cookies.delete('current_user');
        applicationStore.dispatch(Actions.logout());
        ReactRouter.browserHistory.push('/');
      }.bind(this),
      error: function(xhr, status, error) {
      }.bind(this)
    });
  },
  render: function(){
    return (
      <a
        href="#"
        onClick={ this.handleClick }>Wyloguj</a>
    );
  }
});
