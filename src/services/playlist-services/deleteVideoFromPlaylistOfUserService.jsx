import axios from "axios";

const deleteVideoFromPlaylistOfUserService = (
  authToken,
  playlistId,
  videoId
) => {
  axios.delete(`/api/user/playlists/${playlistId}/${videoId}`, {
    headers: { authorization: authToken }
  });
};

export { deleteVideoFromPlaylistOfUserService };
