import axios from "axios";

const getAllPlaylistOfUserService = (authToken) => {
  axios.get("/api/user/playlists", { headers: { authorization: authToken } });
};

export { getAllPlaylistOfUserService };
