var App = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello, world!
      </div>
    );
  }
});

$(document).ready(function() {
  ReactDOM.render(
    <App/>,
    document.getElementById('app')
  );
});
