var ProtectedContent = React.createClass({
  render: function() {
    user = applicationStore.getState().user;
    if(!user){
      ReactRouter.browserHistory.push('/login');
      return null;
    }

    return (
      <Layout>
        { this.props.children }
      </Layout>
    );
  }
});
