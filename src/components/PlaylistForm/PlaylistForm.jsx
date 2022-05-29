import { useState } from "react";
import "../PlaylistForm/PlaylistForm.css";
import { useAuth } from "../../context/authContext/authenticationContext";
import { useServices } from "../../context/servicesContext/servicesContext";
import { useToast } from "../../custom-hooks/useToast";
// import { createNewPlaylistService } from "../../services";
import axios from "axios";

const PlaylistForm = ({ show, onClose }) => {
  const { isAuthorized, authToken } = useAuth();
  const { showToast } = useToast();
  const { state, dispatch } = useServices();

  const [newPlaylistName, setNewPlaylistName] = useState("");

  if (!show) {
    return null;
  }

  const handleCreateNewPlaylist = async (e) => {
    e.preventDefault();
    if (!isAuthorized) {
      showToast("Please login to create new playlist.", "info");
    } else {
      try {
        const titleExists = state.playlists.some(
          (element) => element.title === newPlaylistName
        );
        if (titleExists) {
          return showToast("Playlist name already exists", "error");
        }
        const {
          data: { playlists },
        } = await axios.post(
          "/api/user/playlists",
          {
            playlist: {
              title: newPlaylistName,
              description: "",
            },
          },
          { headers: { authorization: authToken } }
        );
        setNewPlaylistName("");
        onClose();
        dispatch({ type: "MANAGE_PLAYLIST", payload: playlists });
        showToast("Playlist created.", "success");
      } catch (error) {
        console.error("error creating new playlist", error);
      }
    }
  };

  return (
    <div className="modal-wrapper">
      <article className="playlist-form-container modal">
        <button className="playlist-modal-close-icon" onClick={onClose}>
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
              onChange={(e) => setNewPlaylistName(e.target.value)}
              value={newPlaylistName}
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
