import axios from "axios";

const addVideoToWatchLaterService = (authToken, video) => {
  axios.post(
    "/api/user/watchlater",
    { video },
    { headers: { authorization: authToken } }
  );
};

export { addVideoToWatchLaterService };
