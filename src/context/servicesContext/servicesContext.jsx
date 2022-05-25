import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import { useAuth } from "../authContext/authenticationContext";
import { dataReducer } from "../../reducers";
import {
  getHistoryOfUserService,
  addVideoToWatchLaterService,
  getWatchLaterVideoOfUserService
} from "../../services";
import { useToast } from "../../custom-hooks/useToast";

const initialDataState = {
  playlists: [],
  history: [],
  watchlater: [],
  singlePlaylists: []
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

  useEffect(() => {
    getUserCreatedPlaylist();
    getUserHistory();
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
