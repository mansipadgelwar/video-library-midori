import { createContext, useContext, useReducer } from "react";
import { userLoginService } from "../../services";
import { authReducer, initialAuthState } from "../../reducers";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const setAuthState = () => {
    const getTokenFromLocalStorage = localStorage.getItem("token");
    const getUserFromLocalStorage = localStorage.getItem("user");
    if (getTokenFromLocalStorage) {
      return {
        ...initialAuthState,
        authToken: getTokenFromLocalStorage,
        isAuthorized: true,
        authUser: JSON.parse(getUserFromLocalStorage)
      };
    }
    return initialAuthState;
  };

  const [authState, authDispatch] = useReducer(authReducer, setAuthState);
  const loginUser = async (email, password) => {
    // console.log(email, password);
    try {
      const { data, status } = await userLoginService(email, password);
      if (status === 200) {
        authDispatch({
          type: "INIT_AUTH",
          payload: {
            authToken: data.encodedToken,
            authUser: data.foundUser
          }
        });
        localStorage.setItem("token", data.encodedToken);
        localStorage.setItem("user", JSON.stringify(data.foundUser));
      }
    } catch (error) {
      console.error("Error in login functionality", error);
    }
  };

  return (
    <AuthContext.Provider value={{ ...authState, authDispatch, loginUser }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
