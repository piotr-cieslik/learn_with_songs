var App = React.createClass({
  getInitialState: function() {
    var state = appStore.getState();
    return {
      url: state.url,
      notification: {
        type: null,
        message: null
      }
    };
  },
  componentDidMount: function() {
    appStore.subscribe(this.handleStoreStateChange);
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
  handleStoreStateChange: function(){
    this.setState({ url: appStore.getState().url });
  },
  render: function() {
    var notificationBar = (
      <NotificationBar
        type={ this.state.notification.type }
        message={ this.state.notification.message } />
    );

    var currentUser = CurrentUser.get();
    if (!currentUser) {
      return(
        <div>
          { notificationBar }
          <LoginPage
            onUserSuccessfullyLogin={ this.handleUserSuccessfullyLogin }
            onUserErroneouslyLogin={this.handleUserErroneouslyLogin} />;
        </div>
      );
    }

    if(this.state.url === '/songs/new'){
      return <NewSongPageContainer />;
    }

    return(
      <div>
        <MenuBar
          onUserSuccessfullyLogout={ this.handleUserSuccessfullyLogout } />
        <SongsPageContainer />;
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
