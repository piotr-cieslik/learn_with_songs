var Appplication = React.createClass({
  render: function() {
    return(
      <Layout>
        <ReactRouter.Router history={ ReactRouter.browserHistory }>
          <ReactRouter.Route path="/">
            <ReactRouter.Route path="login" component={ LoginPageContainer }></ReactRouter.Route>
            <ReactRouter.Route path="songs" component={ ProtectedContentContainer }>
              <ReactRouter.IndexRoute component={ SongsPageContainer } />
              <ReactRouter.Route path="new" component={ NewSongPageContainer } />
              <ReactRouter.Route path=":id" component={ SongsPageContainer } />
            </ReactRouter.Route>
          </ReactRouter.Route>
        </ReactRouter.Router>
      </Layout>
    );
  }
});

$(document).ready(function() {
  ReactDOM.render(
    <Appplication/>,
    document.getElementById('application')
  );
});
