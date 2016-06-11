var NewSongPage = function(props){
  return(
  <div>
    <div className="right-align">
      <ReactRouter.Link to="/songs" className="btn">
        zamknij
      </ReactRouter.Link>
    </div>
    <div className="container">
      <div className="card">
        <div className='card-content'>
          <span className="card-title">Nowa piosenka</span>
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
        </div>
      </div>
    </div>
  </div>
  );
};
