var Appplication = React.createClass({
  render: function() {
    return(
      <ReactRedux.Provider store={applicationStore}>
        <ReactRouter.Router history={ ReactRouter.browserHistory }>
          <ReactRouter.Route path="/login" component={ LoginPageContainer } />

          <ReactRouter.Route path="/songs" >
            <ReactRouter.Route component={ ProtectedContent }>
              <ReactRouter.Route component={ SongsDataLoader }>
                <ReactRouter.IndexRoute component={ IndexSongPageContainerFactory } />
                <ReactRouter.Route path="new" component={ NewSongPageContainer } />
                <ReactRouter.Route path=":id/edit" component={ EditSongPageContainerFactory } />
                <ReactRouter.Route path=":id" component={ ShowSongPageContainerFactory } />
              </ReactRouter.Route>
            </ReactRouter.Route>
          </ReactRouter.Route>
        </ReactRouter.Router>
      </ReactRedux.Provider>
    );
  }
});

$(document).ready(function() {
  ReactDOM.render(
    <Appplication/>,
    document.getElementById('application')
  );
});
