var Song = React.createClass({
  render: function() {
    return (
      <span>
        { this.props.song.attributes.title }
      </span>);
  }
})
