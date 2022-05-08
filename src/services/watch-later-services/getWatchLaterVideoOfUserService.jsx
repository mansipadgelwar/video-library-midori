import axios from "axios";

const getWatchLaterVideoOfUserService = (authToken) => {
  axios.get("/api/user/watchlater", { headers: { authorization: authToken } });
};

export { getWatchLaterVideoOfUserService };
