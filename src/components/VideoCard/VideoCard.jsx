import "../VideoCard/VideoCard.css";
import { Link } from "react-router-dom";
import { useToast } from "../../custom-hooks/useToast";
import { useAuth } from "../../context/authContext/authenticationContext";
import { addVideoToHistoryOfUserService } from "../../services";
import { useServices } from "../../context/servicesContext/servicesContext";

const VideoCard = ({ id, title }) => {
  const { showToast } = useToast();
  const { isAuthorized, authToken } = useAuth();
  const { dispatch } = useServices();

  const addViewedVideoToHistory = async () => {
    if (isAuthorized) {
      try {
        const {
          data: { history }
        } = await addVideoToHistoryOfUserService(authToken, { id, title });
        dispatch({ type: "MANAGE_HISTORY", payload: history });
        showToast(" Video added to history", "success");
      } catch (error) {
        showToast("Unable to add video to your history", "error");
        console.error("history error", error);
      }
    }
  };
  return (
    <div className="video-card-container">
      <div>
        <Link to="/">
          <span className="material-icons icon">favorite_border</span>
        </Link>
        <Link to={`/videopage/${id}`}>
          <img
            src={`https://i.ytimg.com/vi/${id}/0.jpg`}
            alt={`${title} thumbnail`}
            className="video-thumbnail img-responsive"
            onClick={() => addViewedVideoToHistory()}
          />
        </Link>
      </div>
      <div className="video-description">
        <div className="video-heading">{title}</div>
        <div className="video-sub-heading">6K Views | 4 hours ago</div>
      </div>
      <div className="video-cta">
        <button className="btn-text">Watch Now</button>
      </div>
    </div>
  );
};

export { VideoCard };
