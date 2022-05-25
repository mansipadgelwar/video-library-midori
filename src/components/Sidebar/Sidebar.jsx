import "../Sidebar/Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="video-side-bar">
      <div className="video-sidebar-menu">
        <ul className="video-sidebar-list">
          <li className="video-side-links">
            <Link to="/">
              <span className="material-icons">home</span>
            </Link>
            <div>Home</div>
          </li>
          <li className="video-side-links">
            <Link to="/allplaylists">
              <span className="material-icons">playlist_play</span>
            </Link>
            <div>Playlist</div>
          </li>
          <li className="video-side-links">
            <Link to="/videolist">
              <span className="material-icons">explore</span>
            </Link>
            <div>Explore</div>
          </li>
          <li className="video-side-links">
            <Link to="/favourites">
              <span className="material-icons">favorite</span>
            </Link>
            <div>Favorite</div>
          </li>
          <li className="video-side-links">
            <Link to="/watchlater">
              <span className="material-icons">watch_later</span>
            </Link>
            <div>Watch Later</div>
          </li>

          <li className="video-side-links">
            <Link to="/history">
              <span className="material-icons">history</span>
            </Link>
            <div>History</div>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export { Sidebar };
