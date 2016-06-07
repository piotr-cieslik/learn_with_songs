var NewSongPage = function(props){
  return(
    <div>
      <div className="container-fluid">
        <div className="text-right">
          <button type="button" className="btn btn-link" onClick={ props.onClose }>
            <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
          </button>
        </div>
      </div>
      <div className="container">
        <form
          className="form-horizontal"
          onSubmit={ props.onSubmit }>
          <div className="form-group">
            <label className="col-sm-2 control-label">Autor</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                placeholder="Autor"
                onChange={ props.onAuthorChanged }></input>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">Tytuł</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                placeholder="Tytuł"
                onChange={ props.onTitleChanged }></input>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">Tekst</label>
            <div className="col-sm-10">
              <textarea
                className="form-control"
                rows="25"
                placeholder="Tekst"
                onChange={ props.onLyricsChanged }></textarea>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button
                className="btn btn-primary"
                type="submit">
                Zapisz
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
