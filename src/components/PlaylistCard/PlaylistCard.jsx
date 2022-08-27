import axios from "axios";
import { useToast } from "../../custom-hooks/useToast";
import "../PlaylistCard/PlaylistCard.css";
import { NavLink } from "react-router-dom";

const PlaylistCard = ({ playlist }) => {
  const { showToast } = useToast();

  const deletePlaylistFromDb = async (e, playlistId) => {
    e.preventDefault();
    try {
      const {
        data: { playlists },
      } = await axios.delete(`/api/user/playlists/${playlistId}`, {
        headers: { authorization: authToken },
      });
      showToast("Playlist deleted successfully", "success");
      dispatch({ type: "MANAGE_PLAYLIST", payload: playlists });
    } catch (error) {
      console.error("Error deleting playlist", error);
    }
  };

  return (
    <NavLink
      to={`/myplaylist/${playlist._id}`}
      className="playlist-title playlist-container"
    >
      <div className="playlist-description">
        <div className="text-bold ">{playlist.title}</div>

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
    </NavLink>
  );
};

export { PlaylistCard };
