import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import { useAuth } from "../authContext/authenticationContext";
import { dataReducer } from "../../reducers";
import {
  getHistoryOfUserService,
  addVideoToWatchLaterService,
  getWatchLaterVideoOfUserService
} from "../../services";
import { useData } from "../dataContext/dataContext";
import { useToast } from "../../custom-hooks/useToast";

const initialDataState = {
  playlists: [],
  history: [],
  watchLater: []
};

const ServiceContext = createContext(initialDataState);

const ServiceProvider = ({ children }) => {
  const { isAuthorized, authToken } = useAuth();
  const { videos } = useData();
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

  const addVideoToWatchLater = async (id) => {
    console.log("add video", videos);
    // const video = videos.find((item) => item._id === id);

    if (isAuthorized) {
      try {
        const {
          data: { watchLater }
        } = await addVideoToWatchLaterService(authToken, videos);
        dispatch({ type: "MANAGE_WATCH_LATER", payload: watchLater });
        showToast(" Video added to watch later", "success");
        console.log("add to watch later");
      } catch (error) {
        console.log("Error in adding video to watch later", error);
      }
    }
  };

  const getVideoFromWatchLater = async () => {
    if (isAuthorized) {
      try {
        const {
          data: { watchLater }
        } = await getWatchLaterVideoOfUserService(authToken);
        dispatch({ type: "MANAGE_WATCH_LATER", payload: [...watchLater] });
      } catch (error) {
        console.log("Error in getting video from watch later", error);
      }
    }
  };

  useEffect(() => {
    getUserCreatedPlaylist();
    getUserHistory();
    // addVideoToWatchLater();
    getVideoFromWatchLater();
  }, []);

  return (
    <ServiceContext.Provider
      value={{ state, dispatch, initialDataState, addVideoToWatchLater }}
    >
      {children}
    </ServiceContext.Provider>
  );
};

const useServices = () => useContext(ServiceContext);

export { useServices, ServiceProvider };
