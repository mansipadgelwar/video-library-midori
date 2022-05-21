import "../PlaylistListingPage/PlaylistListingPage.css";
import { PlaylistCard, PlaylistForm } from "../../components";
import { useState } from "react";

const PlaylistListingPage = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <PlaylistForm show={show} onClose={() => setShow(false)} />
      <div className={show ? "modal-background-page" : ""}>
        <div className="main-content-page">
          <div className="menu-bar">
            <div className="page-title h3 text-bold">My Playlists</div>
            <div>
              <button className="btn btn-cta" onClick={() => setShow(true)}>
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
      </div>
    </div>
  );
};

export { PlaylistListingPage };
