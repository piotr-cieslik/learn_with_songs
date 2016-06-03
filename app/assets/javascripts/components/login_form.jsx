var LoginForm = React.createClass({
  getInitialState: function() {
    return { email: "", password: "" };
  },
  handlePasswordChanged: function(e) {
    this.setState({ password: e.target.value });
  },
  handleEmailChanged: function(e) {
    this.setState({ email: e.target.value });
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var email = this.state.email.trim();
    var password = this.state.password.trim();
    if(!email || !password){
      return;
    }

    this.props.onLoginFormSubmit(email, password);
    this.setState({ email: "", password: "" });
  },
  render: function() {
    return (
      <form
        onSubmit={ this.handleSubmit } >
        <input
          type="text"
          placeholder="email"
          value={ this.state.email }
          onChange={ this.handleEmailChanged }></input>
        <input
          type="password"
          placeholder="password"
          value={ this.state.password }
          onChange={ this.handlePasswordChanged }></input>
        <input type="submit"></input>
      </form>
    );
  }
});
