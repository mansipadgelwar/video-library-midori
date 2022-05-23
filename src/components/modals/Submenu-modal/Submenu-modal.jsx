import "./Submenu-modal.css";

const SubmenuModal = ({ showSubMenus, onClosingSubMenus }) => {
  if (!showSubMenus) {
    return null;
  }
  return (
    <div className="submenu-modal-wrapper">
      <div className="submenu-modal">
        <button className="modal-close-icon">
          <span className="material-icons" onClick={onClosingSubMenus}>
            close
          </span>
        </button>
        <div className="modal-contents">
          <ul className="modal-content-list">
            <li className="unordered-list text-bold">
              <span className="material-icons">delete</span>
              Remove from history
            </li>
            <li className="unordered-list text-bold">
              <span className="material-icons">playlist_play</span>Save to
              playlist
            </li>
            <li className="unordered-list text-bold">
              <span className="material-icons">thumb_up</span>
              Like the video
            </li>
            <li className="unordered-list text-bold">
              <span className="material-icons">thumb_down</span>
              Dislike the Video
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export { SubmenuModal };
