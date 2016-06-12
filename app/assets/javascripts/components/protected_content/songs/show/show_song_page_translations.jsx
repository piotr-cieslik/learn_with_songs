var ShowSongPageTranslations = function(props){
  return(
    <div>
      <div className="card">
        <div className="card-content">
          <span className="card-title">Dodaj tłumaczenie</span>
          <form>
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="foreign-meaning"
                  type="text"
                  required/>
                <label
                  for="foreign-meaning">tekst</label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <input
                  id="native-meaning"
                  type="text"
                  required/>
                <label
                  for="native-meaning">tłumaczenie</label>
              </div>
            </div>

            <div className="row">
              <div className="col s12">
                <div className="buttons-bar-left">
                  <button
                    className="btn"
                    type="submit">
                    Dodaj
                  </button>

                  <ReactRouter.Link
                    to="#"
                    className="btn red darken-1">
                      Wyczyść
                  </ReactRouter.Link>
                </div>
              </div>
            </div>

          </form>
        </div>
      </div>

      <ShowSongPageTranslationsList
        translations={ props.translations } />
    </div>
  );
};
