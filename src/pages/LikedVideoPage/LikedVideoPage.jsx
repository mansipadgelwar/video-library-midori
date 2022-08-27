import { VideoCard, Sidebar } from "../../components";

const LikedVideoPage = () => {
  return (
    <div className="library-home-page">
      <div className="library-home-sidebar">
        <Sidebar />
      </div>
      <div className="main-content-page">
        <div className="menu-bar">
          <div className="page-title h3 text-bold">Favourite Videos</div>
        </div>
        <div className="history-video-container">
          {state.likes.length > 0 ? (
            state.likes.map((element) => {
              return (
                <VideoCard
                  key={element.id}
                  id={element.id}
                  title={element.title}
                />
              );
            })
          ) : (
            <div className="logout-content">
              <h2 className="h2">No videos added to favorite</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { LikedVideoPage };
