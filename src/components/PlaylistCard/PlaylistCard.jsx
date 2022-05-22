import axios from "axios";
import { useToast } from "../../custom-hooks/useToast";
import "../PlaylistCard/PlaylistCard.css";
import { useAuth } from "../../context/authContext/authenticationContext";
import { useServices } from "../../context/servicesContext/servicesContext";

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
      <div className="playlist-description">
        <div className="text-bold">{playlist.title}</div>
        <div>10 videos</div>
      </div>
      <div>
        <button onClick={(e) => deletePlaylistFromDb(e, playlist._id)}>
          <span className="material-icons icon">delete_outline</span>
        </button>
      </div>
    </div>
  );
};

export { PlaylistCard };
