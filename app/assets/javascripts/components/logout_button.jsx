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
    var authorizationToken = this.props.authorizationToken;

    AjaxCall.delete({
      url: 'api/sessions/' + authorizationToken,
      success: function(data) {
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
