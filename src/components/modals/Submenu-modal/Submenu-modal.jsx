import "./Submenu-modal.css";
import {
  deleteVideoFromHistoryOfUserService,
  deleteVideoFromWatchLaterService,
} from "../../../services";
import { useToast } from "../../../custom-hooks/useToast";
import { useAuth, useServices } from "../../../context";
import { PlaylistModal } from "../playlist-modal/playlist-modal";
import { useState } from "react";
import { useParams } from "react-router-dom";

const SubmenuModal = ({
  showSubMenus,
  onClosingSubMenus,
  id,
  title,
  location,
}) => {
  const { showToast } = useToast();
  const { authToken } = useAuth();
  const {
    dispatch,
    handleWatchLaterVideos,
    addOrRemoveVideoFromPlaylist,
    state,
  } = useServices();
  const [showPlaylistModal, setShowPlaylistModal] = useState(false);

  const video = { id, title };
  const { playlistId } = useParams();

  const isVideoExistsInWatchLater =
    state.watchlater.find((item) => item.id === id) === undefined
      ? false
      : true;

  const deleteVideoFromHistory = async (e, videoId) => {
    e.preventDefault();
    try {
      const {
        data: { history },
      } = await deleteVideoFromHistoryOfUserService(authToken, videoId);
      dispatch({ type: "MANAGE_HISTORY", payload: history });
      showToast(" Video removed from history", "success");
    } catch (error) {
      showToast("Unable to remove video from history", "error");
      console.error("Error in deleting video from history", error);
    }
    onClosingSubMenus();
  };

  const deleteVideoFromWatchLater = async (e, videoId) => {
    e.preventDefault();
    try {
      const {
        data: { watchlater },
      } = await deleteVideoFromWatchLaterService(authToken, videoId);
      dispatch({ type: "MANAGE_WATCH_LATER", payload: watchlater });
      showToast(" Video removed from watch later", "success");
    } catch (error) {
      showToast("Unable to remove video from watch later", "error");
      console.error("Error in deleting video from watch later", error);
    }
    onClosingSubMenus();
  };

  if (!showSubMenus) {
    return null;
  }

  return (
    <>
      <PlaylistModal
        selectedVideo={{ id, title }}
        showPlaylistModal={showPlaylistModal}
        closePlaylistModal={() => setShowPlaylistModal(false)}
      />
      <div className="submenu-modal-wrapper">
        <div className="submenu-modal">
          <button className="modal-close-icon">
            <span className="material-icons" onClick={onClosingSubMenus}>
              close
            </span>
          </button>
          <div className="modal-contents">
            <ul className="modal-content-list">
              {location === "history" ? (
                <>
                  <li
                    className="unordered-list text-bold"
                    onClick={(e) => deleteVideoFromHistory(e, id)}
                  >
                    <span className="material-icons">delete</span>
                    Remove from history
                  </li>
                  <li
                    className="unordered-list text-bold"
                    onClick={() => setShowPlaylistModal(true)}
                  >
                    <span className="material-icons">playlist_play</span>
                    Save to playlist
                  </li>
                  <li
                    className="unordered-list text-bold"
                    onClick={() => handleWatchLaterVideos({ id, title })}
                  >
                    <span className="material-icons">watch_later</span>
                    Add to watch later
                  </li>
                </>
              ) : location === "watchLater" ? (
                <>
                  <li
                    className="unordered-list text-bold"
                    onClick={(e) => deleteVideoFromWatchLater(e, id)}
                  >
                    <span className="material-icons">delete</span>
                    Remove from watch later
                  </li>
                  <li
                    className="unordered-list text-bold"
                    onClick={() => setShowPlaylistModal(true)}
                  >
                    <span className="material-icons">playlist_play</span>
                    Save to playlist
                  </li>
                </>
              ) : location === "playlist" ? (
                <>
                  <li
                    className="unordered-list text-bold"
                    onClick={() =>
                      addOrRemoveVideoFromPlaylist(playlistId, video)
                    }
                  >
                    <span className="material-icons">delete</span>
                    Remove from playlist
                  </li>
                </>
              ) : (
                <>
                  <li
                    className="unordered-list text-bold"
                    onClick={() => setShowPlaylistModal(true)}
                  >
                    <span className="material-icons">playlist_play</span>
                    Save to playlist
                  </li>
                  <li
                    className="unordered-list text-bold"
                    onClick={() => {
                      handleWatchLaterVideos({ id, title });
                      onClosingSubMenus();
                    }}
                  >
                    <span className="material-icons">watch_later</span>
                    {isVideoExistsInWatchLater
                      ? "Remove from watch later"
                      : "Add to watch later"}
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export { SubmenuModal };
