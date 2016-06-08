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
    return(
      <ReactRouter.Router history={ ReactRouter.browserHistory }>
        <ReactRouter.Route path="/">
          <ReactRouter.Route path="login" component={ LoginPageContainer }></ReactRouter.Route>
          <ReactRouter.Route path="songs" component={ ProtectedContentContainer }></ReactRouter.Route>
        </ReactRouter.Route>
      </ReactRouter.Router>
    );
  }
});

$(document).ready(function() {
  ReactDOM.render(
    <Appplication/>,
    document.getElementById('application')
  );
});
