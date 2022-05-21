import { createContext, useContext } from "react";

const initialDataState = {
  playlists: []
};

const ServiceContext = createContext(initialDataState);

const ServiceProvider = ({ children }) => {
  return <ServiceContext.Provider>{children}</ServiceContext.Provider>;
};

const useServices = () => useContext(ServiceContext);

export { useServices, ServiceContext };
