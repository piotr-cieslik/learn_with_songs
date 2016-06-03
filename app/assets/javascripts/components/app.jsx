var App = React.createClass({
  getInitialState: function() {
    return { currentUser: null };
  },
  handleLoginFormSubmit: function(email, password){
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

    $.ajax({
      url: 'api/sessions',
      dataType: 'json',
      type: 'POST',
      contentType: "application/json",
      data: jsonData,
      success: function(data) {
        this.setState({ currentUser: data.data.attributes });
      }.bind(this),
      error: function(xhr, status, error) {
        alert('error');
      }.bind(this)
    });
  },
  render: function() {
    if (this.state.currentUser) {
      return <SongsList authorizationToken={ this.state.currentUser['auth-token'] } />;
    }
    return <LoginForm onLoginFormSubmit={ this.handleLoginFormSubmit } />;
  }
});

$(document).ready(function() {
  ReactDOM.render(
    <App/>,
    document.getElementById('app')
  );
});
