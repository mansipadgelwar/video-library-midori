import "../WatchLaterPage/WatchLaterPage.css";
import { VideoCard } from "../../components";
import { useServices } from "../../context/servicesContext/servicesContext";

const WatchLaterPage = () => {
  const { state } = useServices();
  return (
    <div className="main-content-page">
      <div className="menu-bar">
        <div className="page-title h3 text-bold">Watch Later</div>
      </div>
      <div className="history-video-container">
        {state.watchlater.map((element) => {
          return (
            <VideoCard key={element.id} id={element.id} title={element.title} />
          );
        })}
      </div>
    </div>
  );
};

export { WatchLaterPage };
