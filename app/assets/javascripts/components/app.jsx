var App = React.createClass({
  render: function() {
    return (
      <LoginForm />
    );
  }
});

$(document).ready(function() {
  ReactDOM.render(
    <App/>,
    document.getElementById('app')
  );
});
