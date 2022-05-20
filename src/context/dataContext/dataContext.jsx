import { createContext, useContext, useState } from "react";
import axios from "axios";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [clickedCategory, setClickedCategory] = useState("All");
  const [video, setVideo] = useState([]);

  const getAllVideosFromDatabase = async () => {
    const response = await axios.get("/api/videos");
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
