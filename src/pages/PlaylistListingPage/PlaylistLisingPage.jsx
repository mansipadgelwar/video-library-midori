import "../PlaylistListingPage/PlaylistListingPage.css";
import { PlaylistCard } from "../../components";

const PlaylistListingPage = () => {
  const openModalToCreateNewPlaylist = () => {};
  return (
    <div className="main-content-page">
      <div className="menu-bar">
        <div className="page-title h3 text-bold">My Playlists</div>
        <div>
          <button
            className="btn btn-cta"
            onClick={openModalToCreateNewPlaylist}
          >
            Create New Playlist
          </button>
        </div>
      </div>
      <div className="history-video-container">
        <PlaylistCard />
        <PlaylistCard />
        <PlaylistCard />
        <PlaylistCard />
        <PlaylistCard />
      </div>
    </div>
  );
};

export { PlaylistListingPage };
