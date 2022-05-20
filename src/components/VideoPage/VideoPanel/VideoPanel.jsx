import { addVideoToLikedVideo } from "../../../services/like-services/addVideoToLikedVideo";
import "../css/VideoPage.css";

const VideoPanel = () => {
  const handleLikedVideos = () => {};
  return (
    <div className="video-panel">
      <div className="video-sub-menus">
        <button className="btn btn-icon">
          <span className="material-icons-outlined" onClick={handleLikedVideos}>
            thumb_up
          </span>
          Like
        </button>
        <button className="btn btn-icon">
          <span className="material-icons-outlined">thumb_down</span>
          Dislike
        </button>
        <button className="btn btn-icon">
          <span className="material-icons-outlined">favorite_border</span>
          Add to Watch Later
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
