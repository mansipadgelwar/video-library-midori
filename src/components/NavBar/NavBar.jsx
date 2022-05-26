import "../NavBar/NavBar.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext/authenticationContext";
import { useToast } from "../../custom-hooks/useToast";

const NavBar = () => {
  const { isAuthorized, authDispatch } = useAuth();
  const navigate = useNavigate();
  const { showToast } = useToast();

  const logoutUser = () => {
    showToast("Logout Successful", "success");
    authDispatch({ type: "RESET_AUTH" });
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/logout");
  };
  return (
    <div className="simple-header">
      <header className="header">
        <div className="header-items">
          <Link to="/" className="nav-brand">
            Midori
          </Link>
          <div className="input-icon icons-left">
            <span className="material-icons">search</span>
            <Link to="/videolist">
            <input
              className="input"
              type="text"
              id="search-bar"
              name="search-bar"
            />
            </Link>
          </div>
          {isAuthorized ? (
            <div className="sub-menu">
              <button className="btn btn-secondary" onClick={logoutUser}>
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="sub-menu">
              <span className="btn btn-secondary">Login</span>
            </Link>
          )}
        </div>
      </header>
    </div>
  );
};

export { NavBar };
