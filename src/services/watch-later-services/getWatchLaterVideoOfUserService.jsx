import axios from "axios";

const getWatchLaterVideoOfUserService = (authToken) => {
  return axios.get("/api/user/watchlater", {
    headers: { authorization: authToken }
  });
};

export { getWatchLaterVideoOfUserService };
