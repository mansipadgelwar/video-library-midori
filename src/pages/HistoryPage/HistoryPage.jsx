import "../HistoryPage/HistoryPage.css";
import { VideoCard } from "../../components";
import { useServices } from "../../context/servicesContext/servicesContext";

const HistoryPage = () => {
  const { state } = useServices();
  return (
    <div className="main-content-page">
      <div className="menu-bar">
        <div className="page-title h3 text-bold">My Playlists</div>
        <div>
          <button className="btn btn-cta">Clear Full History</button>
        </div>
      </div>
      <div className="history-video-container">
        {state.history.map(({ _id, title }) => {
          return <VideoCard key={_id} id={_id} title={title} />;
        })}
      </div>
    </div>
  );
};

export { HistoryPage };
