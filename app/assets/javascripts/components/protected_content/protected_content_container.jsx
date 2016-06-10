var ProtectedContentContainer = React.createClass({
    render: function() {
      return (
        <ProtectedContent>
          { this.props.children }
        </ProtectedContent>
      );
    }
});
