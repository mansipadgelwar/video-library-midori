import { VideoCard } from "../../components";
import { useServices } from "../../context/servicesContext/servicesContext";
import { useParams } from "react-router-dom";

const MyPlaylistPage = () => {
  const { playlistId } = useParams();
  const { state } = useServices();
  const currentPlaylist = state.playlists.find(
    (item) => item._id === playlistId
  );

  return (
    <div className="main-content-page">
      <div className="menu-bar">
        <div className="page-title h3 text-bold">{currentPlaylist.title}</div>
        <div>
          <button className="btn btn-cta">Delete this playlist</button>
        </div>
      </div>
      <div className="history-video-container">
        {currentPlaylist.videos.map((element) => {
          return (
            <VideoCard
              key={element._id}
              id={element._id}
              title={element.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export { MyPlaylistPage };
