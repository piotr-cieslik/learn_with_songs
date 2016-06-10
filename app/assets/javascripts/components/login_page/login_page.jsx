var LoginPage = function(params){
  return(
    <div className="container">
      <div className="row">
        <div className="col l8">
          <div className="card">
            <div className="card-content">
              <span className="card-title">Logowanie</span>
              <form
                onSubmit={ params.onSubmit } >
                <div
                  className="input-field">
                  <label for="email">email</label>
                  <input
                    id="email"
                    type="text"
                    value={ params.email }
                    onChange={ params.onEmailChange } />
                </div>
                <div
                  className="input-field">
                  <label for="password">hasło</label>
                  <input
                    id="password"
                    type="password"
                    value={ params.password }
                    onChange={ params.onPasswordChange } />
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
