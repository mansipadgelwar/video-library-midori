import "Header.css";

const Header = () => {
  return (
    <div className="simple-header">
      <header className="header">
        <div className="header-items">
          <div className="nav-brand">Midori</div>
          <div className="input-icon icons-left">
            <span className="material-icons">search</span>
            <input
              className="input"
              type="text"
              id="search-bar"
              name="search-bar"
              placeholder="search"
            />
          </div>
          <div className="sub-menu">
            <button className="btn btn-secondary">Login</button>
            <div className="header-menu-icon">
              <span className="material-icons">account_circle</span>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export { Header };
