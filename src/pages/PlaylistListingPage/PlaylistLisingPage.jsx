import "../PlaylistListingPage/PlaylistListingPage.css";
import { PlaylistCard, PlaylistForm } from "../../components";
import { useState } from "react";
import { useServices } from "../../context";

const PlaylistListingPage = () => {
  const [show, setShow] = useState(false);
  const { state } = useServices();

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
            {state.playlists.map((element) => {
              return <PlaylistCard key={element._id} playlist={element} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export { PlaylistListingPage };
