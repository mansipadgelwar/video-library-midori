import "./Submenu-modal.css";
import { deleteVideoFromHistoryOfUserService } from "../../../services";
import { useToast } from "../../../custom-hooks/useToast";
import { useAuth } from "../../../context/authContext/authenticationContext";
import { useServices } from "../../../context/servicesContext/servicesContext";

const SubmenuModal = ({ showSubMenus, onClosingSubMenus, id }) => {
  const { showToast } = useToast();
  const { authToken } = useAuth();
  const { dispatch, addVideoToWatchLater } = useServices();
  if (!showSubMenus) {
    return null;
  }

  const deleteVideoFromHistory = async (e, videoId) => {
    e.preventDefault();
    try {
      const {
        data: { history }
      } = await deleteVideoFromHistoryOfUserService(authToken, videoId);
      dispatch({ type: "MANAGE_HISTORY", payload: history });
      showToast(" Video removed from history", "success");
    } catch (error) {
      showToast("Unable to remove video from history", "error");
      console.error("Error in deleting video from history", error);
    }
    onClosingSubMenus(false);
  };
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
            <li
              className="unordered-list text-bold"
              onClick={(e) => deleteVideoFromHistory(e, id)}
            >
              <span className="material-icons">delete</span>
              Remove from history
            </li>
            <li className="unordered-list text-bold">
              <span className="material-icons">playlist_play</span>Save to
              playlist
            </li>
            <li
              className="unordered-list text-bold"
              onClick={() => addVideoToWatchLater(id)}
            >
              <span className="material-icons">watch_later</span>
              Add to watch later
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
