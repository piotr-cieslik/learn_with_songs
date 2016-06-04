var MenuBar = React.createClass({
  render: function() {
    return(
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <LogoutButton
                authorizationToken={ this.props.authorizationToken }
                onUserSuccessfullyLogout ={ this.props.onUserSuccessfullyLogout } />
            </li>
          </ul>
        </div>
      </nav>
    );
  }
});
