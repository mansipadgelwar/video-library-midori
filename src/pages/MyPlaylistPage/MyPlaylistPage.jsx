import "../MyPlaylistPage/MyPlaylistPage.css";
import { VideoCard } from "../../components";
import { useServices } from "../../services";

const MyPlaylistPage = () => {
  const { state } = useServices();
  console.log(state.playlists);
  return (
    <div className="main-content-page">
      <div className="menu-bar">
        <div className="page-title h3 text-bold">My Playlists #1</div>
        <div>
          <button className="btn btn-cta">Delete this playlist</button>
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

export { MyPlaylistPage };
