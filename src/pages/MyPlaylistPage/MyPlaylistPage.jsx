import { VideoCard, Sidebar } from "../../components";
import { useServices } from "../../context";
import { useParams } from "react-router-dom";

const MyPlaylistPage = () => {
  const { playlistId } = useParams();
  const { state } = useServices();
  const currentPlaylist = state.playlists.find(
    (item) => item._id === playlistId
  );

  return (
    <div className="library-home-page">
      <div className="library-home-sidebar">
        <Sidebar />
      </div>
      <div className="main-content-page">
        <div className="menu-bar">
          <div className="page-title h3 text-bold">{currentPlaylist.title}</div>
        </div>
        <div className="history-video-container">
          {currentPlaylist.videos.map((element) => {
            return (
              <VideoCard
                key={element.id}
                id={element.id}
                title={element.title}
                location={"playlist"}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { MyPlaylistPage };
