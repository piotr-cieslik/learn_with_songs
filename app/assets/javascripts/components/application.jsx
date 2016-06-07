var Appplication = React.createClass({
  getInitialState: function() {
    var state = appStore.getState();
    return{ url: state.url };
  },
  componentDidMount: function() {
    appStore.subscribe(this.handleStoreStateChange);
  },
  handleUserSuccessfullyLogin: function(user){
    appStore.dispatch(Actions.goToPage('/songs'));
  },
  handleUserErroneouslyLogin: function(){
    appStore.dispatch(Actions.goToPage('/login'));
  },
  handleUserSuccessfullyLogout: function(){
    appStore.dispatch(Actions.goToPage('/login'));
  },
  handleStoreStateChange: function(){
    this.setState({ url: appStore.getState().url });
  },
  render: function() {
    var currentUser = CurrentUser.get();
    if (!currentUser) {
      return(
        <LoginPage
          onUserSuccessfullyLogin={ this.handleUserSuccessfullyLogin }
          onUserErroneouslyLogin={this.handleUserErroneouslyLogin} />
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
    <Appplication/>,
    document.getElementById('application')
  );
});
