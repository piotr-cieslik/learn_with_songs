var Layout = function(props){
  return(
    <div>
      <header>
        <nav>
          <div className="nav-wrapper">
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="collapsible.html">JavaScript</a></li>
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
