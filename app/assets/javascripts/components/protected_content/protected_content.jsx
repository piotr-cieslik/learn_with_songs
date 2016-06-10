var ProtectedContent = React.createClass({
    render: function() {
      return (
        <Layout>
          { this.props.children }
        </Layout>
      );
    }
});
