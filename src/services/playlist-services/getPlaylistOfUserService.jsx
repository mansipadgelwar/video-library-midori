import axios from "axios";

const getPlaylistOfUserService = (authToken, playlistId) => {
  axios.get(`/api/user/playlists/${playlistId}`, {
    headers: { authorization: authToken }
  });
};

export { getPlaylistOfUserService };
