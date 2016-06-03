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
    var dataToSend = {
      data: {
        id: 0,
        type: "session",
        attributes: {
          email: email,
          password: password
        }
      }
    };

    $.ajax({
      url: 'api/sessions',
      dataType: 'json',
      type: 'POST',
      contentType: "application/json",
      data: JSON.stringify(dataToSend),
      success: function(data) {
        alert('success');
      }.bind(this),
      error: function(xhr, status, error) {
        alert('error');
      }.bind(this)
    });

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
