import { createContext, useContext, useState } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [clickedCategory, setClickedCategory] = useState("All");
  return (
    <DataContext.Provider value={{ clickedCategory, setClickedCategory }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { useData, DataProvider };
