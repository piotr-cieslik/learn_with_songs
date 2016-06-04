var LoginPage = React.createClass({
  render: function(){
    return(
      <div className="container">
        <LoginForm
          onUserSuccessfullyLogin={ this.props.onUserSuccessfullyLogin }
          onUserErroneouslyLogin={ this.props.onUserErroneouslyLogin } />
      </div>
    )
  }
});
