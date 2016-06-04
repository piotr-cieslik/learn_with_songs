var LoginPage = React.createClass({
  handleUserSuccessfullyLogin: function(user){
    this.props.onUserSuccessfullyLogin(user);
  },
  render: function(){
    return(
      <div className="container">
        <LoginForm onUserSuccessfullyLogin={ this.handleUserSuccessfullyLogin } />
      </div>
    )
  }
});
