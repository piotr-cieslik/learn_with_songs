var Song = React.createClass({
  handleOnClick: function(){
    this.props.onSongSelect(this.props.song);
  },
  render: function() {
    var className="list-group-item";
    if(this.props.isSelected){
      className += " active";
    }
    return (
      <li className={ className } onClick={ this.handleOnClick }>
        <div>
          { this.props.song.attributes.author }
        </div>
        <div>
          { this.props.song.attributes.title }
        </div>
      </li>
    );
  }
})
