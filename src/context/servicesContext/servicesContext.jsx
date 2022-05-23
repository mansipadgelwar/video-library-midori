import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import { useAuth } from "../authContext/authenticationContext";
import { dataReducer } from "../../reducers";

const initialDataState = {
  playlists: [],
  videos: [],
  videoLoader: true
};

const ServiceContext = createContext(initialDataState);

const ServiceProvider = ({ children }) => {
  const { isAuthorized, authToken } = useAuth();

  const [state, dispatch] = useReducer(dataReducer, initialDataState);

  const getUserCreatedPlaylist = async () => {
    try {
      const {
        data: { playlists }
      } = await axios.get("/api/user/playlists", {
        headers: { authorization: authToken }
      });
      dispatch({ type: "MANAGE_PLAYLIST", payload: playlists });
    } catch (error) {
      console.error("error in getting playlists", error);
    }
  };

  useEffect(() => {
    if (isAuthorized) {
      getUserCreatedPlaylist();
    }
  });
  return (
    <ServiceContext.Provider value={{ state, dispatch, initialDataState }}>
      {children}
    </ServiceContext.Provider>
  );
};

const useServices = () => useContext(ServiceContext);

export { useServices, ServiceProvider };
