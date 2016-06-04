var App = React.createClass({
  getInitialState: function() {
    return { currentUser: null };
  },
  handleUserSuccessfullyLogin: function(user){
    this.setState({ currentUser: user });
  },
  handleUserSuccessfullyLogout: function(){
    this.setState({ currentUser: null });
  },
  render: function() {
    if (this.state.currentUser) {
      var authorizationToken = this.state.currentUser['attributes']['auth-token'];
      return(
        <div>
          <MenuBar
            authorizationToken={ authorizationToken }
            onUserSuccessfullyLogout ={ this.handleUserSuccessfullyLogout } />
          <SongsPage
            authorizationToken={ authorizationToken } />;
        </div>
      );
    }
    return <LoginPage
      onUserSuccessfullyLogin={ this.handleUserSuccessfullyLogin } />;
  }
});

$(document).ready(function() {
  ReactDOM.render(
    <App/>,
    document.getElementById('app')
  );
});
