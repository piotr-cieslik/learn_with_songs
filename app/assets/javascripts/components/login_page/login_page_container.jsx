var LoginPageContainer = React.createClass({
  getInitialState: function() {
    return { email: "", password: "" };
  },
  handlePasswordChange: function(e) {
    this.setState({ password: e.target.value });
  },
  handleEmailChange: function(e) {
    this.setState({ email: e.target.value });
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var email = this.state.email.trim();
    var password = this.state.password.trim();

    var jsonData = JSON.stringify({
      data: {
        id: 0,
        type: "session",
        attributes: {
          email: email,
          password: password
        }
      }
    });

    AjaxCall.post({
      url: 'api/sessions',
      data: jsonData,
      success: function(data){
        appStore.dispatch(Actions.login(data.data));
        ReactRouter.browserHistory.push('/songs');
      }.bind(this),
      error: function(xhr, status, error) {
        this.setState({ password: "" });
      }.bind(this)
    });
  },
  render: function(){
    return <LoginPage
      onPasswordChange={ this.handlePasswordChange }
      onEmailChange={ this.handleEmailChange }
      onSubmit={ this.handleSubmit }></LoginPage>
  }
});
