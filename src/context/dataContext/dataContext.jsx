import {
  createContext,
  useContext,
  useReducer,
  useState,
  useEffect
} from "react";
import axios from "axios";
import { videoReducer } from "../../reducers";

const initialVideoState = {
  videos: [],
  videoLoader: true
};

const DataContext = createContext(initialVideoState);

const DataProvider = ({ children }) => {
  const [clickedCategory, setClickedCategory] = useState("All");
  const [videoState, videoDispatch] = useReducer(
    videoReducer,
    initialVideoState
  );

  const getAllVideosFromDatabase = async () => {
    try {
      const response = await axios.get("/api/videos");
      if (response.status === 200) {
        const data = response.data.videos;
        const {
          data: { videos }
        } = response;
        if (clickedCategory !== "All") {
          const filterData = videos.filter(
            (item) => item.category === clickedCategory
          );
          videoDispatch({
            type: "SET_VIDEOS",
            payload: { filterData }
          });
          return filterData;
        }
        videoDispatch({
          type: "SET_VIDEOS",
          payload: { videos }
        });
        return data;
      }
    } catch (error) {
      console.error("error in getting all videos", error);
    }
  };

  useEffect(() => {
    getAllVideosFromDatabase();
  }, []);

  return (
    <DataContext.Provider
      value={{
        ...videoState,
        clickedCategory,
        setClickedCategory,
        videoDispatch
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { useData, DataProvider };
