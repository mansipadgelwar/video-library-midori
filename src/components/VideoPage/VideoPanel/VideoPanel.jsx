import "../css/VideoPage.css";
import { useState } from "react";
import { useServices } from "../../../context/servicesContext/servicesContext";
import { PlaylistModal } from "../../modals/playlist-modal/playlist-modal";

const VideoPanel = ({ video }) => {
  const { _id: id, title } = video;
  const { handleWatchLaterVideos, handleLikedVideos, state } = useServices();
  const [showPlaylistModal, setShowPlaylistModal] = useState(false);

  const isVideoExistsInLiked =
    state.likes.find((item) => item.id === id) === undefined ? false : true;
  const isVideoExistsInWatchLater =
    state.watchlater.find((item) => item.id === id) === undefined
      ? false
      : true;

  return (
    <div className="video-panel">
      <PlaylistModal
        selectedVideo={{ id, title }}
        showPlaylistModal={showPlaylistModal}
        closePlaylistModal={() => setShowPlaylistModal(false)}
      />
      <div className="video-sub-menus">
        <button
          className="btn btn-icon"
          onClick={() => handleLikedVideos({ id, title })}
        >
          <span
            className={`${
              isVideoExistsInLiked
                ? "material-icons"
                : "material-icons-outlined"
            }`}
          >
            thumb_up
          </span>
          <span className="mobile-hide">
            {isVideoExistsInLiked ? "Liked" : "Like"}
          </span>
        </button>
        <button
          className="btn btn-icon"
          onClick={() => handleWatchLaterVideos({ id, title })}
        >
          <span
            className={`${
              isVideoExistsInWatchLater
                ? "material-icons"
                : "material-icons-outlined"
            }`}
          >
            watch_later
          </span>
          <span className="mobile-hide">
            {isVideoExistsInWatchLater ? "Added" : "Add to Watch Later"}
          </span>
        </button>
        <button
          className="btn btn-icon"
          onClick={() => setShowPlaylistModal(true)}
        >
          <span className="material-icons-outlined">playlist_add</span>
          <span className="mobile-hide">Add to Playlist</span>
        </button>
      </div>
      <div className="video-stats">10K views | 13 hours ago</div>
    </div>
  );
};

export { VideoPanel };
