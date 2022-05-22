import axios from "axios";

const deletePlaylistService = (authToken, playlistId) => {
  return axios.delete(`/api/user/playlists/${playlistId}`, {
    headers: { authorization: authToken }
  });
};

export { deletePlaylistService };
