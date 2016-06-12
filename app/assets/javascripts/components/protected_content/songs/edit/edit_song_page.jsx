var EditSongPage = function(props){
  return(
    <div className="container">
      <div className="card">
        <div className='card-content'>
          <span className="card-title">Edycja piosenki</span>
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
  );
};
