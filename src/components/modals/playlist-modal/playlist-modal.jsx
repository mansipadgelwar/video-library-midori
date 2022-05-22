import "../../modals/playlist-modal/playlist-modal.css";

const playlistModal = () => {
  return (
    <div className="modal-wrapper">
      <div className="modal">
        <button className="modal-close-icon">
          <span className="material-icons">close</span>
        </button>

        <div className="modal-heading">Save to...</div>
        <div className="modal-contents">
          <ul className="modal-content-list">
            <li className="unordered-list">
              <input type="checkbox" />
              My playlist #1
            </li>
            <li className="unordered-list">
              <input type="checkbox" />
              My playlist #2
            </li>
            <li className="unordered-list">
              <input type="checkbox" />
              My playlist #3
            </li>
          </ul>
        </div>
        <div>
          <button className="btn btn-secondary-outline">
            + Create new playlist
          </button>
        </div>
      </div>
    </div>
  );
};

export { playlistModal };
