var LoginPageContainer = React.createClass({
  getInitialState: function() {
    return { email: "", password: "", invalid: false };
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

    ajaxCall.post({
      url: '/api/sessions',
      data: jsonData,
      success: function(data){
        cookies.setJson('current_user', data.data, 1);
        applicationStore.dispatch(Actions.login(data.data));
        ReactRouter.browserHistory.push('/songs');
      }.bind(this),
      error: function(xhr, status, error) {
        this.setState({ password: "", invalid: true });
      }.bind(this)
    });
  },
  render: function(){
    return <LoginPage
      email={ this.state.email }
      password={ this.state.password }
      invalid={ this.state.invalid }
      onPasswordChange={ this.handlePasswordChange }
      onEmailChange={ this.handleEmailChange }
      onSubmit={ this.handleSubmit }></LoginPage>
  }
});
