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
          <label for="author">autor</label>
          <input
            id="author"
            type="text"
            onChange={ props.onAuthorChanged }></input>
        </div>
        <div className="input-field">
          <label for="title">tytuł</label>
          <input
            id="title"
            type="text"
            onChange={ props.onTitleChanged } />
        </div>
        <div className="input-field">
          <label for="lyrics">tekst</label>
          <textarea
            id="lyrics"
            className="materialize-textarea"
            onChange={ props.onLyricsChanged } />
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
