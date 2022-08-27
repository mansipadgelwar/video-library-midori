import { useState } from "react";
import "../PlaylistForm/PlaylistForm.css";
import { useServices } from "../../context";

const PlaylistForm = ({ show, onClose }) => {
  const { handleCreateNewPlaylist, newPlaylistName, setNewPlaylistName } =
    useServices();

  if (!show) {
    return null;
  }

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
