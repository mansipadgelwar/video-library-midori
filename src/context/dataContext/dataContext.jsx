import { createContext, useContext, useState } from "react";
import axios from "axios";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [clickedCategory, setClickedCategory] = useState("All");
  const [video, setVideo] = useState([]);

  const getAllVideosFromDatabase = async () => {
    try {
      const response = await axios.get("/api/videos");
      if (response.status === 200) {
        const data = response.data.videos;
        if (clickedCategory !== "All") {
          const filterData = [...data].filter(
            (item) => item.category === clickedCategory
          );
          setVideo(filterData);
          return filterData;
        }
        setVideo(data);
        return data;
      }
    } catch (error) {
      console.error("error in getting all videos", error);
    }
  };

  return (
    <DataContext.Provider
      value={{
        clickedCategory,
        setClickedCategory,
        getAllVideosFromDatabase,
        video
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { useData, DataProvider };
