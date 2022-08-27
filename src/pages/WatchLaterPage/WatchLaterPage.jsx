import { VideoCard, Sidebar } from "../../components";

const WatchLaterPage = () => {
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
          {state.watchlater.length > 0 ? (
            state.watchlater.map((element) => {
              return (
                <VideoCard
                  key={element.id}
                  id={element.id}
                  title={element.title}
                  location={"watchLater"}
                />
              );
            })
          ) : (
            <div className="logout-content">
              <h2 className="h2">No videos added to watch later</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { WatchLaterPage };
