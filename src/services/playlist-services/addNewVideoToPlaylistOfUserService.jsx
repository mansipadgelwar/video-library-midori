import axios from "axios";

const addNewVideoToPlaylistOfUserService = (authToken, playlistId, video) => {
  return axios.post(
    `/api/user/playlists/${playlistId}`,
    { video },
    { headers: { authorization: authToken } }
  );
};

export { addNewVideoToPlaylistOfUserService };
