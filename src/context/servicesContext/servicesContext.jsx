import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import { useAuth } from "../authContext/authenticationContext";
import { dataReducer } from "../../reducers";
import {
  getHistoryOfUserService,
  addVideoToWatchLaterService,
  getWatchLaterVideoOfUserService,
  addVideoToLikedVideo,
  getAllLikedVideos,
  removeVideoFromLikedVideos
} from "../../services";
import { useToast } from "../../custom-hooks/useToast";

const initialDataState = {
  playlists: [],
  history: [],
  watchlater: [],
  singlePlaylists: [],
  likes: []
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
          data: { playlists }
        } = await axios.get("/api/user/playlists", {
          headers: { authorization: authToken }
        });
        dispatch({ type: "MANAGE_PLAYLIST", payload: [...playlists] });
      } catch (error) {
        console.error("error in getting playlists", error);
      }
    }
  };

  const getUserHistory = async () => {
    if (isAuthorized) {
      try {
        const {
          data: { history }
        } = await getHistoryOfUserService(authToken);
        dispatch({ type: "MANAGE_HISTORY", payload: [...history] });
      } catch (error) {
        console.error("error in getting user's history", error);
      }
    }
  };

  const addVideoToWatchLater = async ({ id, title }) => {
    const video = { id, title };
    if (isAuthorized) {
      try {
        const response = await addVideoToWatchLaterService(authToken, video);
        dispatch({
          type: "MANAGE_WATCH_LATER",
          payload: response.data.watchlater
        });
        showToast(" Video added to watch later", "success");
      } catch (error) {
        console.log("Error in adding video to watch later", error);
      }
    }
  };

  const getVideoFromWatchLater = async () => {
    if (isAuthorized) {
      try {
        const {
          data: { watchlater }
        } = await getWatchLaterVideoOfUserService(authToken);
        dispatch({ type: "MANAGE_WATCH_LATER", payload: [...watchlater] });
      } catch (error) {
        console.log("Error in getting video from watch later", error);
      }
    }
  };

  const handleLikedVideos = async (video) => {
    console.log(video);
    const isVideoExistsInLiked = state.likes.find((item) => item._id === video._id) === undefined ? false : true;
    if (!isAuthorized) {
      showToast("Please login to like video.", "info");
    } else {
      try {
        const {
          data: { likes }
        } = isVideoExistsInLiked ? await removeVideoFromLikedVideos(authToken,video._id) : 
        await addVideoToLikedVideo(authToken, video);
        dispatch({type: "MANAGE_LIKES", payload: likes})
        showToast(isVideoExistsInLiked ? "Video removed from likes" : "Video added as liked video.", "success");
      } catch (error) {
        showToast("Error in adding video to liked videos.", "error");
        console.error("Error in adding video to liked videos", error);
      }
    }
  };

  const getUsersLikedVideos = async () => {
    if(isAuthorized){
      try{
        const {
          data:{ likes }
        } = await getAllLikedVideos(authToken);
      dispatch({type: "MANAGE_LIKES",payload: [...likes]});
    }
      catch(error){
        console.error("Error getting all liked videos",error)
      }
    }
  }

  useEffect(() => {
    getUserCreatedPlaylist();
    getUserHistory();
    getVideoFromWatchLater();
    getUsersLikedVideos();
  }, []);

  return (
    <ServiceContext.Provider
      value={{ state, dispatch, initialDataState, addVideoToWatchLater, handleLikedVideos }}
    >
      {children}
    </ServiceContext.Provider>
  );
};

const useServices = () => useContext(ServiceContext);

export { useServices, ServiceProvider };
