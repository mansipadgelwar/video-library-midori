import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState
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

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { videos }
        } = await axios.get("/api/videos");
        if (clickedCategory !== "All") {
          const filterData = videos.filter(
            (item) => item.category === clickedCategory
          );
          videoDispatch({
            type: "SET_VIDEOS",
            payload: [...filterData]
          });
          return filterData;
        }
        videoDispatch({
          type: "SET_VIDEOS",
          payload: [...videos]
        });
        return videos;
      } catch (error) {
        console.error("error in getting all videos", error);
      }
    })();
  });

  return (
    <DataContext.Provider
      value={{
        videos: videoState.videos,
        videoLoader: videoState.videoLoader,
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
