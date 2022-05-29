import axios from "axios";

const getPlaylistOfUserService = (authToken, playlistId) => {
  return axios.get(`/api/user/playlists/${playlistId}`, {
    headers: { authorization: authToken },
  });
};

export { getPlaylistOfUserService };
