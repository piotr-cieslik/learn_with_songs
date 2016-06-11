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
          <SongForm
            author={ props.author }
            title={ props.title }
            lyrics={ props.lyrics }
            onAuthorChanged={ props.onAuthorChanged }
            onTitleChanged={ props.onTitleChanged }
            onLyricsChanged={ props.onLyricsChanged }
            onSubmit={ props.onSubmit } />
        </div>
      </div>
    </div>
  </div>
  );
};
