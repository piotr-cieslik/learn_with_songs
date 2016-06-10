var NewSongPage = function(props){
  return(
  <div>
    <div className="right-align">
      <ReactRouter.Link to="/songs" className="btn">
        zamknij
      </ReactRouter.Link>
    </div>
    <div className="container">
      <form
        onSubmit={ props.onSubmit }>
        <div className="input-field">
          <input
            id="author"
            type="text"
            onChange={ props.onAuthorChanged }></input>
          <label for="author">Autor</label>
        </div>
        <div className="input-field">
          <input
            id="title"
            type="text"
            onChange={ props.onTitleChanged } />
          <label for="title">Tytuł</label>
        </div>
        <div className="input-field">
          <textarea
            id="lyrics"
            className="materialize-textarea"
            onChange={ props.onLyricsChanged } />
          <label for="lyrics">Tekst</label>
        </div>
        <button
          className="btn"
          type="submit">
          Zapisz
        </button>
      </form>
    </div>
  </div>
  );
};
