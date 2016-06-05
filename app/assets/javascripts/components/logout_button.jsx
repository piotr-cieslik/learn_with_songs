var LogoutButton = React.createClass({
  getDefaultProps: function(){
    return {
      authorizationToken: null,
      onUserSuccessfullyLogout: function() {},
      onUserErroneouslyLogout: function() {}
    };
  },
  handleClick: function(e) {
    e.preventDefault();

    AjaxCall.delete({
      url: 'api/sessions/' + CurrentUser.getAuthorizationToken(),
      success: function(data) {
        CurrentUser.clear();
        this.props.onUserSuccessfullyLogout();
      }.bind(this),
      error: function(xhr, status, error) {
        this.props.onUserErroneouslyLogout();
      }.bind(this)
    });
  },
  render: function(){
    return (
      <a href="#" onClick={ this.handleClick }>Wyloguj</a>
    );
  }
});
