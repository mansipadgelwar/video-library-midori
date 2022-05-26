import "../WatchLaterPage/WatchLaterPage.css";
import { VideoCard } from "../../components";
import { useServices } from "../../context/servicesContext/servicesContext";

const LikedVideoPage = () => {
  const { state } = useServices();
  return (
    <div className="main-content-page">
      <div className="menu-bar">
        <div className="page-title h3 text-bold">Favourite Videos</div>
      </div>
      <div className="history-video-container">
        {state.likes.map((element) => {
          return (
            <VideoCard key={element.id} id={element.id} title={element.title} />
          );
        })}
      </div>
    </div>
  );
};

export { LikedVideoPage };
