import "../css/VideoPage.css";
import { useServices } from "../../../context/servicesContext/servicesContext";

const VideoPanel = ({ video }) => {
  const { _id: id, title } = video;
  const { handleWatchLaterVideos, handleLikedVideos, state } = useServices();

  const isVideoExistsInLiked =
    state.likes.find((item) => item.id === id) === undefined ? false : true;
  const isVideoExistsInWatchLater =
    state.watchlater.find((item) => item.id === id) === undefined
      ? false
      : true;

  return (
    <div className="video-panel">
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
          {isVideoExistsInLiked ? "Liked" : "Like"}
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
          {isVideoExistsInWatchLater ? "Added" : "Add to Watch Later"}
        </button>
        <button className="btn btn-icon">
          <span className="material-icons-outlined">playlist_add</span>
          Add to Playlist
        </button>
      </div>
      <div className="video-stats">10K views | 13 hours ago</div>
    </div>
  );
};

export { VideoPanel };
