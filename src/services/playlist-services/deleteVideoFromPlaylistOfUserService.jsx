import axios from "axios";

const deleteVideoFromPlaylistOfUserService = (
  authToken,
  playlistId,
  videoId
) => {
  return axios.delete(`/api/user/playlists/${playlistId}/${videoId}`, {
    headers: { authorization: authToken },
  });
};

export { deleteVideoFromPlaylistOfUserService };
