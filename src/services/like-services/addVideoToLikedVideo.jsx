import axios from "axios";

const addVideoToLikedVideo = (authToken, video) => {
  console.log("add to likes");
  return axios.post(
    "/api/user/likes",
    { video },
    {
      headers: { authorization: authToken }
    }
  );
};

export { addVideoToLikedVideo };
