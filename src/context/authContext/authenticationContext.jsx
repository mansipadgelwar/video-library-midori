import { createContext, useContext, useState } from "react";
import { userLoginservice } from "../../services";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("login")).token
  );
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")).user
  );

  const loginUser = async (email, password) => {
    try {
      const response = await userLoginservice(email, password);
      if (response.status === 200) {
        localStorage.setItem(
          "login",
          JSON.stringify({ token: response.data.encodedToken })
        );
        setToken(response.data.encodedToken);
        localStorage.setItem(
          "user",
          JSON.stringify({ user: response.data.foundUser })
        );
        setUser(response.data.foundUser);
      }
    } catch (error) {
      console.error("Error in login functionality");
    }
  };

  return (
    <AuthContext.Provider value={{ token, setToken, user, setUser, loginUser }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
