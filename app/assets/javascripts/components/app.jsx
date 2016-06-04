var App = React.createClass({
  getInitialState: function() {
    return {
      currentUser: null,
      notification: {
        type: null,
        message: null
      }
    };
  },
  handleUserSuccessfullyLogin: function(user){
    this.setState({
      currentUser: user,
      notification: {
        type: "success",
        message: "Pomyślnie zalogowano."
      }
    });
  },
  handleUserSuccessfullyLogout: function(){
    this.setState({
      currentUser: null,
      notification: {
        type: "success",
        message: "Pomyślnie wylogowano."
      }
    });
  },
  render: function() {
    var notificationBar = (
      <NotificationBar
        type={ this.state.notification.type }
        message={ this.state.notification.message } />
    );
    if (this.state.currentUser) {
      var authorizationToken = this.state.currentUser['attributes']['auth-token'];
      return(
        <div>
          <MenuBar
            authorizationToken={ authorizationToken }
            onUserSuccessfullyLogout ={ this.handleUserSuccessfullyLogout } />
          { notificationBar }
          <SongsPage
            authorizationToken={ authorizationToken } />;
        </div>
      );
    }
    return(
      <div>
        { notificationBar }
        <LoginPage
          onUserSuccessfullyLogin={ this.handleUserSuccessfullyLogin } />;
      </div>
    );
  }
});

$(document).ready(function() {
  ReactDOM.render(
    <App/>,
    document.getElementById('app')
  );
});
