import "../HistoryPage/HistoryPage.css";
import { VideoCard } from "../../components";

const HistoryPage = () => {
  return (
    <div className="main-content-page">
      <div className="menu-bar">
        <div className="page-title h3 text-bold">My Playlists</div>
        <div>
          <button className="btn btn-cta">Clear Full History</button>
        </div>
      </div>
      <div className="history-video-container">
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    </div>
  );
};

export { HistoryPage };
