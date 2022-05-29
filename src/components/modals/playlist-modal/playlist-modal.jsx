import styles from "./playlist-modal.module.css";
import { useServices } from "../../../context/servicesContext/servicesContext";
import { useState } from "react";

const PlaylistModal = ({
  selectedVideo,
  showPlaylistModal,
  closePlaylistModal,
}) => {
  const {
    state,
    addOrRemoveVideoFromPlaylist,
    newPlaylistName,
    setNewPlaylistName,
    handleCreateNewPlaylist,
  } = useServices();

  const [showInputForm, setShowInputForm] = useState(false);

  if (!showPlaylistModal) {
    return null;
  }

  const handlePlaylistModal = (e) => {
    e.preventDefault();
    handleCreateNewPlaylist(e);
    setShowInputForm(true);
  };

  return (
    <div className={styles.modal_wrapper}>
      <div className={styles.modal}>
        <button
          className={styles.modal_close_icon}
          onClick={closePlaylistModal}
        >
          <span className="material-icons">close</span>
        </button>

        <div className={styles.modal_heading}>Save to</div>
        <div className={styles.modal_contents}>
          <ul className={styles.modal_content_list}>
            {state.playlists.map(({ title, _id }) => {
              const currentPlaylist = state.playlists.find(
                (item) => item._id === _id
              );
              const videoExistsInThatPlaylist = currentPlaylist.videos.some(
                (item) => item.id === selectedVideo.id
              );
              return (
                <li className={styles.unordered_list} key={_id}>
                  <input
                    type="checkbox"
                    id={_id}
                    name={title}
                    checked={videoExistsInThatPlaylist}
                    onChange={() =>
                      addOrRemoveVideoFromPlaylist({ _id, selectedVideo })
                    }
                  />
                  <label> {title} </label>
                </li>
              );
            })}
          </ul>
        </div>
        {showInputForm && (
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
        )}

        <button
          className="btn btn-secondary-outline"
          onClick={(e) => handlePlaylistModal(e)}
        >
          + Create new playlist
        </button>
      </div>
    </div>
  );
};

export { PlaylistModal };
