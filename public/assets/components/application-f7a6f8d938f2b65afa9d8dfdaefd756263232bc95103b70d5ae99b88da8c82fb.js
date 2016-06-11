var Appplication = React.createClass({
  displayName: "Appplication",

  render: function () {
    return React.createElement(
      ReactRedux.Provider,
      { store: applicationStore },
      React.createElement(
        ReactRouter.Router,
        { history: ReactRouter.browserHistory },
        React.createElement(ReactRouter.Route, { path: "/login", component: LoginPageContainer }),
        React.createElement(
          ReactRouter.Route,
          { path: "/songs" },
          React.createElement(
            ReactRouter.Route,
            { component: ProtectedContent },
            React.createElement(
              ReactRouter.Route,
              { component: SongsDataLoader },
              React.createElement(ReactRouter.IndexRoute, { component: IndexSongPageContainerFactory }),
              React.createElement(ReactRouter.Route, { path: "new", component: NewSongPageContainer }),
              React.createElement(ReactRouter.Route, { path: ":id", component: ShowSongPageContainerFactory })
            )
          )
        )
      )
    );
  }
});

$(document).ready(function () {
  ReactDOM.render(React.createElement(Appplication, null), document.getElementById('application'));
});