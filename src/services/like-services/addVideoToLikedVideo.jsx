import axios from "axios";

const addVideoToLikedVideo = (authToken, video) => {
  axios.post(
    "/api/user/likes",
    { video },
    {
      headers: { authorization: authToken }
    }
  );
};

export { addVideoToLikedVideo };
