var LoginPage = function(params){
  var validationError = null;

  if(params.invalid){
    validationError = <div id="login-form-validation-error">Niepoprawny email lub hasło</div>;
  }

  return(
    <div id="main-page-banner">
      <div className="container">
        <div className="row">

          <div className="col m6 s12">
            <h1>Strona bez nazwy!</h1>
            <p>Chwilowo, z podowu braku weny autora, strona nie posiada nazwy.</p>
          </div>

          <div className="col m6 s12">
            <div className="card">
              <div className="card-content">
                <span className="card-title">Logowanie</span>
                { validationError }
                <form
                  onSubmit={ params.onSubmit } >
                  <div
                    className="input-field">
                    <input
                      id="email"
                      type="text"
                      value={ params.email }
                      onChange={ params.onEmailChange } />
                      <label htmlFor="email">email</label>
                  </div>
                  <div
                    className="input-field">
                    <input
                      id="password"
                      type="password"
                      value={ params.password }
                      onChange={ params.onPasswordChange } />
                    <label htmlFor="password">hasło</label>
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
    </div>
  )
};
