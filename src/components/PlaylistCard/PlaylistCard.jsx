import axios from "axios";
import { useToast } from "../../custom-hooks/useToast";
import "../PlaylistCard/PlaylistCard.css";
import { useAuth } from "../../context/authContext/authenticationContext";
import { useServices } from "../../context/servicesContext/servicesContext";
import { Link } from "react-router-dom";

const PlaylistCard = ({ playlist }) => {
  const { showToast } = useToast();
  const { authToken } = useAuth();
  const { dispatch } = useServices();

  const deletePlaylistFromDb = async (e, playlistId) => {
    e.preventDefault();
    try {
      const {
        data: { playlists }
      } = await axios.delete(`/api/user/playlists/${playlistId}`, {
        headers: { authorization: authToken }
      });
      showToast("Playlist deleted successfully", "success");
      dispatch({ type: "MANAGE_PLAYLIST", payload: playlists });
    } catch (error) {
      console.error("Error deleting playlist", error);
    }
  };

  return (
    <div className="playlist-container">
      <Link to={`/myplaylist/${playlist._id}`}>
        <div className="playlist-description">
          <div className="text-bold">{playlist.title}</div>
          <div>{playlist.videos.length} videos</div>
        </div>
        <div>
          <button
            className="btn-icon"
            onClick={(e) => deletePlaylistFromDb(e, playlist._id)}
          >
            <span className="material-icons">delete_outline</span>
          </button>
        </div>
      </Link>
    </div>
  );
};

export { PlaylistCard };
