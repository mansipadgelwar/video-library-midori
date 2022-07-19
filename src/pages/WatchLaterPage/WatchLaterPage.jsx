import { VideoCard, Sidebar } from "../../components";
import { useServices } from "../../context";

const WatchLaterPage = () => {
  const { state } = useServices();
  return (
    <div className="library-home-page">
      <div className="library-home-sidebar">
        <Sidebar />
      </div>
      <div className="main-content-page">
        <div className="menu-bar">
          <div className="page-title h3 text-bold">Watch Later</div>
        </div>
        <div className="history-video-container">
          {state.watchlater.map((element) => {
            return (
              <VideoCard
                key={element.id}
                id={element.id}
                title={element.title}
                location={"watchLater"}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { WatchLaterPage };
