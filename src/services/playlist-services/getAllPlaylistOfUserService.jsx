import axios from "axios";

const getAllPlaylistOfUserService = (authToken) => {
  return axios.get("/api/user/playlists", {
    headers: { authorization: authToken }
  });
};

export { getAllPlaylistOfUserService };
