var App = React.createClass({
  getInitialState: function() {
    return {
      notification: {
        type: null,
        message: null
      }
    };
  },
  handleUserSuccessfullyLogin: function(user){
    this.setState({
      notification: {
        type: "success",
        message: "Pomyślnie zalogowano."
      }
    });
  },
  handleUserErroneouslyLogin: function(){
    this.setState({
      notification: {
        type: "danger",
        message: "Niepoprawny email lub hasło."
      }
    });
  },
  handleUserSuccessfullyLogout: function(){
    this.setState({
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

    var currentUser = CurrentUser.get();
    if (currentUser) {
      return(
        <div>
          <MenuBar
            onUserSuccessfullyLogout={ this.handleUserSuccessfullyLogout } />
          { notificationBar }
          <SongsPageContainer />;
        </div>
      );
    }
    return(
      <div>
        { notificationBar }
        <LoginPage
          onUserSuccessfullyLogin={ this.handleUserSuccessfullyLogin }
          onUserErroneouslyLogin={this.handleUserErroneouslyLogin} />;
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
