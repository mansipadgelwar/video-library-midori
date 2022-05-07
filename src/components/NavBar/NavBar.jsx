import "../NavBar/NavBar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext/authenticationContext";

const NavBar = () => {
  const { isAuthorized } = useAuth();
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
          {isAuthorized ? (
            <div className="sub-menu">
              <div className="header-menu-icon">
                <button className="material-icons">account_circle</button>
              </div>
            </div>
          ) : (
            <div className="sub-menu">
              <button className="btn btn-secondary">Login</button>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export { NavBar };
