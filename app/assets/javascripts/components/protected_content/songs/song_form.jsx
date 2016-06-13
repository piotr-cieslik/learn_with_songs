var SongForm = function(props){
  return(
    <form
      onSubmit={ props.onSubmit }>

      <div className="row">
        <div className="input-field col s12">
          <input
            id="author"
            type="text"
            value={ props.author || '' }
            onChange={ props.onAuthorChanged } required/>
          <label
            className={ props.author && "active" }
            htmlFor="author">autor</label>
        </div>
      </div>

      <div className="row">
        <div className="input-field col s12">
          <input
            id="title"
            type="text"
            value={ props.title || '' }
            onChange={ props.onTitleChanged } required/>
          <label
            className={ props.title && "active" }
            htmlFor="title">tytuł</label>
        </div>
      </div>

      <div className="row">
        <div className="input-field col s12">
          <textarea
            id="lyrics"
            className="materialize-textarea"
            value={ props.lyrics || '' }
            onChange={ props.onLyricsChanged } required/>
          <label
            className={ props.lyrics && "active" }
            htmlFor="lyrics">tekst</label>
        </div>
      </div>

      <div className="row">
        <div className="col s12">
          <div className="buttons-bar-left">
            <button
              className="btn"
              type="submit">
              Zapisz
            </button>

            <ReactRouter.Link
              to="/songs"
              className="btn red darken-1">
                Anuluj
            </ReactRouter.Link>
          </div>
        </div>
      </div>

    </form>
  );
};
