import styles from "./playlist-modal.module.css";
import { useServices } from "../../../context/servicesContext/servicesContext";

const PlaylistModal = ({
  selectedVideo,
  showPlaylistModal,
  closePlaylistModal,
}) => {
  const { state, addOrRemoveVideoFromPlaylist } = useServices();

  if (!showPlaylistModal) {
    return null;
  }

  return (
    <div className={styles.modal_wrapper}>
      <div className={styles.modal}>
        <button
          className={styles.modal_close_icon}
          onClick={closePlaylistModal}
        >
          <span className="material-icons">close</span>
        </button>

        <div className={styles.modal_heading}>Save to...</div>
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
        <div>
          <button className="btn btn-secondary-outline">
            + Create new playlist
          </button>
        </div>
      </div>
    </div>
  );
};

export { PlaylistModal };
