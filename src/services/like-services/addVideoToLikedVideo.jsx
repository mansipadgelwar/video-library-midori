import axios from "axios";

const addVideoToLikedVideo = (authToken, video) => {
  return axios.post(
    "/api/user/likes",
    { video },
    {
      headers: { authorization: authToken },
    }
  );
};

export { addVideoToLikedVideo };
