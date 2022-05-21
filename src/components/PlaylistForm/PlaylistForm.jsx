import { useState } from "react";
import "../PlaylistForm/PlaylistForm.css";
import axios from "axios";
import { useAuth } from "../../context/authContext/authenticationContext";
import { useToast } from "../../custom-hooks/useToast";

const PlaylistForm = ({ show, onClose }) => {
  const { isAuthorized, authToken } = useAuth();
  const { showToast } = useToast();
  // const { dispatch, playlists } = useServices();

  const playlist = { playlistTitle: "", videoInPlaylist: [] };
  const [newPlaylist, setNewPlaylist] = useState(playlist);

  if (!show) {
    return null;
  }

  const handleCreateNewPlaylist = async (e) => {
    e.preventDefault();
    if (!isAuthorized) {
      showToast("Please login to create new playlist.", "info");
    } else {
      try {
        const {
          data: { playlists }
        } = await axios.post(
          "/api/user/playlists",
          { playlist },
          { headers: { authorization: authToken } }
        );
        dispatch({ type: "CREATE_NEW_PLAYLIST", payload: { playlists } });
        showToast("Playlist created.", "success");
      } catch (error) {
        console.error("error creating new playlist", error);
      }
    }
  };

  return (
    <div className="modal-wrapper">
      <article className="playlist-form-container modal">
        <button className="modal-close-icon" onClick={onClose}>
          <span className="material-icons">close</span>
        </button>
        <form className="playlist-form" action="">
          <h3 className="h3">Create New Playlist</h3>
          <label htmlFor="playlist" className="input-label ">
            Playlist Name
          </label>
          <div className="input">
            <input
              className="input"
              type="text"
              id="playlist"
              name="playlist"
              placeholder="My Playlist"
              onChange={(e) =>
                setNewPlaylist({ playlistTitle: e.target.value })
              }
            />
          </div>
          <button
            className="btn btn-secondary"
            onClick={handleCreateNewPlaylist}
          >
            Create Playlist
          </button>
        </form>
      </article>
    </div>
  );
};

export { PlaylistForm };
