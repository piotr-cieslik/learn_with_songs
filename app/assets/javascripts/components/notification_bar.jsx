var NotificationBar = React.createClass({
  render: function(){
    if(!this.props.message || !this.props.type){
      return null;
    }

    var className = "alert alert-" + this.props.type + " alert-dismissible";
    return(
      <div className="container-fluid">
        <div className={ className } role="alert">
          <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          { this.props.message }
        </div>
      </div>
    );
  }
});
