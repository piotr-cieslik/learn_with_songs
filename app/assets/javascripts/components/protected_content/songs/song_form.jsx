var SongForm = function(props){
  return(
    <form
      onSubmit={ props.onSubmit }>

      <div className="row">
        <div className="input-field col s12">
          <input
            id="author"
            type="text"
            value={ props.author }
            onChange={ props.onAuthorChanged } required/>
          <label
            className={ props.author && "active" }
            for="author">autor</label>
        </div>
      </div>

      <div className="row">
        <div className="input-field col s12">
          <input
            id="title"
            type="text"
            value={ props.title }
            onChange={ props.onTitleChanged } required/>
          <label
            className={ props.title && "active" }
            for="title">tytuł</label>
        </div>
      </div>

      <div className="row">
        <div className="input-field col s12">
          <textarea
            id="lyrics"
            className="materialize-textarea"
            value={ props.lyrics }
            onChange={ props.onLyricsChanged } required/>
          <label
            className={ props.lyrics && "active" }
            for="lyrics">tekst</label>
        </div>
      </div>

      <button
        className="btn"
        type="submit">
        Zapisz
      </button>
    </form>
  );
};
