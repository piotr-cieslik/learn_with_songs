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
        <div className="form-group">
          <label>Email:</label>
          <input
            className="form-control"
            type="text"
            placeholder="email"
            value={ this.state.email }
            onChange={ this.handleEmailChanged }></input>
        </div>
        <div className="form-group">
          <label>Hasło:</label>
          <input
            className="form-control"
            type="password"
            placeholder="hasło"
            value={ this.state.password }
            onChange={ this.handlePasswordChanged }></input>
        </div>
        <button
          className="btn btn-primary"
          type="submit">
          Zaloguj
        </button>
      </form>
    );
  }
});
