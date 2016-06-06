var SongsPage = React.createClass({
  render: function() {
    if(this.props.isCreatingNew){
      var content = <SongNewForm
        onSongSuccessfullyCreate={ this.props.onSongSuccessfullyCreate } />
    }
    else {
      var content = <SongDetails
        song={ this.props.selectedSong }
        onSongSuccessfullyDeleted={ this.props.onSongSuccessfullyDeleted }/>
    }

    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2">
            <SongsList
              songs={ this.props.songs }
              selectedSong={ this.props.selectedSong }
              onSongSelect={ this.props.onSongSelect }
              onCreateNewSong= { this.props.onCreateNewSong } />
          </div>
          <div className="col-lg-8">
            { content }
          </div>
        </div>
      </div>
    );
  }
});
