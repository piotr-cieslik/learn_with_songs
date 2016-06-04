var App = React.createClass({
  getInitialState: function() {
    return { currentUser: null };
  },
  handleUserSuccessfullyLogin: function(user){
    this.setState({ currentUser: user });
  },
  render: function() {
    if (this.state.currentUser) {
      return(
        <div>
          <MenuBar />
          <SongsPage
            authorizationToken={ this.state.currentUser['attributes']['auth-token'] } />;
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
