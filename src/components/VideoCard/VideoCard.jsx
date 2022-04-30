import "../VideoCard/VideoCard.css";
import { Link } from "react-router-dom";

const VideoCard = () => {
  return (
    <div className="video-card-container">
      <div>
        <Link to="/">
          <span className="material-icons icon">favorite_border</span>
        </Link>
        <img src="https://picsum.photos/300/170" alt="video" />
      </div>
      <div className="video-description">
        <div className="video-heading">Sen Sinatra leaks his Team</div>
        <div className="video-sub-heading">6K Views | 4 hours ago</div>
      </div>
      <div className="video-cta">
        <button className="btn-text">Watch Now</button>
      </div>
    </div>
  );
};

export { VideoCard };
