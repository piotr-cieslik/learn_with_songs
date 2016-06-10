var ProtectedContent = function(props){
  return(
    <div>
      <header>
        <nav>
          <div className="nav-wrapper">
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><LogoutButton /></li>
            </ul>
          </div>
        </nav>
      </header>
      <main>
        {props.children}
      </main>
      <footer></footer>
    </div>
  );
};
