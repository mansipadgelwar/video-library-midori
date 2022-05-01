import "../WatchLaterPage/WatchLaterPage.css";
import { VideoCard } from "../../components";

const WatchLaterPage = () => {
  return (
    <div className="main-content-page">
      <div className="menu-bar">
        <div className="page-title h3 text-bold">Watch Later</div>
      </div>
      <div className="history-video-container">
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    </div>
  );
};

export { WatchLaterPage };
