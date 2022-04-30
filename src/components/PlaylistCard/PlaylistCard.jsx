import "../PlaylistCard/PlaylistCard.css";
import { Link } from "react-router-dom";

const PlaylistCard = () => {
  return (
    <div className="playlist-container">
      <div className="playlist-description">
        <div className="text-bold">My Playlist #1</div>
        <div>10 videos</div>
      </div>
      <div>
        <Link to="/">
          <span className="material-icons icon">delete_outline</span>
        </Link>
      </div>
    </div>
  );
};

export { PlaylistCard };
