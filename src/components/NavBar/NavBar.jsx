import "../NavBar/NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="simple-header">
      <header className="header">
        <div className="header-items">
          <Link to="/" className="nav-brand">
            Midori
          </Link>
          <div className="input-icon icons-left">
            <span className="material-icons">search</span>
            <input
              className="input"
              type="text"
              id="search-bar"
              name="search-bar"
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

export { NavBar };
