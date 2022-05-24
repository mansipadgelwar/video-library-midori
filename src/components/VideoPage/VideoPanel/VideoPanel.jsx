import "../css/VideoPage.css";
import { useToast } from "../../../custom-hooks/useToast";
import { useAuth } from "../../../context/authContext/authenticationContext";
import { addVideoToLikedVideo } from "../../../services";
import { useServices } from "../../../context/servicesContext/servicesContext";

const VideoPanel = ({ video }) => {
  const { _id: id, title } = video;

  const { showToast } = useToast();
  const { isAuthorized, authToken } = useAuth();
  const { addVideoToWatchLater } = useServices();

  const handleLikedVideos = async (e) => {
    e.preventDefault();
    if (!isAuthorized) {
      showToast("Please login to like video.", "info");
    } else {
      try {
        const {
          data: { likes }
        } = await addVideoToLikedVideo(authToken, video);
        showToast("Video added as liked video.", "success");
      } catch (error) {
        showToast("Error in adding video to liked videos.", "error");
        console.error("Error in adding video to liked videos", error);
      }
    }
  };

  return (
    <div className="video-panel">
      <div className="video-sub-menus">
        <button className="btn btn-icon" onClick={(e) => handleLikedVideos(e)}>
          <span className="material-icons-outlined">thumb_up</span>
          Like
        </button>
        <button className="btn btn-icon">
          <span className="material-icons-outlined">thumb_down</span>
          Dislike
        </button>
        <button
          className="btn btn-icon"
          onClick={() => addVideoToWatchLater({ id, title })}
        >
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
