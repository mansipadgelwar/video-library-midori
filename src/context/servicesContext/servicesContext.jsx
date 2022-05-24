import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import { useAuth } from "../authContext/authenticationContext";
import { dataReducer } from "../../reducers";
import { getHistoryOfUserService } from "../../services";

const initialDataState = {
  playlists: [],
  history: []
};

const ServiceContext = createContext(initialDataState);

const ServiceProvider = ({ children }) => {
  const { isAuthorized, authToken } = useAuth();

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

  useEffect(() => {
    getUserCreatedPlaylist();
    getUserHistory();
  }, []);
  return (
    <ServiceContext.Provider value={{ state, dispatch, initialDataState }}>
      {children}
    </ServiceContext.Provider>
  );
};

const useServices = () => useContext(ServiceContext);

export { useServices, ServiceProvider };
