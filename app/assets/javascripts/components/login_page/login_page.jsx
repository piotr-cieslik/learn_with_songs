var LoginPage = function(params){
  return(
    <div className="container">
      <form
        onSubmit={ params.onSubmit } >
        <div className="form-group">
          <label>Email:</label>
          <input
            className="form-control"
            type="text"
            placeholder="email"
            value={ params.email }
            onChange={ params.onEmailChange }></input>
        </div>
        <div className="form-group">
          <label>Hasło:</label>
          <input
            className="form-control"
            type="password"
            placeholder="hasło"
            value={ params.password }
            onChange={ params.onPasswordChange }></input>
        </div>
        <button
          className="btn btn-primary"
          type="submit">
          Zaloguj
        </button>
      </form>
    </div>
  )
};
