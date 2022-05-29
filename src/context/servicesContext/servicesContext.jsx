import { createContext, useContext, useEffect, useReducer } from "react";
import { useAuth } from "../authContext/authenticationContext";
import { dataReducer } from "../../reducers";
import {
  getHistoryOfUserService,
  addVideoToWatchLaterService,
  getWatchLaterVideoOfUserService,
  addVideoToLikedVideo,
  getAllLikedVideos,
  removeVideoFromLikedVideos,
  deleteVideoFromWatchLaterService,
  getAllPlaylistOfUserService,
  deleteVideoFromPlaylistOfUserService,
  addNewVideoToPlaylistOfUserService,
} from "../../services";
import { useToast } from "../../custom-hooks/useToast";

const initialDataState = {
  playlists: [],
  history: [],
  watchlater: [],
  likes: [],
};

const ServiceContext = createContext(initialDataState);

const ServiceProvider = ({ children }) => {
  const { isAuthorized, authToken } = useAuth();
  const { showToast } = useToast();
  const [state, dispatch] = useReducer(dataReducer, initialDataState);

  const getUserCreatedPlaylist = async () => {
    if (isAuthorized) {
      try {
        const {
          data: { playlists },
        } = await getAllPlaylistOfUserService(authToken);
        dispatch({ type: "MANAGE_PLAYLIST", payload: [...playlists] });
      } catch (error) {
        console.error("error in getting playlists", error);
      }
    }
  };

  const addOrRemoveVideoFromPlaylist = async ({ _id, selectedVideo }) => {
    const currentPlaylist = state.playlists.find((item) => item._id === _id);
    const videoExistsInThatPlaylist =
      currentPlaylist.videos.find((item) => item.id === selectedVideo.id) ===
      undefined
        ? false
        : true;
    try {
      const response = videoExistsInThatPlaylist
        ? await deleteVideoFromPlaylistOfUserService(
            authToken,
            currentPlaylist._id,
            selectedVideo.id
          )
        : await addNewVideoToPlaylistOfUserService(
            authToken,
            _id,
            selectedVideo
          );
      let singlePlaylist = state.playlists.map((playlist) => {
        if (playlist._id === response.data.playlist._id) {
          return response.data.playlist;
        }
        return playlist;
      });
      showToast(
        videoExistsInThatPlaylist
          ? "Removed from playlist"
          : "Saved to playlist",
        "success"
      );
      dispatch({
        type: "MANAGE_PLAYLIST",
        payload: singlePlaylist,
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

  const getUserHistory = async () => {
    if (isAuthorized) {
      try {
        const {
          data: { history },
        } = await getHistoryOfUserService(authToken);
        dispatch({ type: "MANAGE_HISTORY", payload: [...history] });
      } catch (error) {
        console.error("error in getting user's history", error);
      }
    }
  };

  const handleWatchLaterVideos = async ({ id, title }) => {
    const video = { id, title };
    const isVideoExistsInWatchLater =
      state.watchlater.find((item) => item.id === id) === undefined
        ? false
        : true;
    if (!isAuthorized) {
      showToast("Please login to add video to watch later.", "info");
    } else {
      try {
        const {
          data: { watchlater },
        } = isVideoExistsInWatchLater
          ? await deleteVideoFromWatchLaterService(authToken, video.id)
          : await addVideoToWatchLaterService(authToken, video);
        dispatch({ type: "MANAGE_WATCH_LATER", payload: watchlater });
        showToast(
          isVideoExistsInWatchLater
            ? "Removed from watch later"
            : "Saved to watch video.",
          "success"
        );
      } catch (error) {
        showToast(
          isVideoExistsInWatchLater
            ? "Error in removing video from watch later"
            : "Error in saving video to watch later",
          "error"
        );
        console.error("Error in adding video to liked videos", error);
      }
    }
  };

  const getVideoFromWatchLater = async () => {
    if (isAuthorized) {
      try {
        const {
          data: { watchlater },
        } = await getWatchLaterVideoOfUserService(authToken);
        dispatch({ type: "MANAGE_WATCH_LATER", payload: [...watchlater] });
      } catch (error) {
        console.log("Error in getting video from watch later", error);
      }
    }
  };

  const handleLikedVideos = async ({ id, title }) => {
    const video = { id, title };
    const isVideoExistsInLiked =
      state.likes.find((item) => item.id === video.id) === undefined
        ? false
        : true;
    if (!isAuthorized) {
      showToast("Please login to like video.", "info");
    } else {
      try {
        const {
          data: { likes },
        } = isVideoExistsInLiked
          ? await removeVideoFromLikedVideos(authToken, video.id)
          : await addVideoToLikedVideo(authToken, video);
        dispatch({ type: "MANAGE_LIKES", payload: likes });
        showToast(isVideoExistsInLiked ? "Unlike" : "Liked", "success");
      } catch (error) {
        showToast(
          isVideoExistsInLiked
            ? "Error in unliking video"
            : "Error in liking video.",
          "error"
        );
        console.error("Error in adding video to liked videos", error);
      }
    }
  };

  const getUsersLikedVideos = async () => {
    if (isAuthorized) {
      try {
        const {
          data: { likes },
        } = await getAllLikedVideos(authToken);
        dispatch({ type: "MANAGE_LIKES", payload: [...likes] });
      } catch (error) {
        console.error("Error getting all liked videos", error);
      }
    }
  };

  useEffect(() => {
    getUserCreatedPlaylist();
    getUserHistory();
    getVideoFromWatchLater();
    getUsersLikedVideos();
  }, []);

  return (
    <ServiceContext.Provider
      value={{
        state,
        dispatch,
        initialDataState,
        handleWatchLaterVideos,
        handleLikedVideos,
        addOrRemoveVideoFromPlaylist,
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
};

const useServices = () => useContext(ServiceContext);

export { useServices, ServiceProvider };
