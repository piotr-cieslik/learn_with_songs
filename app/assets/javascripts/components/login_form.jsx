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
        CurrentUser.set(data.data);
        this.props.onUserSuccessfullyLogin(data.data);
      }.bind(this),
      error: function(xhr, status, error) {
        this.props.onUserErroneouslyLogin();
        this.setState({ password: "" });
      }.bind(this)
    });
  },
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-body">
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
        </div>
      </div>
    );
  }
});
