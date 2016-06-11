var Appplication = React.createClass({
  render: function() {
    return(
      <ReactRouter.Router history={ ReactRouter.browserHistory }>
        <ReactRouter.Route path="/login" component={ LoginPageContainer } />

        <ReactRouter.Route path="/songs" >
          <ReactRouter.Route component={ ProtectedContent }>
            <ReactRouter.Route component={ SongsDataLoader }>
              <ReactRouter.IndexRoute component={ SongsPageContainer } />
              <ReactRouter.Route path="new" component={ NewSongPageContainer } />
              <ReactRouter.Route path=":id" component={ SongsPageContainer } />
            </ReactRouter.Route>
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
