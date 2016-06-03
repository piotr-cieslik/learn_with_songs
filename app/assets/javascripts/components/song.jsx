var Song = React.createClass({
  render: function() {
    return (
      <div>
        { this.props.song.attributes.title }
      </div>);
  }
})
