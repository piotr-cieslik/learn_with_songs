var LoginPage = function(params){
  return(
    <div className="container">
      <div className="row">
        <div className="col l8">
          <div className="card">
            <div className="card-content">
              <form
                onSubmit={ params.onSubmit } >
                <div
                  className="input-field">
                  <input
                    id="email"
                    type="text"
                    value={ params.email }
                    onChange={ params.onEmailChange } />
                  <label for="email">Email:</label>
                </div>
                <div
                  className="input-field">
                  <input
                    id="password"
                    type="password"
                    placeholder="hasło"
                    value={ params.password }
                    onChange={ params.onPasswordChange } />
                  <label for="password">Hasło:</label>
                </div>
                <button
                  className="btn waves-effect waves-light"
                  type="submit">
                  Zaloguj
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
