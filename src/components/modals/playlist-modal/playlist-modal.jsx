import "../../modals/playlist-modal/playlist-modal.css";
import { useServices } from "../../../context/servicesContext/servicesContext";
import {
  addNewVideoToPlaylistOfUserService,
  deleteVideoFromPlaylistOfUserService
} from "../../../services";
import { useData } from "../../../context/dataContext/dataContext";
import { useToast } from "../../../custom-hooks/useToast";
import { useAuth } from "../../../context/authContext/authenticationContext";

const PlaylistModal = ({ selectedVideo }) => {
  const { state, dispatch } = useServices();
  const { authToken } = useAuth();
  const { videos } = useData();
  const { showToast } = useToast();

  const videoExistsInThatPlaylist = false;

  const addOrRemoveVideoFromPlaylist = async ({ _id }) => {
    const video = videos.find((item) => item._id === selectedVideo.id);

    try {
      const response = videoExistsInThatPlaylist
        ? await deleteVideoFromPlaylistOfUserService(
            authToken,
            state.playlists._id,
            selectedVideo.id
          )
        : await addNewVideoToPlaylistOfUserService(authToken, _id, video);
      let singlePlaylist = state.playlists.map((playlist) => {
        if (playlist._id === response.data.playlist._id) {
          return response.data.playlist;
        }
        return playlist;
      });
      showToast("Video added to the playlist", "success");
      dispatch({
        type: "MANAGE_PLAYLIST",
        payload: singlePlaylist
      });
    } catch (error) {
      console.error(error);
      showToast(
        videoExistsInThatPlaylist
          ? "Unable to delete video from playlist"
          : "Unable to add video to playlist",
        "error"
      );
    }
  };
  return (
    <div className="modal-wrapper">
      <div className="modal">
        <button className="modal-close-icon">
          <span className="material-icons">close</span>
        </button>

        <div className="modal-heading">Save to...</div>
        <div className="modal-contents">
          <ul className="modal-content-list">
            {state.playlists.map(({ title, _id }) => {
              return (
                <li className="unordered-list" key={_id}>
                  <input
                    type="checkbox"
                    id={_id}
                    name={title}
                    checked={videoExistsInThatPlaylist}
                    onChange={() => addOrRemoveVideoFromPlaylist({ _id })}
                  />
                  <label> {title} </label>
                </li>
              );
            })}
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

export { PlaylistModal };
