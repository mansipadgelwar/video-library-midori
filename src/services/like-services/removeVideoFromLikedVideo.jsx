import axios from "axios";

const removeVideoFromLikedVideos = (authToken, videoId) => {
  return axios.delete(`/api/user/likes/${videoId}`, {
    headers: { authorization: authToken },
  });
};

export { removeVideoFromLikedVideos };
