var Appplication = React.createClass({
  render: function() {
    return(
      <ReactRouter.Router history={ ReactRouter.browserHistory }>
        <ReactRouter.Route path="/">
          <ReactRouter.Route path="login" component={ LoginPageContainer }></ReactRouter.Route>
          <ReactRouter.Route path="songs" component={ ProtectedContent }>
            <ReactRouter.IndexRoute component={ SongsPageContainer } />
            <ReactRouter.Route path="new" component={ NewSongPageContainer } />
            <ReactRouter.Route path=":id" component={ SongsPageContainer } />
          </ReactRouter.Route>
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
