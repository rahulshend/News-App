const Navbar = ({ setCategory }) => {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand "><span className="badge bg-light text-dark">News App</span></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item mx-2">
                <a className="nav-link" href="#" onClick={() => setCategory("technology")}>Technology</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#" onClick={() => setCategory("business")}>Business</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#" onClick={() => setCategory("health")}>Health</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#" onClick={() => setCategory("sports")}>Sports</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#" onClick={() => setCategory("entertainment")}>Entertainment</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  